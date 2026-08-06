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