/// I have a separate dictionary for inventory because it is so large
const inventoryTranslations = {
    en: {
        translation: {
            common: {
                language: "Language:",
                languageLabel: "Choose language",
                loading: "Loading..."
            },

            inventory: {
                documentTitle: "User Inventory",

                menu: {
                    toggle: "☰ Show/Hide Menu",
                    title: "My Inventory",
                    fullInventory: "Full Inventory",
                    lifeSegments: "Life Segments",
                    stamps: "Stamps",
                    collectibles: "Collectibles",
                    profileSettings: "Profile Settings",
                    returnToMain: "Return to Main Page"
                },

                header: {
                    title: "Full Inventory",
                    subtitle: "Your saved postcards and collections will appear here."
                },

                sections: {
                    lifeSegments: "My Life Segment Collection",
                    stamps: "My Stamp Collection",
                    collectibles: "My Other Collectibles",
                    otherCollectibles: "Postcard & App Collectibles",
                    chopinNocturnes: "Exclusive Music Collection: Chopin Nocturnes",
                    goldbergVariations: "Exclusive Music Collection: Bach Goldberg Variations"
                },

                lifeSegments: {
                    postcardCount: "Contains {{count}} Postcards",
                    createdOn: "Created on {{date}}",
                    coverAlt: "{{title}} cover image",

                    modalTitle: "View Postcards",
                    modalTitleWithName: "View Postcards in {{title}}",
                    instructions: "Click on a Postcard to Zoom In or Edit. (Postcards may take some time to load.)",

                    coverMenu: "Change Life Segment Cover Image",
                    sunriseWater: "Sunrise Over Water (Default)",
                    sunriseMountains: "Sunrise Over Mountains",
                    sunsetCity: "Sunset Over City",
                    cityDusk: "City At Dusk",
                    bridgeNight: "Bridge At Night",
                    mountainRailway: "Mountain Railway",
                    worldMap: "World Map",

                    deleteButton: "Delete Life Segment",

                    loading: "Loading Life Segment...",
                    noneSelected: "No Life Segment is currently selected.",
                    loginRequired: "You must be logged in.",
                    noUpdate: "No Life Segment was updated. Check your UPDATE policy.",
                    coverUpdated: "Life Segment cover updated!",
                    coverUpdateError: "Could not change the Life Segment cover: {{message}}",
                    deleteConfirmation: "Are you sure you want to delete this Life Segment?",
                    deleteError: "Error: Could not delete Life Segment ({{message}})"
                },

                postcards: {
                    noCaption: "No Caption",
                    listeningTo: "♫ Currently listening to: ♫",

                    opening: "Opening Postcard...",
                    notFound: "Postcard not found.",
                    openError: "Could not open Postcard: {{message}}",

                    saving: "Saving postcard...",

                    noneSelected: "No postcard is currently selected.",
                    deleteConfirmation: "Are you sure you want to delete this postcard?",
                    deleting: "Deleting postcard...",
                    noneDeleted: "No postcard was deleted. Check your DELETE policy.",
                    deleteSuccess: "Postcard deleted successfully.",
                    deleteError: "Could not delete postcard: {{message}}",

                    preparingDownload: "Preparing Download...",
                    downloadError: "Could not download postcard: {{message}}",

                    preparingShare: "Preparing Postcard...",
                    imageCreationError: "Could not create postcard image.",
                    shareTitle: "Postcards Home",
                    shareText: "A postcard for you!",
                    shareUnsupported: "Sharing is not supported by this browser, so the postcard was downloaded instead.",
                    shareError: "Could not share postcard: {{message}}"
                },

                stamps: {
                    rarity: "Rarity: {{rarity}}"
                },

                rarities: {
                    Common: "Common",
                    Uncommon: "Uncommon",
                    Rare: "Rare",
                    Epic: "Epic",
                    Legendary: "Legendary"
                },

                collectibleCategories: {
                    postcardBackground: "Postcard Background",
                    wallpaper: "Wallpaper",
                    exclusiveMusic: "Exclusive Music"
                },

                editor: {
                    title: "View / Edit Postcard",
                    editCaption: "Edit Caption",
                    editLocation: "📍 Edit Location",

                    chooseMood: "Choose Mood...",
                    happy: "😀 Happy",
                    excited: "😃 Excited!",
                    romantic: "🥰 Romantic",
                    reflective: "😇 Calm / Reflective",
                    ambitious: "😈 Ambitious",
                    angry: "😡 Angry",
                    inspired: "🤩 Inspired",

                    rerollMusicLabel: "Choose another random music piece",

                    deletePostcard: "Delete Postcard",
                    downloadPostcard: "Download Postcard",
                    sharePostcard: "Share Postcard",
                    saveChanges: "Save Changes",

                    captionEditorTitle: "Edit Caption",
                    captionPlaceholder: "Write your caption...",
                    applyCaption: "Apply Caption",
                    discardConfirmation: "Are you sure you want to discard your changes?",

                    closeLabel: "Close Postcard Editor",
                    closeCaptionLabel: "Close Caption Editor"
                },

                profile: {
                    closeLabel: "Close profile settings",
                    title: "Profile Settings",

                    profileHeading: "Profile",
                    fullName: "Full Name",
                    username: "Username",

                    preferencesHeading: "Preferences",
                    preferredLanguage: "Preferred Language",

                    saveChanges: "Save Changes",

                    accountHeading: "Account",
                    accountDescription: "Permanently delete your account, postcards, Life Segments, collectibles, and uploaded images.",
                    
                    loginRequired: "You must be logged in.",
                    logout: "Log Out",
                    deleteAccount: "Delete My Account",

                    loading: "Loading Profile Settings...",
                    loadError: "Could not load profile settings: {{message}}",

                    fullNameRequired: "Full name cannot be empty.",
                    usernameRequired: "Username cannot be empty.",

                    saving: "Saving Profile Settings...",
                    saved: "Profile settings saved!",
                    saveError: "Could not save profile settings: {{message}}",
                    usernameTaken: "That username is already being used.",

                    logoutConfirmation: "Are you sure you want to log out?",
                    loggingOut: "Logging Out...",
                    logoutError: "Could not log out: {{message}}"
                },

                accountDeletion: {
                    firstConfirmation: "Are you sure you want to permanently delete your account?",

                    firstPrompt: "Type DELETE MY ACCOUNT PERMANENTLY to confirm.",
                    firstPhrase: "DELETE MY ACCOUNT PERMANENTLY",

                    secondPrompt: "Deleting your account will permanently remove ALL postcards and Life Segments. This cannot be recovered. Some inventory items and account data may remain temporarily before permanent deletion, but recovery is not guaranteed.\n\nType I CONFIRM I HAVE READ AND AGREE to confirm that you have read, understood, and agreed to this policy.",
                    secondPhrase: "I CONFIRM I HAVE READ AND AGREE",

                    cancelled: "Account Deletion Cancelled.",
                    deleting: "Deleting account...",

                    scheduled: "Your account has been scheduled for deletion. Although all postcards and Life Segments cannot be recovered, please email zixuan.yang2018@gmail.com as soon as possible if you want to attempt to retrieve your account and remaining inventory items.",

                    error: "Could not delete account: {{message}}"
                },

                loading: {
                    inventory: "Loading Inventory..."
                }
            }
        }
    },

    zh: {
        translation: {
            common: {
                language: "语言：",
                languageLabel: "选择语言",
                loading: "加载中……"
            },

            inventory: {
                documentTitle: "用户收藏",

                menu: {
                    toggle: "☰ 显示／隐藏菜单",
                    title: "我的收藏",
                    fullInventory: "完整收藏",
                    lifeSegments: "人生篇章",
                    stamps: "邮票",
                    collectibles: "收藏品",
                    profileSettings: "个人资料设置",
                    returnToMain: "返回主页"
                },

                header: {
                    title: "完整收藏",
                    subtitle: "您保存的明信片和收藏将在这里显示。"
                },

                sections: {
                    lifeSegments: "我的人生篇章",
                    stamps: "我的邮票收藏",
                    collectibles: "我的其他收藏品",
                    otherCollectibles: "明信片与应用收藏品",
                    chopinNocturnes: "专属音乐收藏：肖邦夜曲",
                    goldbergVariations: "专属音乐收藏：巴赫《哥德堡变奏曲》"
                },

                lifeSegments: {
                    postcardCount: "包含 {{count}} 张明信片",
                    createdOn: "创建于 {{date}}",
                    coverAlt: "{{title}} 的封面图片",

                    modalTitle: "查看明信片",
                    modalTitleWithName: "查看「{{title}}」中的明信片",
                    instructions: "点击明信片即可放大或编辑。（明信片可能需要一些时间加载。）",

                    coverMenu: "更换人生篇章封面",
                    sunriseWater: "水上日出（默认）",
                    sunriseMountains: "群山日出",
                    sunsetCity: "城市落日",
                    cityDusk: "黄昏城市",
                    bridgeNight: "夜晚桥梁",
                    mountainRailway: "山间铁路",
                    worldMap: "世界地图",

                    deleteButton: "删除人生篇章",

                    loading: "正在加载人生篇章……",
                    noneSelected: "当前未选择任何人生篇章。",
                    loginRequired: "您必须先登录。",
                    noUpdate: "没有更新任何人生篇章。请检查您的 UPDATE 策略。",
                    coverUpdated: "人生篇章封面已更新！",
                    coverUpdateError: "无法更换人生篇章封面：{{message}}",
                    deleteConfirmation: "您确定要删除这个人生篇章吗？",
                    deleteError: "错误：无法删除人生篇章（{{message}}）",

                    closeLabel: "关闭人生篇章",
                },

                postcards: {
                    noCaption: "没有文字",
                    listeningTo: "♫ 当前正在播放：♫",

                    opening: "正在打开明信片……",
                    notFound: "找不到该明信片。",
                    openError: "无法打开明信片：{{message}}",

                    saving: "正在保存明信片……",

                    noneSelected: "当前未选择任何明信片。",
                    deleteConfirmation: "您确定要删除这张明信片吗？",
                    deleting: "正在删除明信片……",
                    noneDeleted: "没有删除任何明信片。请检查您的 DELETE 策略。",
                    deleteSuccess: "明信片删除成功。",
                    deleteError: "无法删除明信片：{{message}}",

                    preparingDownload: "正在准备下载……",
                    downloadError: "无法下载明信片：{{message}}",

                    preparingShare: "正在准备明信片……",
                    imageCreationError: "无法创建明信片图片。",
                    shareTitle: "Postcards Home",
                    shareText: "送给你的一张明信片！",
                    shareUnsupported: "此浏览器不支持分享，因此已改为下载明信片。",
                    shareError: "无法分享明信片：{{message}}"
                },

                stamps: {
                    rarity: "稀有度：{{rarity}}"
                },

                rarities: {
                    Common: "普通",
                    Uncommon: "稀有",
                    Rare: "珍稀",
                    Epic: "史诗",
                    Legendary: "传说"
                },

                collectibleCategories: {
                    postcardBackground: "明信片背景",
                    wallpaper: "壁纸",
                    exclusiveMusic: "专属音乐"
                },

                editor: {
                    title: "查看／编辑明信片",
                    editCaption: "编辑文字",
                    editLocation: "📍 编辑地点",

                    chooseMood: "选择心情……",
                    happy: "😀 开心",
                    excited: "😃 兴奋",
                    romantic: "🥰 浪漫",
                    reflective: "😇 平静／沉思",
                    ambitious: "😈 雄心勃勃",
                    angry: "😡 愤怒",
                    inspired: "🤩 充满灵感",

                    rerollMusicLabel: "随机选择另一首音乐",

                    deletePostcard: "删除明信片",
                    downloadPostcard: "下载明信片",
                    sharePostcard: "分享明信片",
                    saveChanges: "保存更改",

                    captionEditorTitle: "编辑文字",
                    captionPlaceholder: "写下明信片文字……",
                    applyCaption: "应用文字",
                    discardConfirmation: "您确定要放弃所做的更改吗？",

                    closeLabel: "关闭明信片编辑器",
                    closeCaptionLabel: "关闭文字编辑器"
                },

                profile: {
                    closeLabel: "关闭个人资料设置",
                    title: "个人资料设置",

                    profileHeading: "个人资料",
                    fullName: "姓名",
                    username: "用户名",

                    preferencesHeading: "偏好设置",
                    preferredLanguage: "首选语言",

                    saveChanges: "保存更改",

                    accountHeading: "账户",
                    accountDescription: "永久删除您的账户、明信片、人生篇章、收藏品和已上传的图片。",
                    
                    loginRequired: "您必须先登录。",
                    logout: "退出登录",
                    deleteAccount: "删除我的账户",

                    loading: "正在加载个人资料设置……",
                    loadError: "无法加载个人资料设置：{{message}}",

                    fullNameRequired: "姓名不能为空。",
                    usernameRequired: "用户名不能为空。",

                    saving: "正在保存个人资料设置……",
                    saved: "个人资料设置已保存！",
                    saveError: "无法保存个人资料设置：{{message}}",
                    usernameTaken: "该用户名已被使用。",

                    logoutConfirmation: "您确定要退出登录吗？",
                    loggingOut: "正在退出登录……",
                    logoutError: "无法退出登录：{{message}}"
                },

                accountDeletion: {
                    firstConfirmation: "您确定要永久删除账户吗？",

                    firstPrompt: "请输入 DELETE MY ACCOUNT PERMANENTLY 以确认。",
                    firstPhrase: "DELETE MY ACCOUNT PERMANENTLY",

                    secondPrompt: "删除账户将永久移除所有明信片和人生篇章，并且无法恢复。部分收藏品和账户数据在永久删除前可能会暂时保留，但无法保证可以恢复。\n\n请输入 I CONFIRM I HAVE READ AND AGREE，以确认您已阅读、理解并同意此政策。",
                    secondPhrase: "I CONFIRM I HAVE READ AND AGREE",

                    cancelled: "账户删除已取消。",
                    deleting: "正在删除账户……",

                    scheduled: "您的账户已被安排删除。所有明信片和人生篇章均无法恢复。如果您希望尝试找回账户及剩余收藏品，请尽快发送电子邮件至 zixuan.yang2018@gmail.com。",

                    error: "无法删除账户：{{message}}"
                },

                loading: {
                    inventory: "正在加载收藏……"
                }
            }
        }
    },


};



