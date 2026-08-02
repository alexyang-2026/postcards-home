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
            how_to_get: "Unlocked as a reward after creating first life segment"
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
            how_to_get: "Unlocked after adding a postcard to a life segment after 8:00 PM."
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
        }
    },

    wallpapers: {

        sunset: {
            id: "sunset",
            name: "Sunset Wallpaper",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/sunset.png",
            rarity: "Epic",
            description: "A peaceful sunset to relax and enjoy."
        },

        bostonplaza: {
            id: "bostonplaza",
            name: "Boston Christian Science Plaza",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/boston-christian-science-plaza.png",
            rarity: "Epic",
            description: "Enjoy making postcards with one of Boston's most famous landmarks in the background."
        },

        starry_night_wallpaper: {
            id: "starrynightwallpaper",
            name: "Starry Night (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/starry-night-wallpaper.png",
            rarity: "Legendary",
            text_color: "gold",
            description: "A calming starry night."
        },


        twilight: {
            id: "twilightwallpaper",
            name: "Twilight (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/twilight-wallpaper.png",
            rarity: "Epic",
            text_color: "white",
            description: "Enjoy the twilight calm."
        },

        winterwallpaper: {
            id: "winterwallpaper",
            name: "Winter (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/winter-wallpaper.png",
            rarity: "Rare",
            description: "Enjoy gentle snowflakes as you make your postcards."
        },

        dawnwallpaper: {
            id: "dawnwallpaper",
            name: "Dawn (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/dawn-wallpaper.png",
            rarity: "Epic",
            description: "Enjoy a beautiful sunrise.",
            how_to_get: "Unlocked after adding a postcard to a life segment before 7:00 AM."
        }
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
                    category: categoryName
                };
            }
        }
    }

    return null;
}