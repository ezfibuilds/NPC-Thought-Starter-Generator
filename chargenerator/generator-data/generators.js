const generators = [
    {
        "name":"Animal",
        "prefix":"animal",
        "category":"inspiration",
        "explanation":"A random animal to inspire their personality, appearance, or symbolic role in the story.",
        "has-p":false,
        "has-div":true,
        "div-class":"animal-image",
        "extra-id":["div","animal-image"],
        "function":randomAnimal,
        "default":true,
        "includes-settings":false
    },{
        "name":"Element",
        "prefix":"element",
        "category":"inspiration",
        "explanation":"Gives an element or element-like concept, plus a related word, to associate with the character literally or figuratively.",
        "has-p":true,
        "has-div":false,
        "p-class":"element-description",
        "extra-id":["p","element-description"],
        "function":randomElement,
        "default":true,
        "includes-settings":false
    },
    {
        "name":"Color",
        "prefix":"color",
        "category":"inspiration",
        "explanation":"Gives a hex code and a color swatch. Could be taken literally as part of their color scheme, or could be metaphorical in their personality.",
        "has-p":false,
        "has-div":true,
        "div-class":"color-swatch",
        "extra-id":["div","color-swatch"],
        "function":randomColor,
        "includes-settings":false
    },
    {
        "name":"Tarot",
        "prefix":"tarot",
        "category":"inspiration",
        "explanation":"",
        "has-p":true,
        "has-div":true,
        "p-class":"tarot-description",
        "div-class":"tarot-image",
        "function":randomTarot,
        "includes-settings":false
    },
    {
        "name":"First Name",
        "prefix":"nameroot",
        "category":"names",
        "explanation":"Gives a first name, and a masculine and feminine version of that name. Names taken from the Story Games Name Project.",
        "function":randomName,
        "default":true,
        "includes-settings":false,
        "child-generators": [
            {
                "name":"Masculinized",
                "prefix":"mascname",
                "function":reMasc,
            },{
                "name":"Feminized",
                "prefix":"femname",
                "function":reFem,
            },
        ]
    },{
        "name":"Race",
        "prefix":"race",
        "category":"demographics",
        "explanation":"Gives a D&D race, such as human, elf, or dwarf, along with a subrace.",
        "function":randomRace,
        "default":true,
        "includes-settings":true,
        "settings-label":"Race",
        "settings-options": [
            {
                "name":"Favor Standard Races",
                "code":"phb",
                "description":"Mainly races from the player's handbook, like humans, elves, dwarves and halflings."
            },{
                "name":"Equal Chances",
                "code":"equal",
                "description":"Equal chance for all official races."
            },
            {
                "name":"Tervios",
                "code":"tervios",
                "description":"For @ezfii's homebrew campaign setting, Tervios."
            }
        ]
    },{
        "name":"Gender",
        "prefix":"gender",
        "category":"demographics",
        "explanation":"Gives a gender identity for the character.",
        "function":randomGender,
        "default":true,
        "includes-settings":true,
        "settings-label":"Gender",
        "settings-options": [
            {
                "name":"Statistical",
                "code":"stat",
                "description":"Based approximately on real-world statistics about the prevelance of gender identities."
            },{
                "name":"Statistics Plus",
                "code":"statplus",
                "description":"Like statistical, but with a minimum 5% chance for each identity to appear."
            },{
                "name":"Equal Chances",
                "code":"equal",
                "description":"Even chances for all identities."
            },{
                "name":"Max Representation",
                "code":"maxrep",
                "description":"Even chances for all identities, but cisgender is excluded."
            }
        ]
    },{
        "name":"Sexuality",
        "prefix":"orientation",
        "category":"demographics",
        "function":randomOrientation,
        "default":true,
        "includes-settings":true,
        "settings-label":"Sexuality",
        "settings-options": [
            {
                "name":"Statistical",
                "code":"stat",
                "description":"Based approximately on real-world statistics about the prevelance of sexual orientations."
            },{
                "name":"Statistics Plus",
                "code":"statplus",
                "description":"Like statistical, but with a minimum 5% chance for each identity to appear."
            },{
                "name":"Equal Chances",
                "code":"equal",
                "description":"Even chances for all identities."
            },{
                "name":"Max Representation",
                "code":"maxrep",
                "description":"Even chances for all identities, but heterosexual is excluded."
            },{
                "name":"Tervios",
                "code":"tervios",
                "description":"For @ezfii's homebrew campaign setting, Tervios. Bi/pan is the statistical majority."
            }
        ]
    },{
        "name":"Disability",
        "prefix":"disability",
        "category":"demographics",
        "function":randomDisability,
        "default":true,
        "includes-settings":false
    },{
        "name":"Culture",
        "prefix":"culture",
        "category":"demographics",
        "function":randomCulture,
        "default":false,
        "includes-settings":true,
        "settings-label":"Cultural Diversity",
        "settings-options": [
            {
                "name":"Isolated",
                "code":"isolated",
                "description":"For areas without much cultural diversity, like tiny villages"
            },{
                "name":"Average",
                "code":"average",
                "description":"For areas with an average amount of cultural diversity."
            },{
                "name":"Multicultural",
                "code":"multicultural",
                "description":"For areas with a lot of cultural diversity, like big cities and trade hubs."
            },{
                "name":"Colonized/Occupied",
                "code":"colonized",
                "description":"For areas that are being occupied by a culture from some other part of the world."
            }
        ]
    },{
        "name":"Religion",
        "prefix":"religion",
        "category":"demographics",
        "function":randomReligion,
        "default":false,
        "includes-settings":true,
        "settings-label":"Religion",
        "settings-options": [
            {
                "name":"Relative to Culture",
                "code":"culture",
                "description":"Describes religion in terms of what is popular in the culture they belong to."
            },{
                "name":"By Religion Type",
                "code":"structure",
                "description":"Monotheism, Polytheism, etc."
            },{
                "name":"By Divine Domain",
                "code":"domain",
                "description":"Gives them an unnamed god of a certain domain, like Light or Nature."
            },{
                "name":"Forgotten Realms",
                "code":"fr",
                "description":"Gods from the Forgotten Realms setting."
            },{
                "name":"Greyhawk",
                "code":"greyhawk",
                "description":"Gods from the Greyhawk setting."
            },{
                "name":"Dragonlance",
                "code":"dragonlance",
                "description":"Gods from the Dragonlance setting."
            },{
                "name":"Eberron",
                "code":"eberron",
                "description":"Gods from the Eberron setting."
            },{
                "name":"Exandria",
                "code":"exandria",
                "description":"Gods from the Exandria setting from Critical Role."
            },{
                "name":"Historical Gods",
                "code":"historical",
                "description":"Gods from the real-world Celtic, Egyptian, Greek, and Norse pantheons."
            }
        ]
    },{
        "name":"Wealth",
        "prefix":"wealth",
        "category":"demographics",
        "function":randomWealth,
        "default":false,
        "includes-settings":false
    },{
        "name":"Age",
        "prefix":"age",
        "category":"description",
        "function":randomAge,
        "default":true,
        "includes-settings":false
    },
    {
        "name":"Distinctive Feature",
        "prefix":"appearance",
        "category":"description",
        "function":randomAppearance,
        "default":true,
        "includes-settings":false
    },{
        "name":"Height",
        "prefix":"height",
        "category":"description",
        "function":randomHeight,
        "default":false,
        "includes-settings":false
    },{
        "name":"Build",
        "prefix":"build",
        "category":"description",
        "function":randomBuild,
        "includes-settings":true,
        "default":false,
        "settings-label":"Build",
        "settings-options": [
            {
                "name":"Even Distribution",
                "code":"average",
                "description":"Equal chances for thin, fat, and muscular builds."
            },{
                "name":"Food Scarcity",
                "code":"scarcity",
                "description":""
            },{
                "name":"Plentiful Food",
                "code":"plentiful",
                "description":""
            }
        ]
    },
    {
        "name":"Fashion Style",
        "prefix":"clothing",
        "category":"description",
        "function":randomClothing,
        "default":false,
        "includes-settings":false
    },{
        "name":"Voice",
        "prefix":"voice",
        "category":"description",
        "function":randomVoice,
        "default":false,
        "includes-settings":false
    },{
        "name":"Core Value",
        "prefix":"value",
        "category":"psychology",
        "function":randomValue,
        "default":true,
        "includes-settings":false
    },
    {
        "name":"Temptation",
        "prefix":"temptation",
        "category":"psychology",
        "function":randomTemptation,
        "default":true,
        "includes-settings":false
    },
    {
        "name":"Goals",
        "prefix":"goal",
        "category":"psychology",
        "function":randomGoal,
        "default":true,
        "includes-settings":false
    },{
        "name":"Secret",
        "prefix":"secret",
        "category":"psychology",
        "function":randomSecret,
        "default":true,
        "includes-settings":false
    },
    {
        "name":"Personality",
        "prefix":"personality",
        "category":"psychology",
        "function":randomPersonality,
        "default":false,
        "includes-settings":true,
        "settings-label":"Personality System",
        "settings-options": [
            {
                "name":"Traits, minimal",
                "code":"traitssimple",
                "description":"Gives two randomized personality traits."
            },
            {
                "name":"Traits, expanded",
                "code":"traitsexpanded",
                "description":"Gives five randomized personality traits."
            },
            {
                "name":"Big 5",
                "code":"big5",
                "description":"Based on the <a href='https://www.verywellmind.com/the-big-five-personality-dimensions-2795422' target='_blank'>big five personality dimensions</a>"
            },{
                "name":"MBTI",
                "code":"mbti",
                "description":"Gives a random <a href='https://www.16personalities.com/personality-types' target='_blank'>Myers Brigg's Personality Type</a>"
            },{
                "name":"Enneagram (Simple)",
                "code":"ennesimple",
                "description":"Gives a random <a href='https://www.enneagraminstitute.com/type-descriptions' target='_blank'>enneagram type</a>, with a wing."
            },{
                "name":"Enneagram (Tritype)",
                "code":"ennetritype",
                "description":"Gives their top three <a href='https://www.enneagraminstitute.com/type-descriptions' target='_blank'>enneagram types</a>."
            },{
                "name":"Astrology (Sun Sign)",
                "code":"astrologysimple",
                "description":"Gives their astrology Sun Sign."
            },{
                "name":"Astrology (Big 3)",
                "code":"astrologycomplex",
                "description":"Gives their astrology Sun, Moon, and Rising signs."
            }
        ]
    },{
        "name":"Mental Condition",
        "prefix":"mentalcondition",
        "category":"psychology",
        "function":randomMentalCondition,
        "default":false,
        "includes-settings":false
    },{
        "name":"Background",
        "prefix":"background",
        "category":"game-stats",
        "function":randomBackground,
        "default":false,
        "includes-settings":false
    },{
        "name":"Class",
        "prefix":"charclass",
        "category":"game-stats",
        "function":randomClass,
        "default":false,
        "includes-settings":true,
        "settings-label":"Class",
        "settings-options": [
            {
                "name":"Even Distribution",
                "code":"even",
                "description":"All classes are equally likely."
            },{
                "name":"Favor Martial",
                "code":"martial",
                "description":"Martial classes are likely, half-casters are somewhat likely, full casters are unlikely."
            },
            {
                "name":"Favor Casters",
                "code":"caster",
                "description":"Full casters are likely, half-casters are somewhat likely, martials are unlikely."
            },{
                "name":"Favor Arcane",
                "code":"arcane",
                "description":"Arcane casters like wizard, sorcerer, and bard are most likely."
            }
            ,{
                "name":"Favor Divine",
                "code":"divine",
                "description":"Divine classes like cleric and paladin are most likely."
            }
            ,{
                "name":"Favor Natural",
                "code":"natural",
                "description":"Nature-themed classes like druid, ranger, and barbarian are most likely."
            }
        ]
    },{
        "name":"Power Level",
        "prefix":"level",
        "category":"game-stats",
        "function":randomLevel,
        "default":false,
        "includes-settings":false
    },{
        "name":"Tool Proficiency",
        "prefix":"tool",
        "category":"game-stats",
        "function":randomTool,
        "default":false,
        "includes-settings":false
    },{
        "name":"Weapon",
        "prefix":"weapon",
        "category":"game-stats",
        "function":randomWeapon,
        "default":false,
        "includes-settings":false
    },{
        "name":"Ability Scores",
        "prefix":"ability",
        "category":"game-stats",
        "function":randomAbilityScores,
        "default":false,
        "includes-settings":true,
        "settings-label":"Ability Scores",
        "settings-options": [
            {
                "name":"Best to Worst Score",
                "code":"bestworst",
                "description":"Gives their highest and lowest ability score, without exact numbers"
            },{
                "name":"Hightest to Lowest",
                "code":"ordered",
                "description":"Orders all ability scores from highest to lowest, without exact numbers."
            },{
                "name":"Relative to Expected Stats",
                "code":"relative",
                "description":"Tells you if each stat is higher or lower than average for their class or monster stat block."
            },{
                "name":"10 +/- 1d4",
                "code":"commonerroll",
                "description":"Good for getting exact stats for commoners."
            },{
                "name":"Rolled, 3d6",
                "code":"3d6",
                "description":"Good for rolling adventurer characters, lower stats more likely"
            },{
                "name":"Rolled, 4d6 Drop Lowest",
                "code":"4d6",
                "description":"Good for rolling adventurer characters, lower stats less likely"
            }
        ]
    },{
        "name":"Current Mood",
        "prefix":"mood",
        "category":"when-you-meet-them",
        "function":randomMood,
        "default":false,
        "includes-settings":false
    },
    {
        "name":"Pocket Contents",
        "prefix":"pocket",
        "category":"when-you-meet-them",
        "function":randomPocket,
        "default":true,
        "includes-settings":true,
        "settings-label":"Pocket Contents",
        "settings-options": [
            {
                "name":"Random NPC",
                "code":"randomnpc",
                "description":"Pockets will only have random, plot-irrelevent items."
            },{
                "name":"Plot Important",
                "code":"plotrelevent",
                "description":"Pockets may include plot-important items."
            }
        ]
    }
];