const collectiblesTranslations = {
    en: {
        translation: {
            collectibles: {
                postcardBackgrounds: {

                    default: {
                        name: "Default",
                        description: "The classic white postcard."
                    },

                    fireworks: {
                        name: "Fireworks",
                        description: "A beautiful fireworks background for your postcard!"
                    },

                    sakura: {
                        name: "Sakura",
                        description: "A gentle spring evening with cherry blossoms."
                    },

                    starry_night: {
                        name: "Starry Night",
                        description: "A peaceful starry night sky."
                    },

                    dawn: {
                        name: "Dawn",
                        description: "A peaceful dawn of day."
                    },

                    sunsethills: {
                        name: "Sunset Hills",
                        description: "A peaceful sunset to relax and enjoy."
                    },

                    ocean: {
                        name: "Ocean",
                        description: "A peaceful ocean."
                    }
                },

                wallpapers: {

                    default: {
                        name: "Default",
                        description: "The classic beige color background."
                    },

                    sunsetwallpaper: {
                        name: "Sunset Wallpaper",
                        description: "A peaceful sunset to relax and enjoy."
                    },

                    bostonplaza: {
                        name: "Boston Christian Science Plaza",
                        description: "Enjoy making postcards with one of Boston's most famous landmarks in the background."
                    },

                    starry_night_wallpaper: {
                        name: "Starry Night (Wallpaper)",
                        description: "A calming starry night."
                    },

                    twilightwallpaper: {
                        name: "Twilight (Wallpaper)",
                        description: "Enjoy the twilight calm."
                    },

                    winterwallpaper: {
                        name: "Winter (Wallpaper)",
                        description: "Enjoy gentle snowflakes as you make your postcards."
                    },

                    dawnwallpaper: {
                        name: "Dawn (Wallpaper)",
                        description: "Enjoy a beautiful sunrise."
                    },

                    oceanwallpaper: {
                        name: "Ocean (Wallpaper)",
                        description: "Relax beside gentle ocean waves as you create your postcards."
                    },

                    cloudcitywallpaper: {
                        name: "Cloud City (Wallpaper)",
                        description: "Enjoy a stunning cloud view from high in the sky!"
                    }

                },

                exclusiveMusic: {
                    
                    /// SECTION FOR CHOPIN NOCTURNES
                    chopin_nocturne_op9no1: {
                        name: "Chopin: Nocturne Op. 9 No. 1 in B-flat Minor",
                        description: "A dark, expressive nocturne of haunting lyricism."
                    },

                    chopin_nocturne_op9no2: {
                        name: "Chopin: Nocturne Op. 9 No. 2 in E-flat Major",
                        description: "Perhaps Chopin's most beloved nocturne."
                    },

                    chopin_nocturne_op9no3: {
                        name: "Chopin: Nocturne Op. 9 No. 3 in B Major",
                        description: "Radiant and ornamented with graceful elegance."
                    },

                    chopin_nocturne_op15no1: {
                        name: "Chopin: Nocturne Op. 15 No. 1 in F Major",
                        description: "Warm and lyrical, with a dramatic middle section."
                    },

                    chopin_nocturne_op15no2: {
                        name: "Chopin: Nocturne Op. 15 No. 2 in F-sharp Major",
                        description: "Gentle and luminous throughout."
                    },

                    chopin_nocturne_op15no3: {
                        name: "Chopin: Nocturne Op. 15 No. 3 in G Minor",
                        description: "Stormy passion gives way to quiet introspection."
                    },

                    chopin_nocturne_op27no1: {
                        name: "Chopin: Nocturne Op. 27 No. 1 in C-sharp Minor",
                        description: "One of Chopin's most dramatic nocturnes."
                    },

                    chopin_nocturne_op27no2: {
                        name: "Chopin: Nocturne Op. 27 No. 2 in D-flat Major",
                        description: "A quiet, introverted piece."
                    },

                                        chopin_nocturne_op32no1: {
                        name: "Chopin: Nocturne Op. 32 No. 1 in B Major",
                        description: "Serene beauty interrupted by a dramatic conclusion."
                    },

                    chopin_nocturne_op32no2: {
                        name: "Chopin: Nocturne Op. 32 No. 2 in A-flat Major",
                        description: "Elegant melodies full of warmth and charm."
                    },

                    chopin_nocturne_op37no1: {
                        name: "Chopin: Nocturne Op. 37 No. 1 in G Minor",
                        description: "Dark opening followed by a peaceful chorale."
                    },

                    chopin_nocturne_op37no2: {
                        name: "Chopin: Nocturne Op. 37 No. 2 in G Major",
                        description: "Flowing melodies with effortless grace."
                    },

                    chopin_nocturne_op48no1: {
                        name: "Chopin: Nocturne Op. 48 No. 1 in C Minor",
                        description: "A monumental work of passion and grandeur."
                    },

                    chopin_nocturne_op48no2: {
                        name: "Chopin: Nocturne Op. 48 No. 2 in F-sharp Minor",
                        description: "A reflective nocturne filled with quiet emotion."
                    },

                    chopin_nocturne_op55no1: {
                        name: "Chopin: Nocturne Op. 55 No. 1 in F Minor",
                        description: "Deeply expressive with rich harmonic colors."
                    },

                    chopin_nocturne_op55no2: {
                        name: "Chopin: Nocturne Op. 55 No. 2 in E-flat Major",
                        description: "Graceful melodies suspended in tranquility."
                    },

                    chopin_nocturne_op62no1: {
                        name: "Chopin: Nocturne Op. 62 No. 1 in B Major",
                        description: "One of Chopin's most sophisticated late nocturnes."
                    },

                    chopin_nocturne_op62no2: {
                        name: "Chopin: Nocturne Op. 62 No. 2 in E Major",
                        description: "A luminous farewell to the nocturne genre."
                    },
                    
                    chopin_nocturne_op72no1: {
                        name: "Chopin: Nocturne Op. 72 No. 1 in E Minor",
                        description: "An early nocturne filled with youthful melancholy."
                    },

                    chopin_nocturne_posth_csharpminor: {
                        name: "Chopin: Nocturne in C-sharp Minor (Posthumous)",
                        description: "One of Chopin's most famous posthumous works."
                    },

                    chopin_nocturne_posth_cminor: {
                        name: "Chopin: Nocturne in C Minor (Posthumous)",
                        description: "A powerful and dramatic concluding nocturne."
                    },

                    /// SECTION FOR BACH GOLDBERG VARIATIONS
                    bach_goldberg_aria: {
                        name: "Bach: Goldberg Variations — Aria",
                        description: "The serene aria that opens and frames the Goldberg Variations."
                    },

                    bach_goldberg_variation_1: {
                        name: "Bach: Goldberg Variations — Variation 1",
                        description: "A lively opening variation full of energy and motion."
                    },

                    bach_goldberg_variation_2: {
                        name: "Bach: Goldberg Variations — Variation 2",
                        description: "A flowing contrapuntal variation with graceful interplay between voices."
                    },

                    bach_goldberg_variation_3: {
                        name: "Bach: Goldberg Variations — Variation 3",
                        description: "The first canon of the set, elegant and carefully balanced."
                    },

                    bach_goldberg_variation_4: {
                        name: "Bach: Goldberg Variations — Variation 4",
                        description: "A bright and rhythmically buoyant variation."
                    },

                    bach_goldberg_variation_5: {
                        name: "Bach: Goldberg Variations — Variation 5",
                        description: "A brilliant, quick-moving variation with sparkling keyboard writing."
                    },

                    bach_goldberg_variation_6: {
                        name: "Bach: Goldberg Variations — Variation 6",
                        description: "A compact canon with gentle, conversational counterpoint."
                    },

                    bach_goldberg_variation_7: {
                        name: "Bach: Goldberg Variations — Variation 7",
                        description: "A graceful dance-like variation with an elegant character."
                    },

                    bach_goldberg_variation_8: {
                        name: "Bach: Goldberg Variations — Variation 8",
                        description: "A brilliant variation filled with agile keyboard exchanges."
                    },

                    bach_goldberg_variation_9: {
                        name: "Bach: Goldberg Variations — Variation 9",
                        description: "A poised canon with clear and lyrical counterpoint."
                    },

                    bach_goldberg_variation_10: {
                        name: "Bach: Goldberg Variations — Variation 10",
                        description: "A compact fughetta full of intricate contrapuntal writing."
                    },

                    bach_goldberg_variation_11: {
                        name: "Bach: Goldberg Variations — Variation 11",
                        description: "A fast and delicate variation with brilliant hand-crossing textures."
                    },

                    bach_goldberg_variation_12: {
                        name: "Bach: Goldberg Variations — Variation 12",
                        description: "An ingenious canon with tightly interwoven voices."
                    },

                    bach_goldberg_variation_13: {
                        name: "Bach: Goldberg Variations — Variation 13",
                        description: "A tender and richly ornamented lyrical variation."
                    },

                    bach_goldberg_variation_14: {
                        name: "Bach: Goldberg Variations — Variation 14",
                        description: "A virtuosic burst of rapid motion and keyboard brilliance."
                    },

                    bach_goldberg_variation_15: {
                        name: "Bach: Goldberg Variations — Variation 15",
                        description: "A dark and introspective canon that closes the first half."
                    },

                    bach_goldberg_variation_16: {
                        name: "Bach: Goldberg Variations — Variation 16",
                        description: "A grand French overture that opens the second half of the cycle."
                    },

                    bach_goldberg_variation_17: {
                        name: "Bach: Goldberg Variations — Variation 17",
                        description: "A fast and brilliant variation with energetic hand-crossing."
                    },

                    bach_goldberg_variation_18: {
                        name: "Bach: Goldberg Variations — Variation 18",
                        description: "A clear and elegant canon with graceful momentum."
                    },

                    bach_goldberg_variation_19: {
                        name: "Bach: Goldberg Variations — Variation 19",
                        description: "A light and intimate variation with a gentle dance character."
                    },

                    bach_goldberg_variation_20: {
                        name: "Bach: Goldberg Variations — Variation 20",
                        description: "A dazzling virtuosic variation full of rapid keyboard motion."
                    },

                    bach_goldberg_variation_21: {
                        name: "Bach: Goldberg Variations — Variation 21",
                        description: "A deeply expressive canon with a darker emotional character."
                    },

                    bach_goldberg_variation_22: {
                        name: "Bach: Goldberg Variations — Variation 22",
                        description: "A sturdy contrapuntal variation with an almost ceremonial character."
                    },

                    bach_goldberg_variation_23: {
                        name: "Bach: Goldberg Variations — Variation 23",
                        description: "A playful and brilliant variation filled with quick exchanges."
                    },

                    bach_goldberg_variation_24: {
                        name: "Bach: Goldberg Variations — Variation 24",
                        description: "An elegant canon with flowing rhythmic motion."
                    },

                    bach_goldberg_variation_25: {
                        name: "Bach: Goldberg Variations — Variation 25",
                        description: "A profoundly expressive and introspective variation in G minor."
                    },

                    bach_goldberg_variation_26: {
                        name: "Bach: Goldberg Variations — Variation 26",
                        description: "A brilliant variation of rapid motion and rhythmic vitality."
                    },

                    bach_goldberg_variation_27: {
                        name: "Bach: Goldberg Variations — Variation 27",
                        description: "The final canon of the Goldberg Variations, light and intricately woven."
                    },

                    bach_goldberg_variation_28: {
                        name: "Bach: Goldberg Variations — Variation 28",
                        description: "A dazzling variation filled with rapid trills and brilliant keyboard writing."
                    },

                    bach_goldberg_variation_29: {
                        name: "Bach: Goldberg Variations — Variation 29",
                        description: "A powerful and exuberant variation of chords and virtuosic passagework."
                    },

                    bach_goldberg_variation_30: {
                        name: "Bach: Goldberg Variations — Variation 30 (Quodlibet)",
                        description: "The joyous Quodlibet that brings the thirty variations to their conclusion."
                    },

                    bach_goldberg_aria_da_capo: {
                        name: "Bach: Goldberg Variations — Aria da capo",
                        description: "The opening Aria returns at the end of the Goldberg Variations."
                    },

                    bach_goldberg_complete: {
                        name: "Bach: Goldberg Variations — Complete",
                        description: "The complete Goldberg Variations, from the opening Aria through the full cycle."
                    }
                
                }
            }
        }
    },

    zh: {
        translation: {
            collectibles: {
                postcardBackgrounds: {

                    default: {
                        name: "默认背景",
                        description: "经典的白色明信片。"
                    },

                    fireworks: {
                        name: "烟花",
                        description: "为你的明信片增添绚丽烟花背景！"
                    },

                    sakura: {
                        name: "樱花",
                        description: "樱花盛开的温柔春夜。"
                    },

                    starry_night: {
                        name: "星夜",
                        description: "宁静祥和的星空夜晚。"
                    },

                    dawn: {
                        name: "黎明",
                        description: "宁静而美好的晨曦。"
                    },

                    sunsethills: {
                        name: "夕阳山丘",
                        description: "在宁静的夕阳中放松身心，享受美好时光。"
                    },

                    ocean: {
                        name: "海洋",
                        description: "平静辽阔的大海。"
                    }
                },

                wallpapers: {

                    default: {
                        name: "默认壁纸",
                        description: "经典的米色背景。"
                    },

                    sunsetwallpaper: {
                        name: "日落壁纸",
                        description: "欣赏宁静的日落，放松身心。"
                    },

                    bostonplaza: {
                        name: "波士顿基督教科学广场",
                        description: "以波士顿最著名的地标之一作为制作明信片的背景。"
                    },

                    starry_night_wallpaper: {
                        name: "星夜壁纸",
                        description: "令人平静的星空夜景。"
                    },

                    twilightwallpaper: {
                        name: "暮光壁纸",
                        description: "享受黄昏时分的宁静。"
                    },

                    winterwallpaper: {
                        name: "冬日壁纸",
                        description: "在轻柔飘落的雪花中制作你的明信片。"
                    },

                    dawnwallpaper: {
                        name: "黎明壁纸",
                        description: "欣赏美丽的日出。"
                    },

                    oceanwallpaper: {
                        name: "海洋壁纸",
                        description: "在轻柔海浪的陪伴下放松并制作你的明信片。"
                    },
                    
                    cloudcitywallpaper: {
                        name: "云端之城（壁纸）",
                        description: "在高空中欣赏壮丽的云端美景！"
                    }

                },

                exclusiveMusic: {

                    chopin_nocturne_op9no1: {
                        name: "肖邦：降B小调夜曲，作品9第1首",
                        description: "一首深沉而富有表现力、充满诗意的夜曲。"
                    },

                    chopin_nocturne_op9no2: {
                        name: "肖邦：降E大调夜曲，作品9第2首",
                        description: "也许是肖邦最广为人知的夜曲。"
                    },

                    chopin_nocturne_op9no3: {
                        name: "肖邦：B大调夜曲，作品9第3首",
                        description: "光彩夺目，并饰以优雅华丽的装饰音。"
                    },

                    chopin_nocturne_op15no1: {
                        name: "肖邦：F大调夜曲，作品15第1首",
                        description: "温暖抒情，中段充满戏剧性。"
                    },

                    chopin_nocturne_op15no2: {
                        name: "肖邦：升F大调夜曲，作品15第2首",
                        description: "柔和而明亮，自始至终散发光辉。"
                    },

                    chopin_nocturne_op15no3: {
                        name: "肖邦：G小调夜曲，作品15第3首",
                        description: "狂风暴雨般的激情最终归于静谧的沉思。"
                    },

                    chopin_nocturne_op27no1: {
                        name: "肖邦：升C小调夜曲，作品27第1首",
                        description: "肖邦最具戏剧性的夜曲之一。"
                    },

                    chopin_nocturne_op27no2: {
                        name: "肖邦：降D大调夜曲，作品27第2首",
                        description: "一首安静而内省的作品。"
                    },

                                        chopin_nocturne_op32no1: {
                        name: "肖邦：B大调夜曲，作品32第1首",
                        description: "宁静优美，却以戏剧性的结尾令人震撼。"
                    },

                    chopin_nocturne_op32no2: {
                        name: "肖邦：降A大调夜曲，作品32第2首",
                        description: "旋律优雅，充满温暖与魅力。"
                    },

                    chopin_nocturne_op37no1: {
                        name: "肖邦：G小调夜曲，作品37第1首",
                        description: "阴郁的开端，随后进入平静庄严的圣咏。"
                    },

                    chopin_nocturne_op37no2: {
                        name: "肖邦：G大调夜曲，作品37第2首",
                        description: "流畅自然的旋律，散发优雅气息。"
                    },

                    chopin_nocturne_op48no1: {
                        name: "肖邦：C小调夜曲，作品48第1首",
                        description: "充满激情与恢弘气势的杰作。"
                    },

                    chopin_nocturne_op48no2: {
                        name: "肖邦：升F小调夜曲，作品48第2首",
                        description: "沉思而细腻，蕴含安静深刻的情感。"
                    },

                    chopin_nocturne_op55no1: {
                        name: "肖邦：F小调夜曲，作品55第1首",
                        description: "情感深沉，和声色彩丰富。"
                    },

                    chopin_nocturne_op55no2: {
                        name: "肖邦：降E大调夜曲，作品55第2首",
                        description: "优美的旋律仿佛静静悬浮于宁静之中。"
                    },

                    chopin_nocturne_op62no1: {
                        name: "肖邦：B大调夜曲，作品62第1首",
                        description: "肖邦晚期最成熟精致的夜曲之一。"
                    },

                    chopin_nocturne_op62no2: {
                        name: "肖邦：E大调夜曲，作品62第2首",
                        description: "宛如对夜曲体裁的一次光辉告别。"
                    },

                    chopin_nocturne_op72no1: {
                        name: "肖邦：E小调夜曲，作品72第1首",
                        description: "一首充满青春忧郁气息的早期夜曲。"
                    },

                    chopin_nocturne_posth_csharpminor: {
                        name: "肖邦：升C小调夜曲（遗作）",
                        description: "肖邦最著名的遗作之一。"
                    },

                    chopin_nocturne_posth_cminor: {
                        name: "肖邦：C小调夜曲（遗作）",
                        description: "一首强烈而富有戏剧性的最后夜曲。"
                    },

                    // 巴赫哥德堡变奏曲
                    bach_goldberg_aria: {
                        name: "巴赫：《哥德堡变奏曲》— 咏叹调",
                        description: "宁静优美的咏叹调，为《哥德堡变奏曲》揭开序幕，并贯穿整部作品的结构。"
                    },

                    bach_goldberg_variation_1: {
                        name: "巴赫：《哥德堡变奏曲》— 第1变奏",
                        description: "充满活力与动感的第一首变奏。"
                    },

                    bach_goldberg_variation_2: {
                        name: "巴赫：《哥德堡变奏曲》— 第2变奏",
                        description: "流畅的对位织体，各声部之间优雅地相互呼应。"
                    },

                    bach_goldberg_variation_3: {
                        name: "巴赫：《哥德堡变奏曲》— 第3变奏",
                        description: "全曲的第一首卡农，优雅而精巧地保持着声部之间的平衡。"
                    },

                    bach_goldberg_variation_4: {
                        name: "巴赫：《哥德堡变奏曲》— 第4变奏",
                        description: "明亮轻快、富有节奏活力的变奏。"
                    },

                    bach_goldberg_variation_5: {
                        name: "巴赫：《哥德堡变奏曲》— 第5变奏",
                        description: "快速而辉煌，展现出闪耀灵动的键盘技巧。"
                    },

                    bach_goldberg_variation_6: {
                        name: "巴赫：《哥德堡变奏曲》— 第6变奏",
                        description: "精巧的卡农，各声部以温柔而富有对话感的方式交织。"
                    },

                    bach_goldberg_variation_7: {
                        name: "巴赫：《哥德堡变奏曲》— 第7变奏",
                        description: "优雅而富有舞蹈气息的变奏。"
                    },

                    bach_goldberg_variation_8: {
                        name: "巴赫：《哥德堡变奏曲》— 第8变奏",
                        description: "辉煌灵动，各声部在键盘上敏捷地相互交错。"
                    },

                    bach_goldberg_variation_9: {
                        name: "巴赫：《哥德堡变奏曲》— 第9变奏",
                        description: "从容优雅的卡农，拥有清晰而富有歌唱性的对位。"
                    },

                    bach_goldberg_variation_10: {
                        name: "巴赫：《哥德堡变奏曲》— 第10变奏",
                        description: "一首精巧的小赋格，充满细致复杂的对位写作。"
                    },

                    bach_goldberg_variation_11: {
                        name: "巴赫：《哥德堡变奏曲》— 第11变奏",
                        description: "快速而轻盈，以精彩的双手交叉技巧展现键盘的灵动。"
                    },

                    bach_goldberg_variation_12: {
                        name: "巴赫：《哥德堡变奏曲》— 第12变奏",
                        description: "构思巧妙的卡农，各声部紧密交织。"
                    },

                    bach_goldberg_variation_13: {
                        name: "巴赫：《哥德堡变奏曲》— 第13变奏",
                        description: "温柔抒情，旋律中点缀着丰富精致的装饰音。"
                    },

                    bach_goldberg_variation_14: {
                        name: "巴赫：《哥德堡变奏曲》— 第14变奏",
                        description: "充满炫技色彩，以迅疾的运动展现辉煌的键盘技巧。"
                    },

                    bach_goldberg_variation_15: {
                        name: "巴赫：《哥德堡变奏曲》— 第15变奏",
                        description: "深沉而内省的卡农，为整部作品的上半部分画下句点。"
                    },

                    bach_goldberg_variation_16: {
                        name: "巴赫：《哥德堡变奏曲》— 第16变奏",
                        description: "宏伟的法国序曲，为整部变奏曲的下半部分揭开序幕。"
                    },

                    bach_goldberg_variation_17: {
                        name: "巴赫：《哥德堡变奏曲》— 第17变奏",
                        description: "快速辉煌，充满富有活力的双手交叉技巧。"
                    },

                    bach_goldberg_variation_18: {
                        name: "巴赫：《哥德堡变奏曲》— 第18变奏",
                        description: "清晰优雅的卡农，在流动中保持从容的气质。"
                    },

                    bach_goldberg_variation_19: {
                        name: "巴赫：《哥德堡变奏曲》— 第19变奏",
                        description: "轻盈而亲切，带有温柔的舞蹈气息。"
                    },

                    bach_goldberg_variation_20: {
                        name: "巴赫：《哥德堡变奏曲》— 第20变奏",
                        description: "绚丽的炫技变奏，充满快速而敏捷的键盘运动。"
                    },

                    bach_goldberg_variation_21: {
                        name: "巴赫：《哥德堡变奏曲》— 第21变奏",
                        description: "情感深沉的卡农，展现出更为阴暗而内省的色彩。"
                    },

                    bach_goldberg_variation_22: {
                        name: "巴赫：《哥德堡变奏曲》— 第22变奏",
                        description: "坚实的对位写作，带有近乎庄严的气质。"
                    },

                    bach_goldberg_variation_23: {
                        name: "巴赫：《哥德堡变奏曲》— 第23变奏",
                        description: "活泼辉煌，各声部之间充满快速而俏皮的交流。"
                    },

                    bach_goldberg_variation_24: {
                        name: "巴赫：《哥德堡变奏曲》— 第24变奏",
                        description: "优雅流畅的卡农，伴随着不断向前的节奏律动。"
                    },

                    bach_goldberg_variation_25: {
                        name: "巴赫：《哥德堡变奏曲》— 第25变奏",
                        description: "一首极富表现力、深沉内省的G小调变奏。"
                    },

                    bach_goldberg_variation_26: {
                        name: "巴赫：《哥德堡变奏曲》— 第26变奏",
                        description: "辉煌而迅疾，充满强烈的节奏活力。"
                    },

                    bach_goldberg_variation_27: {
                        name: "巴赫：《哥德堡变奏曲》— 第27变奏",
                        description: "《哥德堡变奏曲》中最后一首卡农，轻盈而精巧。"
                    },

                    bach_goldberg_variation_28: {
                        name: "巴赫：《哥德堡变奏曲》— 第28变奏",
                        description: "绚丽夺目，快速的颤音与辉煌的键盘技巧贯穿其中。"
                    },

                    bach_goldberg_variation_29: {
                        name: "巴赫：《哥德堡变奏曲》— 第29变奏",
                        description: "强劲而奔放，以宏大的和弦与炫技段落迸发出巨大能量。"
                    },

                    bach_goldberg_variation_30: {
                        name: "巴赫：《哥德堡变奏曲》— 第30变奏（混成曲）",
                        description: "欢乐的混成曲，为三十首变奏带来充满生命力的终章。"
                    },

                    bach_goldberg_aria_da_capo: {
                        name: "巴赫：《哥德堡变奏曲》— 咏叹调再现",
                        description: "开篇的咏叹调再次响起，为《哥德堡变奏曲》画上最后的句点。"
                    },

                    bach_goldberg_complete: {
                        name: "巴赫：《哥德堡变奏曲》— 完整版",
                        description: "完整的《哥德堡变奏曲》，从开篇咏叹调到整套变奏的完整旅程。"
                    }
                }
            }
        }
    },


}
