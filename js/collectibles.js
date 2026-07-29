const collectibles = {

    postcardBackgrounds: {
        fireworks: {
            id: "fireworks",
            name: "Fireworks",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/fireworks.png",
            rarity: "Rare",
            description: "A beautiful fireworks background for your postcard!"
        },

        sakura: {
            id: "sakura",
            name: "Sakura",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/sakura.png",
            rarity: "Epic",
            description: "A gentle spring evening with cherry blossoms."
        },

        starry_night: {
            id: "starrynight",
            name: "Starry Night",
            type: "postcard_background",
            image: "assets/collectibles/backgrounds/starry-night.png",
            rarity: "Legendary",
            description: "A peaceful starry night sky."
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