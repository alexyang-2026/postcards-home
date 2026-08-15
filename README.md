# Postcards Home

Postcards Home is a web application for turning moments into digital postcards that combine photos, captions, locations, moods, and music. (Its features as a mobile app is still in development.)

Rather than acting as a generic postcard editor, Postcards Home is designed around preserving different dimensions of a memory. Alongside the visual elements of a moment, users can select a mood and receive a piece of classical music that accompanies the postcard, thereby creating an immersive experience that stimulates the memory when images alone cannot.

As users create and save more postcards, they can also unlock collectible customization options, including postcard backgrounds, wallpapers, and other items.

> **Postcards Home is currently in beta.**

## Features

### Postcard Creation
- Create postcards from your own photos
- Add captions, dates, and locations
- Choose from different stamps
- Select a mood and receive accompanying classical music
- Customize postcard backgrounds with unlocked collectibles
- Download and share completed postcards

### Memories
- Save postcards to your account
- Organize postcards into Life Segments
- Browse previously created postcards through the Inventory
- Preserve the music, mood, location, and other information associated with each postcard

### Collectibles & Customization
- Unlock new items as you use the app
- Customize postcard backgrounds
- Customize screen wallpapers
- Collect stamps and other unlockable items

### Accounts
- User authentication
- Persistent postcard collections
- User-specific Life Segments, collectibles, and preferences
- Secure access to user data and uploaded images

### Other
- Multilingual interface. The app is currently supported in:
    - English
    - Mandarin Chinese
    - French
    - German
    - Spanish
    Please let me know if there are any translation errors!
- Installable Progressive Web App (PWA)
- Responsive web interface

## Tech Stack

Postcards Home is built primarily with vanilla web technologies rather than a frontend framework.

### Frontend
- HTML
- CSS
- JavaScript

### Backend & Infrastructure
- Supabase
  - PostgreSQL database
  - Authentication
  - Storage
  - Row Level Security (RLS)
- Cloudflare Pages

### Developer Tools
- Python
- Pillow

Python-based developer tooling is used for offline asset generation, including the creation of custom stamp assets from source images.

## How To Use It

After creating an account and logging in, open the postcard creator and follow the instructions on screen.

Choose a photo, write a caption, select a stamp and mood, optionally add your location, and create your postcard. The selected mood also determines the classical music that accompanies the memory.

Created postcards can be saved into Life Segments, allowing memories from different periods or parts of your life to be organized separately.

Additional customization options become available through the collectible system. As you use Postcards Home, you can unlock items such as postcard backgrounds, screen wallpapers, and other exclusive customization options.

## Project Status

Postcards Home is currently in beta and under active development. Features, designs, and data structures may change as the application continues to develop.

## Reporting Bugs

If you encounter a bug:

1. Open an Issue in this GitHub repository.
2. Include a description of the problem and, if possible, the steps needed to reproduce it.

You may also contact me at `zixuan.yang2018@gmail.com`.