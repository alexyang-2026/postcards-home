// i18next falls back to English for any key missing from these French resources.
const frenchMainTranslations = {
    translation: {
        main: {
            documentTitle: "Postcards Home",
            title: "Postcards Home",
            subtitle: "Créé par Alex Yang",
            selectLanguage: "Choisir la langue :",
            languageLabel: "Choisir la langue de la page",
            steps: {
                choosePhoto: "Étape 1 : choisir une photo",
                writeCaption: "Étape 2 : écrire une légende",
                selectStamp: "Étape 3 : choisir un timbre",
                selectMood: "Étape 4 : choisir une humeur",
                useLocation: "Étape 5 : utiliser votre position"
            },
            controls: {
                captionPlaceholder: "Écrivez une légende…",
                useLocation: "📍 Utiliser ma position"
            },
            stamps: {
                select: "Choisir un timbre…",
                music: "🎵 Timbre musical",
                home: "🏡 Timbre maison",
                travel: "✈️ Timbre voyage",
                canada: "🇨🇦 Timbre du Canada",
                princeton: "🐯 Timbre de Princeton",
                washington_gold: "🇺🇸 Timbre doré George Washington",
                piano: "🎹 Timbre piano de 1941",
                tchaikovsky: "🎵 Timbre Tchaïkovski",
                camera: "📷 Timbre appareil photo de 1965",
                russian_space: "🚀 Timbre spatial russe de 1967",
                sakura: "🌸 Timbre fleur de cerisier"
            },
            moods: {
                select: "Choisir une humeur…",
                happy: "😀 Heureux",
                excited: "😃 Enthousiaste !",
                romantic: "🥰 Romantique",
                reflective: "😇 Calme / Pensif",
                ambitious: "😈 Ambitieux",
                angry: "😡 En colère",
                inspired: "🤩 Inspiré"
            },
            customization: {
                postcardBackground: "Choisir l’arrière-plan de la carte",
                selectPostcardBackground: "Choisir un arrière-plan…",
                defaultPostcard: "Carte blanche par défaut",
                wallpaper: "Choisir le fond d’écran",
                selectWallpaper: "Choisir un fond d’écran…",
                defaultWallpaper: "Fond d’écran par défaut"
            },
            postcard: {
                captionPlaceholder: "Votre légende apparaîtra ici.",
                listeningTo: "♫ En cours d’écoute : ♫"
            },
            actions: {
                login: "Connectez-vous pour enregistrer vos cartes !",
                logout: "Se déconnecter",
                export: "Exporter la carte ▾",
                download: "Télécharger la carte",
                share: "↗ Partager la carte",
                newPostcard: "Nouvelle carte",
                inventory: "Voir l’inventaire complet",
                rerollMusic: "Choisir un autre morceau au hasard"
            },
            accessibility: {
                musicPlayer: "Aperçu musical de la carte",
                postcardPreview: "Aperçu en direct de la carte",
                photoPreview: "Photo sélectionnée pour la carte",
                stampPreview: "Aperçu du timbre sélectionné",
                postcardActions: "Actions de la carte",
                closeLifeSegmentModal: "Fermer la fenêtre du chapitre de vie"
            },
            messages: {
                photoRequired: "Veuillez prendre une photo avant d’enregistrer votre carte.",
                captionRequired: "Veuillez écrire une légende avant d’enregistrer votre carte.",
                downloadSuccess: "🎉 Carte téléchargée avec succès ! 🎉",
                shareSuccess: "🎉 Carte partagée avec succès ! 🎉",
                shareUnsupported: "Le partage n’est pas pris en charge par votre navigateur ; la carte a donc été téléchargée.",
                postcardReset: "Carte réinitialisée avec succès.",
                resetConfirmation: "Voulez-vous vraiment RÉINITIALISER votre carte ?",
                saving: "Enregistrement de la carte… Veuillez patienter…",
                saveToLifeSegmentSuccess: "🎉 Carte ajoutée au chapitre de vie ",
                loginRequired: "Veuillez vous connecter avant d’enregistrer des cartes.",
                locationRequired: "Veuillez activer les services de localisation.",
                automaticPlaybackBlocked: "La lecture automatique de la musique a été bloquée.",
                collectibleUnlocked: "🎉 Vous avez débloqué {{name}} !"
            },
            lifeSegments: {
                noSegments: "Aucun chapitre de vie pour le moment !",
                addPostcard: "Ajouter la carte à un chapitre de vie…",
                create: "+ Nouveau chapitre de vie",
                createTitle: "Créer un chapitre de vie",
                titlePlaceholder: "Titre du chapitre de vie",
                descriptionPlaceholder: "Description",
                createButton: "Créer le chapitre",
                modalTitle: "Créer un chapitre de vie",
                explanation: "Qu’est-ce qu’un « chapitre de vie » ?\n\nC’est une collection de cartes qui conserve vos souvenirs. Au lieu de garder des dizaines de photos sans contexte, prenez quelques instants pour écrire une légende qui leur donne du sens. Imaginez un album de cartes documentant une période précise de votre vie.",
                save: "Enregistrer",
                cancel: "Annuler",
                createSuccess: "Chapitre de vie créé avec succès !\nVous pouvez fermer cette fenêtre ou en créer un autre."
            }
        },
        common: { cancel: "Annuler", loading: "Chargement…", language: "Langue :" },
        footer: {
            privacy: "Politique de confidentialité",
            terms: "Conditions d’utilisation",
            cookies: "Politique relative aux cookies",
            musicCredits: "Crédits musicaux",
            thirdParty: "Mentions de tiers",
            about: "À propos"
        },
        notFound: {
            documentTitle: "404 | Postcards Home",
            title: "Cette carte postale s’est perdue en chemin.",
            description: "La page que vous recherchez n’existe pas.",
            back: "← Retour à Postcards Home"
        }
    }
};

