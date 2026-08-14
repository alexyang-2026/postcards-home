# I decided to use Python for this. A few reasons why:
# 1. This is in dev_tools, meaning that it won't be shipped as a feature of the application
# 2. Therefore, there was no point in using JS; using Python keeps production code shorter
# 3. Also, it separates asset generation from runtime application logic

from PIL import Image, ImageOps, ImageDraw
import os

def create_stamp_from_image(image_filename, desired_stamp_name):
    # Need RGBA instead of RGB because later the punched-out stamp holes need to eb transparent
    stamp = Image.new("RGBA", (600, 700), "white")

    input_path = "dev_tools/stamp_creator/input/" + image_filename
    if not os.path.exists(input_path):
        print("Input image does not exist.")
        return

    output_path = "assets/images/stamps/" + desired_stamp_name + ".png"
    if os.path.exists(output_path):
        print("A stamp with that name already exists! Stamp saving stopped.")
        return

    photo = Image.open(input_path).convert("RGBA")
    original_ratio = photo.width / photo.height

    # These are the target width/height for the photo
    white_margin = 50
    border_size = 5

    photo_width = stamp.width - (2 * white_margin) - (2 * border_size)
    photo_height = stamp.height - (2 * white_margin) - (2 * border_size)

    target_ratio = photo_width / photo_height


    ### CASE 1: PHOTO IS TOO WIDE, SO WE HAVE TO CROP THE WIDTH
    if original_ratio > target_ratio:
        # Then (width) = (height) x (target ratio) because (width)/(height) = (target ratio)
        # Thus, crop_width is the target width we want our stamp photo to be
        crop_width = int(photo.height * target_ratio)

        left = (photo.width - crop_width) // 2
        right = left + crop_width

        photo = photo.crop((left, 0, right, photo.height))

    ### CASE 2: PHOTO IS TOO TALL, SO WE DO THE SAME THING
    elif original_ratio < target_ratio:
        crop_height = int(photo.width / target_ratio)

        top = (photo.height - crop_height) // 2
        bottom = top + crop_height

        photo = photo.crop((0, top, photo.width, bottom))

    ### CASE 3: EXACT ASPECT RATIO, NO CROPPING NEEDED
    else:
        print(photo.size, "is the correct size needed.")

    ### NOW WE CAN RESIZE SAFELY
    photo = photo.resize((photo_width, photo_height))
    print(photo.size)

    # Now I will give the photo a 5px solid black border
    border_color = "black"
    bordered_photo = ImageOps.expand(photo, border=border_size, fill=border_color)

    stamp_border_x = 50
    stamp_border_y = 50

    stamp.paste(bordered_photo, (stamp_border_x, stamp_border_y))

    # Convert the stamp into a canvas so we can draw on it
    # Use PIL's ImageDraw.Draw method to draw on it
    draw = ImageDraw.Draw(stamp)

    hole_radius = 10
    hole_spacing = 30

    # Make the stamp frame for the top
    for x in range(0, stamp.width, hole_spacing):
        draw.ellipse(
            (x - hole_radius, -hole_radius, x + hole_radius, hole_radius),
            fill=(225, 225, 225, 0)
        )

    # Make the stamp frame for the bottom
    for x in range(0, stamp.width, hole_spacing):
        draw.ellipse(
            (x - hole_radius, stamp.height - hole_radius, x + hole_radius, stamp.height + hole_radius),
            fill=(225, 225, 225, 0)
        )

    # Make the stamp frame for the LEFT side
    for y in range(0, stamp.height, hole_spacing):
        draw.ellipse(
            (-hole_radius, y - hole_radius, hole_radius, y + hole_radius),
            fill=(255, 255, 255, 0)
        )

    # Make the stamp frame for the RIGHT side
    for y in range(0, stamp.height, hole_spacing):
        draw.ellipse(
            (stamp.width - hole_radius, y - hole_radius, stamp.width + hole_radius, y + hole_radius),
            fill=(255, 255, 255, 0)
        )

    stamp.save(output_path)
    return stamp


create_stamp_from_image("sunset_image.jpg", "sunset_stamp")