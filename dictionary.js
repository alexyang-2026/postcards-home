const languageSelect = document.getElementById("languageSelect");

const translations = {
    en: {
        title: "Postcards Home",
        subtitle: "Made by Alex Yang",
        locationButton: "Use My Location",
        downloadButton: "Click to Download Your Postcard",
        shareButton: "Share Postcard",
        resetPostcardButton: "New Postcard",
        instructionsTitle: "Instructions:",
        instructionsList:
            "1️⃣ Choose a Photo 📸<br>" +
            "2️⃣ Write a Caption ✍️<br>" +
            "3️⃣ Choose a Mood 🎵<br>" +
            "4️⃣ Add a Location 📍<br>" +
            "5️⃣ Download or Share ❤️",
        captionInputPlaceholder: "Write a caption..."
    },

    zh: {
        title: "给家的明信片",
        subtitle: "Alex Yang 制作",
        locationButton: "使用我的位置",
        downloadButton: "下载明信片",
        shareButton: "分享明信片",
        resetPostcardButton: "新明信片",
        instructionsTitle: "使用方法：",
        instructionsList:
            "1️⃣ 选择照片 📸<br>" +
            "2️⃣ 写一句话 ✍️<br>" +
            "3️⃣ 选择心情 🎵<br>" +
            "4️⃣ 添加位置 📍<br>" +
            "5️⃣ 下载或分享 ❤️",
        captionInputPlaceholder: "写一点自己的心情吧..."
    }
};


const dropdownTranslations = {
    en: {
        stamps: {
            "": "Select Stamp...",
            "images/music-stamp.png": "🎵 Music Stamp",
            "images/home-stamp.png": "🏡 Home Stamp",
            "images/travel-stamp.png": "✈️ Travel Stamp",
            "images/canada-stamp.png": "🇨🇦 Canada Stamp",
            "images/princeton-stamp.png": "🐯 Princeton Stamp"
        },
        moods: {
            "": "Choose Mood...",
            happy: "😀 Happy",
            excited: "😃 Excited!",
            romantic: "🥰 Romantic",
            reflective: "😇 Calm / Reflective",
            ambitious: "😈 Ambitious",
            angry: "😡 Angry",
            inspired: "🤩 Inspired",
            chinese: "🇨🇳 Chinese"
        }
    },

    zh: {
        stamps: {
            "": "选择邮票...",
            "images/music-stamp.png": "🎵 音乐邮票",
            "images/home-stamp.png": "🏡 房子邮票",
            "images/travel-stamp.png": "✈️ 旅行邮票",
            "images/canada-stamp.png": "🇨🇦 加拿大邮票",
            "images/princeton-stamp.png": "🐯 普林斯顿邮票"
        },
        moods: {
            "": "选择心情...",
            happy: "😀 开心",
            excited: "😃 兴奋",
            romantic: "🥰 浪漫",
            reflective: "😇 平静 / 沉思",
            ambitious: "😈 有抱负",
            angry: "😡 愤怒",
            inspired: "🤩 受到启发",
            chinese: "🇨🇳 中国人 👍"
        }
    }
};

function translateDropdown(selectElement, translationDictionary) {
    for (const option of selectElement.options) {
        option.textContent = translationDictionary[option.value];
    }
}

function changeLanguage(language){
    const text = translations[language];

    document.getElementById("title").textContent = text.title;
    document.getElementById("subtitle").textContent = text.subtitle;
    document.getElementById("locationButton").textContent = text.locationButton;
    document.getElementById("downloadButton").textContent = text.downloadButton;
    document.getElementById("shareButton").textContent = text.shareButton;
    document.getElementById("resetPostcardButton").textContent = text.resetPostcardButton;

    document.getElementById("instructionsTitle").textContent = text.instructionsTitle;
    document.getElementById("instructionsList").innerHTML = text.instructionsList;
    document.getElementById("captionInput").placeholder = text.captionInputPlaceholder;

    translateDropdown(stampSelect, dropdownTranslations[language].stamps);
    translateDropdown(moodSelect, dropdownTranslations[language].moods);

}

languageSelect.addEventListener("change", function(){
    changeLanguage(languageSelect.value);
});