if (typeof translationResources !== "undefined") {
    translationResources.fr = frenchMainTranslations;
}

const frenchLoginTranslations = {
    translation: {
        login: {
            documentTitle: "Postcards Home – Connexion",
            title: "Postcards Home : connexion",
            subtitle: "Créé par Alex Yang",
            emailPlaceholder: "Saisissez votre adresse courriel :",
            passwordPlaceholder: "Saisissez votre mot de passe :",
            showPassword: "Afficher le mot de passe",
            loginButton: "Se connecter",
            createAccount: "Pas encore de compte ? Cliquez ici pour en créer un gratuitement !",
            policyAgreement: "En continuant à utiliser Postcards Home, j’accepte la <a href=\"legal/privacy.html\">Politique de confidentialité</a> et les <a href=\"legal/terms.html\">Conditions d’utilisation</a>.",
            messages: {
                loginSuccess: "Connexion réussie !",
                profileError: "Impossible de charger votre profil : {{message}}",
                deletedAccount: "La suppression de ce compte est programmée et il n’est plus accessible. Vous pourrez peut-être en récupérer une partie en écrivant dès que possible à zixuan.yang2018@gmail.com.",
                redirecting: "Retour à l’application dans {{seconds}}…"
            }
        },
        common: { language: "Langue :", languageLabel: "Choisir la langue" },
        footer: {
            privacy: "Politique de confidentialité", terms: "Conditions d’utilisation",
            cookies: "Politique relative aux cookies", musicCredits: "Crédits musicaux",
            thirdParty: "Mentions de tiers", about: "À propos"
        }
    }
};

if (typeof loginTranslations !== "undefined") {
    loginTranslations.fr = frenchLoginTranslations;
}

const frenchCreateAccountTranslations = {
    translation: {
        createAccount: {
            documentTitle: "Postcards Home : créer un compte",
            title: "Postcards Home : créer un compte",
            subtitle: "Créé par Alex Yang",
            emailPlaceholder: "Votre adresse courriel",
            passwordPlaceholder: "Votre mot de passe",
            confirmPasswordPlaceholder: "Confirmez le mot de passe",
            showPassword: "Afficher le mot de passe",
            firstNamePlaceholder: "Votre prénom",
            lastNamePlaceholder: "Votre nom",
            usernamePlaceholder: "Choisissez un nom d’utilisateur",
            birthdayLabel: "Votre date de naissance :",
            createButton: "Créer le compte",
            accountExists: "Vous avez déjà un compte ? Cliquez ici pour vous connecter",
            passwordRequirements: {
                title: "Exigences du mot de passe :",
                characterPassed: "✅ Au moins 8 caractères", characterFailed: "❌ Au moins 8 caractères",
                uppercasePassed: "✅ Au moins 1 lettre majuscule", uppercaseFailed: "❌ Au moins 1 lettre majuscule",
                lowercasePassed: "✅ Au moins 1 lettre minuscule", lowercaseFailed: "❌ Au moins 1 lettre minuscule",
                numberPassed: "✅ Au moins 1 chiffre", numberFailed: "❌ Au moins 1 chiffre",
                specialPassed: "✅ Au moins 1 caractère spécial (p. ex. !, @, #)", specialFailed: "❌ Au moins 1 caractère spécial (p. ex. !, @, #)"
            },
            usernameCheck: {
                title: "Vérification du nom d’utilisateur :",
                empty: "❌ Veuillez choisir un nom d’utilisateur",
                unavailable: "❌ Nom d’utilisateur indisponible — essayez-en un autre !",
                available: "✅ Nom d’utilisateur disponible !"
            },
            messages: {
                emailRequired: "Veuillez saisir une adresse courriel !", invalidEmail: "Veuillez saisir une adresse courriel valide !",
                passwordRequired: "Veuillez saisir un mot de passe !", invalidPassword: "Le mot de passe ne respecte pas toutes les exigences.",
                passwordMismatch: "Les mots de passe ne correspondent pas.", firstNameRequired: "Veuillez saisir votre vrai prénom !",
                lastNameRequired: "Veuillez saisir votre vrai nom !", usernameRequired: "Veuillez saisir un nom d’utilisateur !",
                birthdayRequired: "Veuillez saisir votre date de naissance !", usernameUnavailable: "Ce nom d’utilisateur n’est pas disponible !",
                waiting: "Veuillez patienter…", accountCreated: "Compte créé avec succès ! Bonne collection de cartes ! 🎉",
                redirecting: "Retour à l’application dans {{seconds}}…"
            }
        },
        common: { language: "Langue :", languageLabel: "Choisir la langue" }
    }
};

if (typeof createAccountTranslations !== "undefined") {
    createAccountTranslations.fr = frenchCreateAccountTranslations;
}

