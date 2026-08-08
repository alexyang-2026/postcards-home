const collectibles = {

    postcardBackgrounds: {
        default: { // Chances are, default background will not appear in anyone's inventory
            id: "default",
            name: "Default",
            type: "postcard_background",
            image: "",
            rarity: "Common",
            description: "The classic white postcard.",
            text_color: "black",
            how_to_get: "Default: everyone already should have it"
        },

        fireworks: {
            id: "fireworks",
            name: "Fireworks",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/fireworks.png",
            rarity: "Rare",
            description: "A beautiful fireworks background for your postcard!",
            text_color: "yellow",
            how_to_get: "Create your first life segment to get it."
        },

        sakura: {
            id: "sakura",
            name: "Sakura",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/sakura.png",
            rarity: "Epic",
            description: "A gentle spring evening with cherry blossoms.",
            text_color: "yellow",
            how_to_get: "Unlocked as a reward after adding first postcard to a life segment."
        },

        starry_night: {
            id: "starrynight",
            name: "Starry Night",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/starry-night.png",
            rarity: "Legendary",
            description: "A peaceful starry night sky.",
            text_color: "white",
            how_to_get: "Unlocked after adding a postcard to a life segment after 9:00 PM."
        },

        dawn: {
            id: "dawn",
            name: "Dawn",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/dawn.png",
            rarity: "Epic",
            description: "A peaceful dawn of day",
            text_color: "limegreen",
            how_to_get: "Unlocked after adding a postcard to a life segment before 7:00 AM."
        },

        ocean: {
            id: "ocean",
            name: "Ocean",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/ocean.png",
            rarity: "Epic",
            description: "A peaceful ocean",
            text_color: "white",
            how_to_get: "Add a postcard to a life segment during the summer months."
        }
    },

    wallpapers: {

        default: { // Chances are, default background will not appear in anyone's inventory
            id: "default",
            name: "Default",
            type: "wallpaper",
            image: "",
            rarity: "Common",
            description: "The classic beige color background.",
            text_color: "black",
            how_to_get: "Default: everyone already should have it"
        },

        sunset: {
            id: "sunset",
            name: "Sunset Wallpaper",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/sunset.png",
            rarity: "Epic",
            description: "A peaceful sunset to relax and enjoy.",
            how_to_get: "Add a postcard to a life segment between 6:00 PM and 7:00 PM."
        },

        bostonplaza: {
            id: "bostonplaza",
            name: "Boston Christian Science Plaza",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/boston-christian-science-plaza.png",
            rarity: "Epic",
            description: "Enjoy making postcards with one of Boston's most famous landmarks in the background.",
            how_to_get: "Create a postcard while in Boston (in the USA)."
        },

        starry_night_wallpaper: {
            id: "starrynightwallpaper",
            name: "Starry Night (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/starry-night-wallpaper.png",
            rarity: "Legendary",
            text_color: "gold",
            description: "A calming starry night.",
            how_to_get: "Add a postcard to a life segments after 9:00 PM."
        },


        twilightwallpaper: {
            id: "twilightwallpaper",
            name: "Twilight (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/twilight-wallpaper.png",
            rarity: "Epic",
            text_color: "white",
            description: "Enjoy the twilight calm.",
            how_to_get: "Add a postcard to a life segment between 7:30-8:00 AM, or 8:00-8:30 PM."
        },

        winterwallpaper: {
            id: "winterwallpaper",
            name: "Winter (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/winter-wallpaper.png",
            rarity: "Rare",
            description: "Enjoy gentle snowflakes as you make your postcards.",
            how_to_get: "Add a postcard to a life segment between the months of November and February."
        },

        dawnwallpaper: {
            id: "dawnwallpaper",
            name: "Dawn (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/dawn-wallpaper.png",
            rarity: "Epic",
            description: "Enjoy a beautiful sunrise.",
            how_to_get: "Unlocked after adding a postcard to a life segment before 7:00 AM."
        },

        oceanwallpaper: {
            id: "oceanwallpaper",
            name: "Ocean (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/ocean-wallpaper.png",
            rarity: "Legendary",
            text_color: "white",
            description: "Relax beside gentle ocean waves as you create your postcards.",
            how_to_get: "Add a postcard to a life segment during the summer months."
        },
    },
    
    exclusiveMusic: {

        // ALL OF CHOPIN'S NOCTURNES. This will become a collectible set that will be obtainable
        chopin_nocturne_op9no1: {
            id: "chopin_nocturne_9_1",
            name: "Chopin: Nocturne Op. 9 No. 1 in B-flat Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_9_1.mp3",
            rarity: "Legendary",
            description: "A dark, expressive nocturne of haunting lyricism."
        },

        chopin_nocturne_op9no2: {
            id: "chopin_nocturne_9_2",
            name: "Chopin: Nocturne Op. 9 No. 2 in E-flat Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_9_2.mp3",
            rarity: "Legendary",
            description: "Perhaps Chopin's most beloved nocturne."
        },

        chopin_nocturne_op9no3: {
            id: "chopin_nocturne_9_3",
            name: "Chopin: Nocturne Op. 9 No. 3 in B Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_9_3.mp3",
            rarity: "Legendary",
            description: "Radiant and ornamented with graceful elegance."
        },

        chopin_nocturne_op15no1: {
            id: "chopin_nocturne_15_1",
            name: "Chopin: Nocturne Op. 15 No. 1 in F Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_15_1.mp3",
            rarity: "Legendary",
            description: "Warm and lyrical, with a dramatic middle section."
        },

        chopin_nocturne_op15no2: {
            id: "chopin_nocturne_15_2",
            name: "Chopin: Nocturne Op. 15 No. 2 in F-sharp Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_15_2.mp3",
            rarity: "Legendary",
            description: "Gentle and luminous throughout."
        },

        chopin_nocturne_op15no3: {
            id: "chopin_nocturne_15_3",
            name: "Chopin: Nocturne Op. 15 No. 3 in G Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_15_3.mp3",
            rarity: "Legendary",
            description: "Stormy passion gives way to quiet introspection."
        },

        chopin_nocturne_op27no1: {
            id: "chopin_nocturne_27_1",
            name: "Chopin: Nocturne Op. 27 No. 1 in C-sharp Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_27_1.mp3",
            rarity: "Legendary",
            description: "One of Chopin's most dramatic nocturnes."
        },

        chopin_nocturne_op27no2: {
            id: "chopin_nocturne_27_2",
            name: "Chopin: Nocturne Op. 27 No. 2 in D-flat Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_27_2.mp3",
            rarity: "Legendary",
            description: "A quiet, introverted piece."
        },

        chopin_nocturne_op32no1: {
            id: "chopin_nocturne_32_1",
            name: "Chopin: Nocturne Op. 32 No. 1 in B Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_32_1.mp3",
            rarity: "Legendary",
            description: "Serene elegance with a surprising ending."
        },

        chopin_nocturne_op32no2: {
            id: "chopin_nocturne_32_2",
            name: "Chopin: Nocturne Op. 32 No. 2 in A-flat Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_32_2.mp3",
            rarity: "Legendary",
            description: "Tender lyricism with rich harmonies."
        },

        chopin_nocturne_op37no1: {
            id: "chopin_nocturne_37_1",
            name: "Chopin: Nocturne Op. 37 No. 1 in G Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_37_1.mp3",
            rarity: "Legendary",
            description: "Meditative and chorale-like."
        },

        chopin_nocturne_op37no2: {
            id: "chopin_nocturne_37_2",
            name: "Chopin: Nocturne Op. 37 No. 2 in G Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_37_2.mp3",
            rarity: "Legendary",
            description: "Peaceful and luminous."
        },

        chopin_nocturne_op48no1: {
            id: "chopin_nocturne_48_1",
            name: "Chopin: Nocturne Op. 48 No. 1 in C Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_48_1.mp3",
            rarity: "Legendary",
            description: "A monumental, tragic masterpiece."
        },

        chopin_nocturne_op48no2: {
            id: "chopin_nocturne_48_2",
            name: "Chopin: Nocturne Op. 48 No. 2 in F-sharp Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_48_2.mp3",
            rarity: "Legendary",
            description: "Melancholy with quiet nobility."
        },

        chopin_nocturne_op55no1: {
            id: "chopin_nocturne_55_1",
            name: "Chopin: Nocturne Op. 55 No. 1 in F Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_55_1.mp3",
            rarity: "Legendary",
            description: "Deeply introspective and poetic."
        },

        chopin_nocturne_op55no2: {
            id: "chopin_nocturne_55_2",
            name: "Chopin: Nocturne Op. 55 No. 2 in E-flat Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_55_2.mp3",
            rarity: "Legendary",
            description: "Delicate, flowing, and endlessly graceful."
        },

        chopin_nocturne_op62no1: {
            id: "chopin_nocturne_62_1",
            name: "Chopin: Nocturne Op. 62 No. 1 in B Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_62_1.mp3",
            rarity: "Legendary",
            description: "Sophisticated late-Chopin lyricism."
        },

        chopin_nocturne_op62no2: {
            id: "chopin_nocturne_62_2",
            name: "Chopin: Nocturne Op. 62 No. 2 in E Major",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_62_2.mp3",
            rarity: "Legendary",
            description: "A serene farewell to the nocturne genre."
        },

        chopin_nocturne_op72no1: {
            id: "chopin_nocturne_72_1",
            name: "Chopin: Nocturne Op. 72 No. 1 in E Minor",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_72_1.m4a",
            rarity: "Legendary",
            description: "An early nocturne filled with youthful melancholy."
        },

        chopin_nocturne_posth_csharpminor: {
            id: "chopin_nocturne_posth_csharp_minor",
            name: "Chopin: Nocturne in C-sharp Minor (Posthumous)",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_posth_csharp_minor.mp3",
            rarity: "Legendary",
            description: "One of Chopin's most famous posthumous works."
        },

        chopin_nocturne_posth_cminor: {
            id: "chopin_nocturne_posth_c_minor",
            name: "Chopin: Nocturne in C Minor (Posthumous)",
            type: "exclusive_music",
            image: "assets/collectibles/exclusive_music/piano.png",
            audio: "assets/audio/chopin_nocturnes/chopin_nocturne_posth_c_minor.mp3",
            rarity: "Legendary",
            description: "A powerful and dramatic concluding nocturne."
        },
    }
};


