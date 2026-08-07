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
                    collectibles: "My Other Collectibles"
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
                    collectibles: "我的其他收藏品"
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
    }
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

                    sunset: {
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
                    }

                },

                exclusiveMusic: {

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

                    sunset: {
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
                    }
                }
            }
        }
    }
}