const frenchInventoryTranslations = {
    translation: {
        common: { language: "Langue :", languageLabel: "Choisir la langue", loading: "Chargement…" },
        inventory: {
            documentTitle: "Inventaire de l’utilisateur",
            menu: {
                toggle: "☰ Afficher/masquer le menu", title: "Mon inventaire", fullInventory: "Inventaire complet",
                lifeSegments: "Chapitres de vie", stamps: "Timbres", collectibles: "Objets de collection",
                profileSettings: "Paramètres du profil", returnToMain: "Retour à la page principale"
            },
            header: { title: "Inventaire complet", subtitle: "Vos cartes et collections enregistrées apparaîtront ici." },
            sections: { lifeSegments: "Mes chapitres de vie", stamps: "Ma collection de timbres", collectibles: "Mes autres objets de collection" },
            lifeSegments: {
                postcardCount: "Contient {{count}} cartes", createdOn: "Créé le {{date}}", coverAlt: "Image de couverture de {{title}}",
                modalTitle: "Voir les cartes", modalTitleWithName: "Voir les cartes de {{title}}",
                instructions: "Touchez une carte pour l’agrandir ou la modifier. (Le chargement peut prendre un moment.)",
                coverMenu: "Changer la couverture du chapitre", sunriseWater: "Lever du soleil sur l’eau (par défaut)",
                sunriseMountains: "Lever du soleil sur les montagnes", sunsetCity: "Coucher du soleil sur la ville",
                cityDusk: "Ville au crépuscule", bridgeNight: "Pont de nuit", mountainRailway: "Chemin de fer de montagne", worldMap: "Carte du monde",
                deleteButton: "Supprimer le chapitre de vie", loading: "Chargement du chapitre de vie…",
                noneSelected: "Aucun chapitre de vie n’est sélectionné.", loginRequired: "Vous devez être connecté.",
                noUpdate: "Aucun chapitre de vie n’a été mis à jour. Vérifiez votre politique UPDATE.", coverUpdated: "Couverture mise à jour !",
                coverUpdateError: "Impossible de changer la couverture : {{message}}", deleteConfirmation: "Voulez-vous vraiment supprimer ce chapitre de vie ?",
                deleteError: "Erreur : impossible de supprimer le chapitre de vie ({{message}})", closeLabel: "Fermer le chapitre de vie"
            },
            postcards: {
                noCaption: "Sans légende", listeningTo: "♫ En cours d’écoute : ♫", opening: "Ouverture de la carte…",
                notFound: "Carte introuvable.", openError: "Impossible d’ouvrir la carte : {{message}}", saving: "Enregistrement de la carte…",
                noneSelected: "Aucune carte n’est sélectionnée.", deleteConfirmation: "Voulez-vous vraiment supprimer cette carte ?",
                deleting: "Suppression de la carte…", noneDeleted: "Aucune carte n’a été supprimée. Vérifiez votre politique DELETE.",
                deleteSuccess: "Carte supprimée avec succès.", deleteError: "Impossible de supprimer la carte : {{message}}",
                preparingDownload: "Préparation du téléchargement…", downloadError: "Impossible de télécharger la carte : {{message}}",
                preparingShare: "Préparation de la carte…", imageCreationError: "Impossible de créer l’image de la carte.",
                shareTitle: "Postcards Home", shareText: "Une carte pour vous !",
                shareUnsupported: "Le partage n’est pas pris en charge ; la carte a donc été téléchargée.", shareError: "Impossible de partager la carte : {{message}}"
            },
            stamps: { rarity: "Rareté : {{rarity}}" },
            rarities: { Common: "Commun", Uncommon: "Peu commun", Rare: "Rare", Epic: "Épique", Legendary: "Légendaire" },
            collectibleCategories: { postcardBackground: "Arrière-plan de carte", wallpaper: "Fond d’écran", exclusiveMusic: "Musique exclusive" },
            editor: {
                title: "Voir / modifier la carte", editCaption: "Modifier la légende", editLocation: "📍 Modifier le lieu",
                chooseMood: "Choisir une humeur…", happy: "😀 Heureux", excited: "😃 Enthousiaste !", romantic: "🥰 Romantique",
                reflective: "😇 Calme / Pensif", ambitious: "😈 Ambitieux", angry: "😡 En colère", inspired: "🤩 Inspiré",
                rerollMusicLabel: "Choisir un autre morceau au hasard", deletePostcard: "Supprimer la carte",
                downloadPostcard: "Télécharger la carte", sharePostcard: "Partager la carte", saveChanges: "Enregistrer les modifications",
                captionEditorTitle: "Modifier la légende", captionPlaceholder: "Écrivez votre légende…", applyCaption: "Appliquer la légende",
                discardConfirmation: "Voulez-vous vraiment abandonner vos modifications ?", closeLabel: "Fermer l’éditeur de carte",
                closeCaptionLabel: "Fermer l’éditeur de légende"
            },
            profile: {
                closeLabel: "Fermer les paramètres du profil", title: "Paramètres du profil", profileHeading: "Profil",
                fullName: "Nom complet", username: "Nom d’utilisateur", preferencesHeading: "Préférences",
                preferredLanguage: "Langue préférée", saveChanges: "Enregistrer les modifications", accountHeading: "Compte",
                accountDescription: "Supprimez définitivement votre compte, vos cartes, chapitres de vie, objets de collection et images téléversées.",
                loginRequired: "Vous devez être connecté.", logout: "Se déconnecter", deleteAccount: "Supprimer mon compte",
                loading: "Chargement des paramètres du profil…", loadError: "Impossible de charger le profil : {{message}}",
                fullNameRequired: "Le nom complet ne peut pas être vide.", usernameRequired: "Le nom d’utilisateur ne peut pas être vide.",
                saving: "Enregistrement des paramètres…", saved: "Paramètres du profil enregistrés !",
                saveError: "Impossible d’enregistrer le profil : {{message}}", usernameTaken: "Ce nom d’utilisateur est déjà utilisé.",
                logoutConfirmation: "Voulez-vous vraiment vous déconnecter ?", loggingOut: "Déconnexion…", logoutError: "Impossible de se déconnecter : {{message}}"
            },
            accountDeletion: {
                firstConfirmation: "Voulez-vous vraiment supprimer définitivement votre compte ?",
                firstPrompt: "Saisissez DELETE MY ACCOUNT PERMANENTLY pour confirmer.", firstPhrase: "DELETE MY ACCOUNT PERMANENTLY",
                secondPrompt: "La suppression de votre compte effacera définitivement TOUTES vos cartes et tous vos chapitres de vie. Cette action est irréversible. Certains objets d’inventaire et renseignements du compte peuvent subsister temporairement, sans garantie de récupération.\n\nSaisissez I CONFIRM I HAVE READ AND AGREE pour confirmer votre accord.",
                secondPhrase: "I CONFIRM I HAVE READ AND AGREE", cancelled: "Suppression du compte annulée.", deleting: "Suppression du compte…",
                scheduled: "La suppression de votre compte est programmée. Écrivez dès que possible à zixuan.yang2018@gmail.com si vous souhaitez tenter de récupérer votre compte et les éléments restants.",
                error: "Impossible de supprimer le compte : {{message}}"
            },
            loading: { inventory: "Chargement de l’inventaire…" }
        }
    }
};

