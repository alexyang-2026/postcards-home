const collectibles = {

    postcardBackgrounds: {
        default: { // Chances are, default background will not appear in anyone's inventory
            id: "default",
            name: "Default",
            type: "postcard_background",
            image: "",
            rarity: "Common",
            description: "The classic white postcard.",
            text_color: "black"
        },

        fireworks: {
            id: "fireworks",
            name: "Fireworks",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/fireworks.png",
            rarity: "Rare",
            description: "A beautiful fireworks background for your postcard!",
            text_color: "yellow"
        },

        sakura: {
            id: "sakura",
            name: "Sakura",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/sakura.png",
            rarity: "Epic",
            description: "A gentle spring evening with cherry blossoms.",
            text_color: "yellow"
        },

        starry_night: {
            id: "starrynight",
            name: "Starry Night",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/starry-night.png",
            rarity: "Legendary",
            description: "A peaceful starry night sky.",
            text_color: "white"
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
            description: "A calming starry night."
        },


        twilight: {
            id: "twilightwallpaper",
            name: "Twilight (Wallpaper)",
            type: "wallpaper",
            image: "assets/collectibles/wallpapers/twilight-wallpaper.png",
            rarity: "Epic",
            description: "Enjoy the twilight calm."
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