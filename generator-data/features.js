/* A catch-all file of simple generator arrays. includes:

- Distinctive Feature
- Clothing
- Background
- Values
- Tempatations
- Height
- Age
- Wealth
- Power Level
- Ability Scores
- Moods
- Weapons
- Alignment

*/

const appearance = [
    'Hair color',
    'Hair style',
    'Facial hair',
    'Ears',
    'Eyes',
    'Eyebrows',
    'Nose',
    'Mouth, lips, or teeth',
    'Face shape (jaw, cheeks, forehead, etc.)',
    'Skin texture or wrinkles',
    'Skin marks, freckles, or blemishes',
    'Scar',
    'Tattoo',
    'Body proportions',
    'Hands',
    'Posture',
    'Gait',
    'Mannerisms or body language',
    'Smell',
    'Headwear',
    'Jewelry',
    'Outfit'
];



const clothing = [
    'Comfortable',
    'Cozy',
    'Polished',
    'Elegant',
    'Colorful',
    'Ostentateous',
    'Flashy',
    'Simple',
    'Expensive',
    'Dark',
    'Bright',
    'Modest',
    'Quirky',
    'Threadbare',
    'Handmade',
    'Rustic',
    'Practical',
    'Ecclectic',
    'Provocative',
    'Glamourous',
    'Edgy',
    'Mismatched',
    'Whismical',
    'Masculine',
    'Feminine',
    'Androgynous',
    'Casual',
    'Glitzy',
    'Trendy',
    'Minimalist',
    'Clean',
    'Messy',
    'Battle-ready'
]


const values = [
    'Money',
    'Tradition',
    'Family',
    'Friendship',
    'Loyalty',
    'Love',
    'Romance',
    'Excitement',
    'Hedonism',
    'Survival',
    'Security',
    'Honesty',
    'Morality',
    'Religion',
    'Spirituality',
    'Patriotism',
    'Community',
    'Discipline',
    'Achievement',
    'Reputation',
    'Honor',
    'Fairness',
    'Equality',
    'Belonging',
    'Authenticity',
    'Status',
    'Power',
    'Independence',
    'Control',
    'Fame',
    'Purity',
    'Chastity',
    'Self-Sacrifice',
    'Hard Work',
    'Expression'
]

const temptations = [
    "Money",
    "Beautiful people",
    "Relaxation",
    "Sweets",
    "Knowing people's secrets",
    "Gossip",
    "Food",
    "Alcohol",
    "Luxury",
    "Being pretentious",
    "Lust",
    "Novelty",
    "Giving into anger",
    "Talking about themselves",
    "Boasting",
    "Hiding from responsibilities",
    "Feeling superior",
    "Spending money",
    "Gambling",
    "Dares",
    "Curiosity",
    "Giving up",
    "Risktaking",
    "Danger",
    "Gaining social status",
    "Praise",
    "Fixating on hobbies",
    "Approval from others",
    "Conforming",
    "Physical comfort",
    "Romance",
    "Worrying",
    "Drama",
    "Brooding",
    "Feeling sorry for themselves",
    "Perfectionism",
    "Rulebreaking",
    "Bullying people",
    "Recreational drugs",
    "Cowardice",
    "Jealousy",
    "Vengeance",
    "Pettiness",
    "Gifts",
    "Partying",
    "Playing games",
    "Obsessing over their appearance",
    "Attention from others",
    "Lying",
    "A good joke",
    "A good story",
    "Cute animals",
    "Saying yes"
]

const age = [
    'A little older than expected',
    'Older than expected',
    'A lot older than expected',
    'A little younger than expected',
    'Younger than expected',
    'A lot younger than expected',
    'Too young to be in their position',
    'Too old to be in their position'
]

const wealth = [
    'A little poorer than expected',
    'Poorer than expected',
    'A lot poorer than expected',
    'A little richer than expected',
    'Richer than expected',
    'A lot richer than expected',
    'Too rich to be in their position',
    'Too poor to be in their position'
]

const level = [
    'A little more powerful than expected',
    'More powerful than expected',
    'A lot more powerful than expected',
    'A little weaker than expected',
    'Weaker than expected',
    'A lot weaker than expected',
    'Too weak to be in their position',
    'Too powerful to be in their position'
]

const height = [
    'A little taller than average',
    'Taller than average',
    'A lot taller than average',
    'A little shorter than average',
    'Shorter than average',
    'A lot shorter than average',
]