if (typeof inventoryTranslations !== "undefined") {
    inventoryTranslations.fr = frenchInventoryTranslations;
}

const frenchCollectiblesTranslations = {
    translation: {
        collectibles: {
            postcardBackgrounds: {
                default: { name: "Arrière-plan par défaut", description: "La carte blanche classique." },
                fireworks: { name: "Feux d’artifice", description: "Ajoutez de magnifiques feux d’artifice à votre carte !" },
                sakura: { name: "Fleurs de cerisier", description: "Une douce soirée printanière sous les cerisiers en fleurs." },
                starry_night: { name: "Nuit étoilée", description: "Une nuit paisible sous les étoiles." },
                dawn: { name: "Aube", description: "La lumière calme et magnifique du matin." },
                sunsethills: { name: "Collines au coucher du soleil", description: "Détendez-vous devant un paisible coucher de soleil." },
                ocean: { name: "Océan", description: "La beauté calme et vaste de l’océan." }
            },
            wallpapers: {
                default: { name: "Fond d’écran par défaut", description: "L’arrière-plan beige classique." },
                sunsetwallpaper: { name: "Coucher de soleil", description: "Un coucher de soleil chaleureux pour votre écran." },
                bostonplaza: { name: "Boston Plaza", description: "Créez vos cartes avec un célèbre monument de Boston en arrière-plan." },
                starry_night_wallpaper: { name: "Nuit étoilée", description: "Un ciel nocturne rempli d’étoiles." },
                twilightwallpaper: { name: "Crépuscule", description: "Les couleurs paisibles du crépuscule." },
                winterwallpaper: { name: "Hiver", description: "De doux flocons de neige accompagnent la création de vos cartes." },
                dawnwallpaper: { name: "Aube", description: "Commencez la journée dans la douce lumière de l’aube." },
                oceanwallpaper: { name: "Océan", description: "Détendez-vous au rythme des vagues." },
                cloudcitywallpaper: { name: "Ville dans les nuages", description: "Une ville rêveuse flottant parmi les nuages." }
            },
            exclusiveMusic: {
                chopin_nocturne_op9no1: { name: "Chopin : Nocturne op. 9 no 1 en si bémol mineur" },
                chopin_nocturne_op9no2: { name: "Chopin : Nocturne op. 9 no 2 en mi bémol majeur" },
                chopin_nocturne_op9no3: { name: "Chopin : Nocturne op. 9 no 3 en si majeur" },
                chopin_nocturne_op15no1: { name: "Chopin : Nocturne op. 15 no 1 en fa majeur" },
                chopin_nocturne_op15no2: { name: "Chopin : Nocturne op. 15 no 2 en fa dièse majeur" },
                chopin_nocturne_op15no3: { name: "Chopin : Nocturne op. 15 no 3 en sol mineur" },
                chopin_nocturne_op27no1: { name: "Chopin : Nocturne op. 27 no 1 en do dièse mineur" },
                chopin_nocturne_op27no2: { name: "Chopin : Nocturne op. 27 no 2 en ré bémol majeur" },
                chopin_nocturne_op32no1: { name: "Chopin : Nocturne op. 32 no 1 en si majeur" },
                chopin_nocturne_op32no2: { name: "Chopin : Nocturne op. 32 no 2 en la bémol majeur" },
                chopin_nocturne_op37no1: { name: "Chopin : Nocturne op. 37 no 1 en sol mineur" },
                chopin_nocturne_op37no2: { name: "Chopin : Nocturne op. 37 no 2 en sol majeur" },
                chopin_nocturne_op48no1: { name: "Chopin : Nocturne op. 48 no 1 en do mineur" },
                chopin_nocturne_op48no2: { name: "Chopin : Nocturne op. 48 no 2 en fa dièse mineur" },
                chopin_nocturne_op55no1: { name: "Chopin : Nocturne op. 55 no 1 en fa mineur" },
                chopin_nocturne_op55no2: { name: "Chopin : Nocturne op. 55 no 2 en mi bémol majeur" },
                chopin_nocturne_op62no1: { name: "Chopin : Nocturne op. 62 no 1 en si majeur" },
                chopin_nocturne_op62no2: { name: "Chopin : Nocturne op. 62 no 2 en mi majeur" },
                chopin_nocturne_op72no1: { name: "Chopin : Nocturne op. 72 no 1 en mi mineur" },
                chopin_nocturne_posth_csharpminor: { name: "Chopin : Nocturne en do dièse mineur (posthume)" },
                chopin_nocturne_posth_cminor: { name: "Chopin : Nocturne en do mineur (posthume)" },
                bach_goldberg_aria: { name: "Bach : Variations Goldberg — Aria" },
                bach_goldberg_variation_1: { name: "Bach : Variations Goldberg — Variation 1" },
                bach_goldberg_variation_2: { name: "Bach : Variations Goldberg — Variation 2" },
                bach_goldberg_variation_3: { name: "Bach : Variations Goldberg — Variation 3" },
                bach_goldberg_variation_4: { name: "Bach : Variations Goldberg — Variation 4" },
                bach_goldberg_variation_5: { name: "Bach : Variations Goldberg — Variation 5" },
                bach_goldberg_variation_6: { name: "Bach : Variations Goldberg — Variation 6" },
                bach_goldberg_variation_7: { name: "Bach : Variations Goldberg — Variation 7" },
                bach_goldberg_variation_8: { name: "Bach : Variations Goldberg — Variation 8" },
                bach_goldberg_variation_9: { name: "Bach : Variations Goldberg — Variation 9" },
                bach_goldberg_variation_10: { name: "Bach : Variations Goldberg — Variation 10" },
                bach_goldberg_variation_11: { name: "Bach : Variations Goldberg — Variation 11" },
                bach_goldberg_variation_12: { name: "Bach : Variations Goldberg — Variation 12" },
                bach_goldberg_variation_13: { name: "Bach : Variations Goldberg — Variation 13" },
                bach_goldberg_variation_14: { name: "Bach : Variations Goldberg — Variation 14" },
                bach_goldberg_variation_15: { name: "Bach : Variations Goldberg — Variation 15" },
                bach_goldberg_variation_16: { name: "Bach : Variations Goldberg — Variation 16" },
                bach_goldberg_variation_17: { name: "Bach : Variations Goldberg — Variation 17" },
                bach_goldberg_variation_18: { name: "Bach : Variations Goldberg — Variation 18" },
                bach_goldberg_variation_19: { name: "Bach : Variations Goldberg — Variation 19" },
                bach_goldberg_variation_20: { name: "Bach : Variations Goldberg — Variation 20" },
                bach_goldberg_variation_21: { name: "Bach : Variations Goldberg — Variation 21" },
                bach_goldberg_variation_22: { name: "Bach : Variations Goldberg — Variation 22" },
                bach_goldberg_variation_23: { name: "Bach : Variations Goldberg — Variation 23" },
                bach_goldberg_variation_24: { name: "Bach : Variations Goldberg — Variation 24" },
                bach_goldberg_variation_25: { name: "Bach : Variations Goldberg — Variation 25" },
                bach_goldberg_variation_26: { name: "Bach : Variations Goldberg — Variation 26" },
                bach_goldberg_variation_27: { name: "Bach : Variations Goldberg — Variation 27" },
                bach_goldberg_variation_28: { name: "Bach : Variations Goldberg — Variation 28" },
                bach_goldberg_variation_29: { name: "Bach : Variations Goldberg — Variation 29" },
                bach_goldberg_variation_30: { name: "Bach : Variations Goldberg — Variation 30 (Quodlibet)" },
                bach_goldberg_aria_da_capo: { name: "Bach : Variations Goldberg — Aria da capo" },
                bach_goldberg_complete: { name: "Bach : Variations Goldberg — Intégrale" }
            }
        }
    }
};