// Helpter function to find collectibles
function findCollectibleByID(collectibleID) {
    for (const categoryName in collectibles) {
        const category = collectibles[categoryName];

        for (const collectibleKey in category) {
            const collectible = category[collectibleKey];

            if (collectible.id === collectibleID) {
                return {
                    ...collectible, // thisis because we want to take all properties inside the collectible object and copy it into a new object
                    category: categoryName,
                    collectibleKey: collectibleKey
                };
            }
        }
    }

    return null;
}


// Helper function to reward a random Chopin nocturne
async function tryUnlockRandomChopinNocturne(loggedInUserID) {
    if (!loggedInUserID) {
        return
    }

    // There is only a 20% chance of unlocking a random nocturne
    if (Math.random() >= 0.2) {
        return;
    }

    // Now we find Chopin nocturnes the user does not own yet
    const unownedNocturnes = Object.values(collectibles.exclusiveMusic).filter(function(nocturne) {
        return nocturne.id.startsWith("chopin_nocturne_") && !ownedCollectibles.includes(nocturne.id);
    })

    // What if the user owns every nocturne?
    if (unownedNocturnes.length === 0) {
        return;
    }

    // Choose one unowned Chopin nocturne randomly
    const randomIndex = Math.floor(Math.random() * unownedNocturnes.length);
    const randomNocturne = unownedNocturnes[randomIndex];

    await unlockCollectible(loggedInUserID, randomNocturne.id, ownedCollectibles);
}
