const simpleBackgrounds = [
    'Acolyte','Anthropologist','Archeologist','Athlete','Charlatan','City Watch','Courtier','Criminal','Spy','Entertainer','Faction Agent','Far Traveler','Folk Hero','Gladiator','Haunted One','Hermit','Inheritor','Investigator','Knight','Noble','Outlander','Pirate','Sage','Sailor','Soldier','Urban Bounty Hunter','Urchin'
    ]


const backgrounds = [
    {
        "name":"Acolyte",
        "category":"phb"
    },
    {
        "name":"Anthropologist",
        "category":"expanded"
    },
    {
        "name":"Archeologist",
        "category":"expanded"
    },
    {
        "name":"Athlete",
        "category":"expanded",
        "variations":["","Marathon","Long-distance running","Wrestling","Boxing","Chariot or horse racing","Mixed unarmed combat","Hoplite race, running in full armor with a unit","Pentathalon"]
    },
    {
        "name":"Augen Trust",
        "category":"wildemount"
    },
    {
        "name":"Azorius Functionary",
        "category":"ravnica"
    },
    {
        "name":"Boros Legionnaire",
        "category":"ravnica"
    },
    {
        "name":"Charlatan",
        "category":"phb"
    },
    {
        "name":"City Watch",
        "category":"expanded"
    },
    {
        "name":"Investigator",
        "category":"expanded"
    },
    {
        "name":"Clan Crafter",
        "category":"expanded"
    },
    {
        "name":"Cloistered Scholar",
        "category":"expanded",
        "variations":["Alchemist","Astronomer","Discredited academic","Librarian","Professor","Researcher","Wizard's Apprentice","Scribe"]
    },
    {
        "name":"Cobalt Scholar",
        "category":"wildemount",
        "variations":["Alchemist","Astronomer","Discredited academic","Librarian","Professor","Researcher","Wizard's Apprentice","Scribe"]
    },
    {
        "name":"Courtier",
        "category":"expanded"
    },
    {
        "name":"Criminal",
        "category":"phb",
        "variations":["Blackmailer","Burglar","Enforcer","Fence","Highway robber","Hired killer","Pickpocket","Smuggler"]
    },
    {
        "name":"Spy",
        "category":"phb"
    },
    {
        "name":"Dimir Operative",
        "category":"ravnica"
    },
    {
        "name":"Entertainer",
        "category":"phb",
        "variations":["Actor","Dancer","Fire-eater","Jester","Juggler","Instrumentalist","Poet","Singer","Storyteller","Tumbler"]
    },
    {
        "name":"Gladiator",
        "category":"phb"
    },
    {
        "name":"Faceless",
        "category":"expanded"
    },
    {
        "name":"Faction Agent",
        "category":"expanded"
    },
    {
        "name":"Far Traveler",
        "category":"expanded"
    },
    {
        "name":"Feylost",
        "category":"expanded"
    },
    {
        "name":"Fisher",
        "category":"expanded"
    },
    {
        "name":"Folk Hero",
        "category":"phb"
    },
    {
        "name":"Golgari Agent",
        "category":"ravnica"
    },
    {
        "name":"Grinner",
        "category":"wildemount"
    },
    {
        "name":"Gruul Anarch",
        "category":"ravnica"
    },
    {
        "name":"Guild Artisan",
        "category":"phb",
        "variations":["Alchemist","Apothecary","Armorer","Locksmith","Finesmith","Brewer","Distiller","Vinter","Calligrapher","Scribe","Scrivener","Carpenter","Roofer","Plasterer","Cartographer","Surveyor","Chart-maker","Cobbler","Shoemaker","Cook","Baker","Glassblower","Glazier","Jeweler","Gemcutter","Leatherworker","Skinner","Tanner","Mason","Stonecutter","Painter","Limner","Sign-maker","Potter","Tile-maker","Shipwright","Sail-maker","Smith","Metal-Forger","Tinker","Pewterer","Caster","Wagon-maker","Wheelwright","Weaver","Dyer","Woodcarver","Cooper","Bowyer"]
    },
    {
        "name":"Guild Merchant",
        "category":"phb"
    },
    {
        "name":"Haunted One",
        "category":"expanded"
    },
    {
        "name":"Hermit",
        "category":"phb"
    },
    {
        "name":"House Agent",
        "category":"wildemount",
        "variations":[]
    },
    {
        "name":"Inheritor",
        "category":"expanded"
    },
    {
        "name":"Izzet Engineer",
        "category":"ravnica"
    },
    {
        "name":"Knight of the Order",
        "category":"expanded"
    },
    {
        "name":"Lorehold Student",
        "category":"strixhaven"
    },
    {
        "name":"Luxonborn",
        "category":"wildemount"
    },
    {
        "name":"Marine",
        "category":"expanded"
    },
    {
        "name":"Mercenary Veteran",
        "category":"expanded"
    },
    {
        "name":"Myriad Operative",
        "category":"wildemount",
        "variations":["Blackmailer","Burglar","Enforcer","Fence","Highway robber","Hired killer","Pickpocket","Smuggler"]
    },
    {
        "name":"Noble",
        "category":"phb"
    },
    {
        "name":"Knight",
        "category":"phb"
    },
    {
        "name":"Orzhov Representative",
        "category":"ravnica"
    },
    {
        "name":"Outlander",
        "category":"phb"
    },
    {
        "name":"Plaintiff",
        "category":"expanded"
    },
    {
        "name":"Prismari Student",
        "category":"strixhaven"
    },
    {
        "name":"Quandrix Student",
        "category":"strixhaven"
    },
    {
        "name":"Rakdos Cultist",
        "category":"ravnica"
    },
    {
        "name":"Revelry Pirate",
        "category":"wildemount"
    },
    {
        "name":"Sage",
        "category":"phb",
        "variations":["Alchemist","Astronomer","Discredited academic","Librarian","Professor","Researcher","Wizard's Apprentice","Scribe"]
    },
    {
        "name":"Sailor",
        "category":"phb"
    },
    {
        "name":"Pirate",
        "category":"phb"
    },
    {
        "name":"Selesnya Initiate",
        "category":"ravnica"
    },
    {
        "name":"Shipwright",
        "category":"expanded"
    },
    {
        "name":"Silverquill Student",
        "category":"strixhaven"
    },
    {
        "name":"Simic Scientist",
        "category":"ravnica"
    },
    {
        "name":"Smuggler",
        "category":"expanded"
    },
    {
        "name":"Soldier",
        "category":"phb",
        "variations":["Officer","Scout","Infantry","Cavalry","Healer","Quartermaster","Standard-bearer","Support staff"]
    },
    {
        "name":"Urban Bounty Hunter",
        "category":"expanded"
    },
    {
        "name":"Urchin",
        "category":"expanded"
    },
    {
        "name":"Volstrucker Agent",
        "category":"wildemount"
    },
    {
        "name":"Witherbloom Student",
        "category":"strixhaven"
    },

]


