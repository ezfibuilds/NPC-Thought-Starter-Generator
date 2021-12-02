const charclasses = [
    {
        "name":"artificer",
        "description":"",
        "variations":['Alchemist','Armorer','Artillerist','Battle Smith'],
        "weapons":['simple'],
        "weight": {
            "even":"10",
            "martial":"2",
            "arcane":"10",
            "divine":"5",
            "natural":"2",
            "caster":"5"
        }
    },
    {
        "name":"barbarian",
        "description":"",
        "variations":['Ancestral Guardian','Beast','Berserker','Storm Herald','Totem Warrior','Wild Magic','Zealot'],
        "weapons":['simple','martial'],
        "weight": {
            "even":"10",
            "martial":"10",
            "arcane":"2",
            "divine":"5",
            "natural":"10",
            "caster":"2"
        }
    },
    {
        "name":"bard",
        "description":"",
        "variations":['Creation','Eloquence','Glamour','Lore','Spirits','Swords','Valor','Whispers'],
        "weapons":['simple','Hand crossbow','Longsword','Rapier','Shortsword'],
        "weight": {
            "even":"10",
            "martial":"2",
            "arcane":"10",
            "divine":"2",
            "natural":"2",
            "caster":"10"
        }
    },
    {
        "name":"cleric",
        "description":"",
		"variations":['Arcana','Death','Forge','Grave','Knowledge','Life','Light','Nature','Order','Peace','Tempest','Trickery','Twilight','War'],
        "weapons":['simple'],
        "weight": {
            "even":"10",
            "martial":"2",
            "arcane":"2",
            "divine":"10",
            "natural":"5",
            "caster":"10"
        }
    },
    {
        "name":"druid",
        "description":"",
        "variations":['Dreams','Land','Moon','Shepherd','Spores','Stars','Wildfire'],
        "weapons":['Club','Dagger','Darts','Javelins','Mace','Quarterstaff','Scimitar','Sickle','Sling','Spear'],
        "weight": {
            "even":"10",
            "martial":"2",
            "arcane":"2",
            "divine":"5",
            "natural":"10",
            "caster":"10"
        }
    },
    {
        "name":"fighter",
        "description":"",
        "variations":['arcane archer','battle master','cavalier','champion','eldritch knight','psi warrior','rune knight','samurai'],
        "weapons":['simple','martial','Unarmed fighting'],
        "weight": {
            "even":"10",
            "martial":"10",
            "arcane":"5",
            "divine":"2",
            "natural":"2",
            "caster":"2"
        }
    },
    {
        "name":"monk",
        "description":"",
		"variations":['astral self','drunken master','four elements','kensei','mercy','open hand','shadow','sun soul'],
        "weapons":['simple','Shortsword','Unarmed fighting'],
        "weight": {
            "even":"10",
            "martial":"10",
            "arcane":"2",
            "divine":"5",
            "natural":"5",
            "caster":"2"
        }
    },
    {
        "name":"paladin",
        "description":"",
        "variations":['ancients','conquest','crown','devotion','glory','oathbreaker','redemption','vengeance','watchers'],
        "weapons":['simple','martial'],
        "weight": {
            "even":"10",
            "martial":"5",
            "arcane":"2",
            "divine":"10",
            "natural":"2",
            "caster":"5"
        }
    },
    {
        "name":"ranger",
        "description":"",
        "variations":['beast master','fey wanderer','gloom stalker','horizon walker','hunter','monster slayer','swarmkeeper','drakewarden'],
        "weapons":['simple','martial'],
        "weight": {
            "even":"10",
            "martial":"5",
            "arcane":"2",
            "divine":"2",
            "natural":"10",
            "caster":"5"
        }
    },
{
    "name":"rogue",
    "description":"",
    "variations":['arcane trickster','assassin','inquisitive','mastermind','phantom','scout','soulknife','swashbuckler','thief'],
    "weapons":['simple','Hand crossbow','Longsword','Rapier','Shortsword'],
    "weight": {
        "even":"10",
        "martial":"10",
        "arcane":"5",
        "divine":"2",
        "natural":"2",
        "caster":"2"
    }
},
{
    "name":"sorcerer",
    "description":"",
    "variations":['aberrant mind','clockwork soul','divine soul','draconic','shadow','storm','wild magic'],
    "weapons":['Darts','Dagger','Sling','Quarterstaff','Light crossbow'],
    "weight": {
        "even":"10",
        "martial":"2",
        "arcane":"10",
        "divine":"5",
        "natural":"2",
        "caster":"10"
    }
},
{
    "name":"warlock",
    "description":"",
    "variations":['archfey','celestial','fathomless','fiend','genie','great old one','hexblade','undead'],
    "weapons":['simple'],
    "weight": {
        "even":"10",
        "martial":"5",
        "arcane":"10",
        "divine":"5",
        "natural":"2",
        "caster":"10"
    }
},
    {
        "name":"wizard",
        "description":"",
        "variations":['abjuration','bladesinging','conjuration','divination','enchantment','evocation','illusion','necromancy','scribes','transmutation','war'],
        "weapons":['Darts','Dagger','Sling','Quarterstaff','Light crossbow'],
        "weight": {
			"even":"10",
			"martial":"2",
            "arcane":"10",
            "divine":"2",
            "natural":"2",
            "caster":"10"
		}
    }
]