if (typeof collectiblesTranslations !== "undefined") {
    collectiblesTranslations.fr = frenchCollectiblesTranslations;
}

const frenchExclusiveMusicDescriptions = {
    chopin_nocturne_op9no1: "Un nocturne sombre et expressif au lyrisme envoûtant.",
    chopin_nocturne_op9no2: "Sans doute le nocturne le plus aimé de Chopin.",
    chopin_nocturne_op9no3: "Rayonnant et orné avec une élégance gracieuse.",
    chopin_nocturne_op15no1: "Chaleureux et lyrique, avec une section centrale dramatique.",
    chopin_nocturne_op15no2: "Doux et lumineux du début à la fin.",
    chopin_nocturne_op15no3: "Une passion tumultueuse cède la place à une introspection paisible.",
    chopin_nocturne_op27no1: "L’un des nocturnes les plus dramatiques de Chopin.",
    chopin_nocturne_op27no2: "Une œuvre calme et introvertie.",
    chopin_nocturne_op32no1: "Une beauté sereine interrompue par une conclusion dramatique.",
    chopin_nocturne_op32no2: "Des mélodies élégantes pleines de chaleur et de charme.",
    chopin_nocturne_op37no1: "Une ouverture sombre suivie d’un choral paisible.",
    chopin_nocturne_op37no2: "Des mélodies fluides d’une grâce naturelle.",
    chopin_nocturne_op48no1: "Une œuvre monumentale, passionnée et grandiose.",
    chopin_nocturne_op48no2: "Un nocturne méditatif empreint d’une émotion contenue.",
    chopin_nocturne_op55no1: "Profondément expressif, aux riches couleurs harmoniques.",
    chopin_nocturne_op55no2: "Des mélodies gracieuses suspendues dans la tranquillité.",
    chopin_nocturne_op62no1: "L’un des nocturnes tardifs les plus raffinés de Chopin.",
    chopin_nocturne_op62no2: "Un adieu lumineux au genre du nocturne.",
    chopin_nocturne_op72no1: "Un nocturne de jeunesse empreint de mélancolie.",
    chopin_nocturne_posth_csharpminor: "L’une des œuvres posthumes les plus célèbres de Chopin.",
    chopin_nocturne_posth_cminor: "Un nocturne final puissant et dramatique.",
    bach_goldberg_aria: "L’aria sereine qui ouvre et encadre les Variations Goldberg.",
    bach_goldberg_variation_1: "Une première variation vive, pleine d’énergie et de mouvement.",
    bach_goldberg_variation_2: "Une variation contrapuntique fluide où les voix dialoguent avec grâce.",
    bach_goldberg_variation_3: "Le premier canon du cycle, élégant et soigneusement équilibré.",
    bach_goldberg_variation_4: "Une variation lumineuse au rythme plein d’élan.",
    bach_goldberg_variation_5: "Une variation brillante et rapide à l’écriture étincelante.",
    bach_goldberg_variation_6: "Un canon concis au contrepoint doux et dialogué.",
    bach_goldberg_variation_7: "Une variation gracieuse, dansante et élégante.",
    bach_goldberg_variation_8: "Une variation brillante faite d’échanges agiles au clavier.",
    bach_goldberg_variation_9: "Un canon posé au contrepoint clair et lyrique.",
    bach_goldberg_variation_10: "Une fughetta concise à l’écriture contrapuntique complexe.",
    bach_goldberg_variation_11: "Une variation rapide et délicate aux brillants croisements de mains.",
    bach_goldberg_variation_12: "Un canon ingénieux aux voix étroitement entrelacées.",
    bach_goldberg_variation_13: "Une variation lyrique, tendre et richement ornée.",
    bach_goldberg_variation_14: "Un éclat virtuose de mouvement rapide et de brillance pianistique.",
    bach_goldberg_variation_15: "Un canon sombre et introspectif qui clôt la première moitié.",
    bach_goldberg_variation_16: "Une grande ouverture à la française qui inaugure la seconde moitié du cycle.",
    bach_goldberg_variation_17: "Une variation rapide et brillante aux énergiques croisements de mains.",
    bach_goldberg_variation_18: "Un canon clair et élégant porté par un mouvement gracieux.",
    bach_goldberg_variation_19: "Une variation légère et intime au doux caractère dansant.",
    bach_goldberg_variation_20: "Une éblouissante variation virtuose au mouvement rapide.",
    bach_goldberg_variation_21: "Un canon profondément expressif au caractère plus sombre.",
    bach_goldberg_variation_22: "Une solide variation contrapuntique au caractère presque cérémoniel.",
    bach_goldberg_variation_23: "Une variation enjouée et brillante, pleine d’échanges rapides.",
    bach_goldberg_variation_24: "Un canon élégant au mouvement rythmique fluide.",
    bach_goldberg_variation_25: "Une variation en sol mineur profondément expressive et introspective.",
    bach_goldberg_variation_26: "Une variation brillante, animée d’un mouvement rapide et d’une grande vitalité rythmique.",
    bach_goldberg_variation_27: "Le dernier canon des Variations Goldberg, léger et finement entrelacé.",
    bach_goldberg_variation_28: "Une variation éblouissante, remplie de trilles rapides et d’une brillante écriture au clavier.",
    bach_goldberg_variation_29: "Une variation puissante et exubérante, faite d’accords et de traits virtuoses.",
    bach_goldberg_variation_30: "Le joyeux Quodlibet qui mène les trente variations à leur conclusion.",
    bach_goldberg_aria_da_capo: "L’Aria initiale revient à la fin des Variations Goldberg.",
    bach_goldberg_complete: "L’intégrale des Variations Goldberg, de l’Aria initiale jusqu’à la fin du cycle."
};