const simpleProfessions = [
    'Actor',
'Advocate (Lawyer)',
'Alchemist',
'Animal Handler',
'Apothecary',
'Architect',
'Archer',
'Archivist',
'Aristocrat',
'Armorer',
'Artist',
'Astrologer',
'Baker',
'Banker',
'Barber',
'Barkeep',
'Bartender',
'Beekeeper',
'Beer Seller',
'Beggar',
'Blacksmith',
'Boatman',
'Bookbinder',
'Bookseller',
'Brewer',
'Bricklayer',
'Brick Maker',
'Brigand',
'Buckle Maker',
'Builder',
'Butcher',
'Caravan Leader',
'Carpenter',
'Cartographer',
'Chandler',
'Charioteer',
'Chatelaine',
'Chef',
'Chirurgeon',
'Clergy',
'Clerk',
'Clock Maker',
'Clothworker',
'Cobbler',
'Commander',
'Cook',
'Cooper',
'Copyist',
'Costermonger',
'Counselor',
'Courtesan',
'Courtier',
'Cowherd',
'Crossbowman',
'Cutler',
'Dairy Farmer',
'Dancer',
'Diplomat',
'Distiller',
'Diver',
'Diviner',
'Doctor',
'Domestic Servant',
'Explorer',
'Farmer',
'Fisherman',
'Fishmonger',
'Footman',
'Furrier',
'Gardener',
'Gladiator',
'Glovemaker',
'Goldsmith',
'Grocer',
'Groom',
'Guardsman',
'Guildmaster',
'Harness maker',
'Hatmaker',
'Hay merchant',
'Healer',
'Herald',
'Herbalist',
'Herder',
'Hermit',
'Highwayman',
'Historian',
'Housemaid',
'Hunter',
'Illuminator',
'Infantry',
'Innkeeper',
'Interpreter',
'Inventor',
'Jailer',
'Jester',
'Jeweler',
'Judge',
'Knight',
'Laborer',
'Leatherworker',
'Librarian',
'Linguist',
'Locksmith',
'Longbowman',
'Longshoreman',
'Lord',
'Maidservant',
'Mason',
'Masseur',
'Mayor',
'Mercer',
'Merchant',
'Messenger',
'Midwife',
'Miller',
'Miner',
'Minister',
'Minstrel',
'Mortician',
'Musician',
'Noble',
'Monk/Nun',
'Nurse',
'Old-clothes seller',
'Page',
'Painter',
'Pariah',
'Pastry cook',
'Peasant',
'Perfumer',
'Philosopher',
'Physician',
'Pigkeeper',
'Pilgrim',
'Pirate',
'Plasterer',
'Potter',
'Priest/ess',
'Prince/ss',
'Privateer',
'Professor',
'Pursemaker',
'Ratcatcher',
'Reeve',
'Ronin',
'Roofer',
'Ropemaker',
'Royal Adviser',
'Rugmaker',
'Saddler',
'Sailor',
'Scabbard maker',
'Sculptor',
'Scavenger',
'Scholar',
'Scrivener',
'Servant',
'Shaman',
'Shepherd',
'Ship captain',
'Shoemaker',
'Silversmith',
'Smith',
'Soldier',
'Sorcerer/Sorceress',
'Spice Merchant',
'Squire',
'Stablehand',
'Stevedore',
'Stonemason',
'Storyteller',
'Steward',
'Street seller',
'Street sweeper',
'Student',
'Surgeon',
'Surveyor',
'Swordsman',
'Sycophant',
'Tailor',
'Tanner',
'Tavernkeeper',
'Tax collector',
'Teacher',
'Teamster',
'Thatcher',
'Thief',
'Tinker',
'Torturer',
'Town crier',
'Toymaker',
'Trapper',
'Vendor',
'Vermin catcher',
'Veterinarian',
'Village chief',
'Vintner',
'Warrior',
'Water carrier',
'Weaver',
'Wine seller',
'Woodcarver',
'Woodcutter',
'Wood seller',
'Wrestler',
'Writer'
]