const abilityScoresRelative = [
    'A little higher than average',
    'A little higher than average',
    'A little higher than average',
    'Higher than average',
    'Higher than average',
    'A lot higher than average',
    'A little lower than average',
    'A little lower than average',
    'A little lower than average',
    'Lower than average',
    'Lower than average',
    'A lot lower than average',
]

const abilityScores = [
    'Strength',
    'Dexterity',
    'Constitution',
    'Intelligence',
    'Wisdom',
    'Charisma'
];


const mood = [
    'Happy',
    'Sad',
    'Angry',
    'Disgusted',
    'Afraid',
    'Surprised',
    'Peaceful',
    'Excited',
    'Thankful',
    'Overjoyed',
    'Friendly',
    'Amused',
    'Optimistic',
    'Content',
    'Generous',
    'Kind',
    'Trusting',
    'Grieving',
    'Disappointed',
    'Gloomy',
    'Depressed',
    'Pensive',
    'Remorseful',
    'Disapproving',
    'Judgmental',
    'Empressed',
    'Calm',
    'Distracted',
    'Apprehensive',
    'Anxious',
    'Confused',
    'Bored',
    'Embarrassed',
    'Ashamed',
    'Awkward',
    'Self-conscious',
    'Tired',
    'Exhausted',
    'Energetic',
    'Antsy',
    'Doubtful',
    'Hesitant',
    'Shy',
    'Pessimistic',
    'Upset',
    'Frustrated',
    'Outraged',
    'Seething',
    'Grumpy',
    'Argumentative',
    'Annoyed',
    'Resentful',
    'Bitter',
    'Desperate',
    'Crushed',
    'Lovestruck',
    'Loving',
    'Tense',
    'Focused',
    'Devious',
    'Cautious',
    'Lonely',
    'Apathetic',
    'Bothered',
    'Worried',
    'Carefree',
    'Preoccupied',
    'Stressed',
    'Affectionate',
    'Aggressive',
    'Curious',
    'Composed',
    'Discouraged',
    'Detached',
    'Envious',
    'Guilty',
    'Guarded',
    'Hopeless',
    'Interestedd',
    'Inspired',
    'Lazy',
    'Miserable',
    'Mischievous',
    'Moody',
    'Numb',
    'Overloaded',
    'Panicked',
    'Playful',
    'Proud',
    'Pressured',
    'Relaxed',
    'Resentful',
    'Reluctant',
    'Silly',
    'Serious',
    'Sensitive',
    'Safe',
    'Serene',
    'Threatened',
    'Uneasy',
    'Uncomfortable',
    'Violent',
    'Hostile',
    'Neutral',
    'Volatile',
    'Vulnerable',
    'Victimized',
    'Wary',
    'Weak',
    'Wistful',
    'Warm',
    'Yearning'
]

const allWeapons = [
    'Club','Dagger','Greatclub','Handaxe','Javelins','Light hammer','Mace','Quarterstaff','Sickle','Spear','Light crossbow','Darts','Shortbow','Sling',
    'Battleaxe','Flail','Glaive','Greataxe','Greatsword','Halberd','Lance','Longsword','Maul','Morningstar','Pike','Rapier','Scimitar','Shortsword','Trident','War pick','Warhammer','Whip','Blowgun','Hand crossbow','Heavy crossbow','Longbow','Net','Unarmed fighting','Improvised weapons'
];

const simpleWeapons = [
    'Club','Dagger','Greatclub','Handaxe','Javelins','Light hammer','Mace','Quarterstaff','Sickle','Spear','Light crossbow','Darts','Shortbow','Sling'
];

const martialWeapons = [
    'Battleaxe','Flail','Glaive','Greataxe','Greatsword','Halberd','Lance','Longsword','Maul','Morningstar','Pike','Rapier','Scimitar','Shortsword','Trident','War pick','Warhammer','Whip','Blowgun','Hand crossbow','Heavy crossbow','Longbow','Net','Improvised weapons'
];

const astrologySigns = [
    'Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'
]

const alignmentClassic = [
    'Lawful Good','Neutral Good','Chaotic Good','Lawful Neutral','True Neutral','Chaotic Neutral','Lawful Evil','Neutral Evil','Chaotic Evil'
]

const alignmentRelative = [
    "Very friendly towards the party",
    "Friendly towards the party",
    "Somewhat friendly towards the party",
    "Very hostile towards the party",
    "Hostile towards the party",
    "Somewhat hostile towards the party",
    "Indifferent towards the party",
    "Indifferent towards the party",
    "Indifferent towards the party"
];

const damage = [
    "Uninjured",
    "Barely injured",
    "Injured",
    "Badly injured",
    "Near death"
]