for (const collectibleKey in frenchExclusiveMusicDescriptions) {
    frenchCollectiblesTranslations.translation.collectibles.exclusiveMusic[collectibleKey].description =
        frenchExclusiveMusicDescriptions[collectibleKey];
}

const frenchLegalTranslations = {
    translation: {
        common: { language: "Langue :", languageLabel: "Choisir la langue" },
        privacy: {
            documentTitle: "Politique de confidentialité | Postcards Home", title: "Politique de confidentialité",
            lastUpdated: "Dernière mise à jour : 2 août 2026",
            introduction: { heading: "1. Introduction", body: "Bienvenue sur <b>Postcards Home</b>. Votre vie privée nous tient à cœur. Cette politique explique quels renseignements nous recueillons, pourquoi nous les recueillons et comment ils sont utilisés." },
            informationCollected: {
                heading: "2. Renseignements recueillis", intro: "Selon votre utilisation de l’application, nous pouvons recueillir :",
                email: "Adresse courriel", username: "Nom d’utilisateur", photographs: "Photographies téléversées", captions: "Légendes des cartes",
                lifeSegments: "Chapitres de vie", collectibles: "Objets de collection et progression de l’inventaire",
                preferences: "Fond d’écran et préférences de personnalisation", location: "Position (uniquement avec votre autorisation explicite)", dates: "Dates associées aux cartes"
            },
            informationUse: {
                heading: "3. Utilisation de vos renseignements", intro: "Vos renseignements servent uniquement au fonctionnement de l’application, notamment pour :",
                saving: "Enregistrer vos cartes.", syncing: "Synchroniser votre compte entre vos appareils.", inventory: "Afficher votre inventaire et vos objets de collection.",
                personalization: "Fournir des fonctions personnalisées.", improving: "Améliorer l’application."
            },
            location: { heading: "4. Données de localisation", body: "La localisation est facultative. Si vous l’autorisez, elle sert uniquement à afficher des lieux sur les cartes et à débloquer des objets liés à un lieu." },
            storage: { heading: "5. Stockage des données", body: "Les renseignements du compte et le contenu téléversé sont stockés de façon sécurisée grâce aux services infonuagiques de Supabase." },
            thirdParty: { heading: "6. Services tiers", intro: "Postcards Home utilise actuellement les services tiers suivants :", supabase: "Supabase (authentification et stockage infonuagique)", github: "GitHub Pages (hébergement du site)" },
            cookies: { heading: "7. Cookies et stockage local", body: "Postcards Home utilise le stockage essentiel du navigateur pour maintenir votre connexion et mémoriser les paramètres de l’application." },
            sharing: { heading: "8. Partage des données", body: "Nous ne vendons pas vos renseignements personnels. Ils ne sont transmis à des services tiers que lorsque cela est nécessaire au fonctionnement de l’application." },
            rights: { heading: "9. Vos droits", intro: "Vous pouvez :", update: "Modifier les renseignements de votre compte.", deleteAccount: "Supprimer votre compte.", deleteData: "Demander la suppression de vos données stockées." },
            changes: { heading: "10. Modifications de cette politique", body: "Cette politique peut être mise à jour occasionnellement. La version la plus récente sera toujours publiée sur cette page." },
            contact: { heading: "11. Nous joindre", intro: "Pour toute question concernant cette politique, communiquez avec :", emailLabel: "Courriel :" },
            back: "← Retour à Postcards Home"
        },
        terms: {
            documentTitle: "Conditions d’utilisation | Postcards Home", title: "Conditions d’utilisation", lastUpdated: "Dernière mise à jour : 2 août 2026",
            acceptance: { heading: "1. Acceptation des conditions", body: "En créant un compte ou en utilisant Postcards Home, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser l’application." },
            description: { heading: "2. Description du service", body1: "Postcards Home permet de créer et collectionner des cartes numériques avec des photos, légendes, lieux, musiques et options de personnalisation. Les cartes peuvent être classées dans des « chapitres de vie », des albums qui documentent différentes périodes de la vie.", body2: "Les fonctionnalités peuvent évoluer, être ajoutées ou retirées. Les politiques applicables seront alors mises à jour." },
            accounts: { heading: "3. Comptes d’utilisateur", body1: "Vous êtes responsable de la sécurité de votre compte et de toute activité qui s’y déroule, notamment de la confidentialité de votre mot de passe.", body2: "Vous acceptez de fournir des renseignements exacts." },
            content: { heading: "4. Contenu de l’utilisateur", body1: "Vous conservez la propriété des photos, légendes et autres contenus que vous téléversez.", body2: "En téléversant du contenu, vous autorisez Postcards Home à le stocker et à l’afficher uniquement afin d’exploiter le service." },
            acceptableUse: { heading: "5. Utilisation acceptable", intro: "Vous acceptez de ne pas :", illegal: "Téléverser du contenu illégal ou explicite.", copyright: "Téléverser du contenu qui enfreint les droits d’auteur d’autrui.", unauthorized: "Tenter d’accéder sans autorisation à l’application ou au compte d’un autre utilisateur.", disrupt: "Perturber le service.", malware: "Distribuer des logiciels malveillants.", discrimination: "Créer ou distribuer du contenu discriminatoire, illégal ou explicite." },
            collectibles: { heading: "6. Objets de collection", body1: "Les objets de collection et autres articles virtuels existent uniquement dans Postcards Home.", body2: "Ils n’ont aucune valeur monétaire, ne peuvent être échangés contre de l’argent et ne sont pas transférables sauf si cette fonction est officiellement ajoutée.", body3: "Tous les objets peuvent être débloqués par les mécanismes prévus de l’application." },
            intellectualProperty: { heading: "7. Propriété intellectuelle", body1: "L’application, son logiciel, son interface, ses illustrations et ses enregistrements originaux sont protégés par les lois sur la propriété intellectuelle.", body2: "Certaines musiques sont utilisées sous licence tierce. Les attributions figurent dans les pages de crédits et de mentions de tiers." },
            availability: { heading: "8. Disponibilité", body1: "Postcards Home est fourni « tel quel » et « selon disponibilité ».", body2: "Nous ne garantissons pas une disponibilité ininterrompue, un fonctionnement sans erreur ni le stockage permanent du contenu, mais nous ferons des efforts raisonnables pour maintenir un service fiable." },
            suspension: { heading: "9. Suspension du compte", body: "Nous pouvons suspendre ou fermer les comptes qui enfreignent ces conditions ou nuisent à l’application ou à ses utilisateurs." },
            liability: { heading: "10. Limitation de responsabilité", body: "Dans la mesure permise par la loi, Postcards Home et son développeur ne sont pas responsables des dommages indirects ou particuliers découlant de l’utilisation de l’application." },
            changes: { heading: "11. Modification des conditions", body: "Ces conditions peuvent être modifiées. Continuer à utiliser l’application après leur entrée en vigueur vaut acceptation des conditions révisées." },
            contact: { heading: "12. Nous joindre", intro: "Les questions concernant ces conditions peuvent être envoyées à :", emailLabel: "Courriel :" },
            back: "← Retour à Postcards Home"
        },
        cookies: {
            documentTitle: "Politique relative aux cookies | Postcards Home", title: "Politique relative aux cookies et au stockage du navigateur",
            lastUpdated: "Dernière mise à jour : 2 août 2026",
            introduction: { heading: "1. Introduction", body1: "Cette politique explique comment Postcards Home utilise les cookies et les technologies similaires de stockage du navigateur.", body2: "Ces technologies comprennent les cookies, le stockage local et d’autres méthodes qui conservent des renseignements entre les visites." },
            essentialStorage: { heading: "2. Stockage essentiel du navigateur", intro: "Postcards Home utilise le stockage essentiel pour fournir les fonctions demandées, notamment :", signedIn: "Maintenir la connexion au compte.", session: "Maintenir et renouveler une session authentifiée.", security: "Protéger l’accès au compte et la sécurité de l’application.", settings: "Mémoriser les paramètres nécessaires au fonctionnement.", body: "Ce stockage est nécessaire. Le désactiver ou l’effacer peut vous déconnecter ou empêcher certaines fonctions de fonctionner." },
            authentication: { heading: "3. Fournisseur d’authentification", body: "Postcards Home utilise Supabase pour l’authentification, la base de données et le stockage. Supabase peut conserver les renseignements de session dans le navigateur." },
            analytics: { heading: "4. Analyse et publicité", body1: "Postcards Home n’utilise actuellement pas le stockage du navigateur pour la publicité ciblée.", body2: "Postcards Home n’utilise actuellement aucun cookie d’analyse facultatif ni technologie de suivi similaire.", body3: "Si de telles technologies sont ajoutées, cette politique sera mise à jour et des contrôles de consentement seront fournis lorsque requis." },
            managingStorage: { heading: "5. Gestion du stockage", body1: "La plupart des navigateurs permettent d’inspecter, bloquer ou supprimer les cookies et données locales dans leurs paramètres.", body2: "La suppression des renseignements de session de Postcards Home peut vous déconnecter." },
            changes: { heading: "6. Modification de cette politique", body: "Cette politique peut être modifiée lorsque les technologies utilisées changent. La version la plus récente sera publiée ici avec une nouvelle date de mise à jour." },
            contact: { heading: "7. Nous joindre", intro: "Pour toute question concernant cette politique, communiquez avec :", emailLabel: "Courriel :" },
            back: "← Retour à Postcards Home"
        },
        thirdPartyNotices: {
            documentTitle: "Mentions de tiers | Postcards Home", title: "Mentions de tiers", lastUpdated: "Dernière mise à jour : 2 août 2026",
            introduction: { body: "Postcards Home utilise plusieurs bibliothèques libres et services tiers. Nous remercions les développeurs et contributeurs qui rendent ces projets possibles." },
            supabase: { heading: "Supabase", body: "Supabase est le service dorsal utilisé pour l’authentification, le stockage infonuagique et les paramètres des utilisateurs.", websiteLabel: "Site Web :" },
            html2canvas: { heading: "html2canvas", body: "La bibliothèque html2canvas sert à exporter les cartes sous forme d’images.", license: "Licence : licence MIT" },
            canvasConfetti: { heading: "canvas-confetti", body: "Cette bibliothèque produit les animations visuelles des célébrations.", license: "Licence : licence MIT" },
            music: { heading: "Musique", body1: "Certaines musiques sont distribuées sous licence Creative Commons ou une autre licence applicable. Les œuvres exclusives à Postcards Home ne peuvent pas être redistribuées commercialement.", body2: "Consultez la page des crédits musicaux pour les attributions complètes." },
            openSource: { heading: "Licences libres", body: "Des copies des licences applicables sont incluses au projet lorsque cela est requis." },
            back: "← Retour à Postcards Home"
        },
        about: {
            documentTitle: "À propos | Postcards Home", title: "À propos de Postcards Home", lastUpdated: "Version 1.0 (août 2026)",
            mission: { heading: "Notre mission", body1: "Les téléphones modernes contiennent des milliers de photos, mais beaucoup de souvenirs perdent peu à peu leur contexte.", body2: "Postcards Home encourage chacun à préserver les moments importants plutôt qu’à simplement accumuler des images." },
            senses: {
                heading: "Collectionner des souvenirs par plusieurs sens",
                body1: "Chaque carte réunit une photo, une légende, un lieu, de la musique et des touches personnelles pour créer un souvenir durable.",
                body2: "Comme musicien, je sais que la lecture seule ne suffit pas toujours à faire revivre un souvenir.<br><br>Et si une musique pouvait en évoquer l’émotion ?<br><br>Chaque sensation sollicitée par Postcards Home ravive une partie de votre passé. C’est ce qui rend votre histoire <strong>unique.</strong>",
                body3: "Le système d’objets de collection encourage l’exploration, la réflexion et la créativité.",
                body4: "Chaque objet de collection raconte une partie de votre histoire."
            },
            creator: { heading: "Créé par Alex Yang", body: "Merci d’essayer Postcards Home. J’espère que l’application vous aidera à préserver vos souvenirs." },
            back: "← Retour à Postcards Home"
        }
    }
};

if (typeof legalTranslations !== "undefined") {
    legalTranslations.fr = frenchLegalTranslations;
}
