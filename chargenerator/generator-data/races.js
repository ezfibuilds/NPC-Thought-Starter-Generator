const races = [
    {
        "name":"dwarf",
        "description":"",
        "variations":['mountain','hill'],
        "weight": {
            "phb":"20",
            "equal":"1",
            "tervios":"400"
        }
    },
    {
        "name":"elf",
        "description":"",
        "variations":['high','wood','dark'],
        "weight": {
            "phb":"20",
            "equal":"1",
            "tervios":"240"
        }
    },
    {
        "name":"halfling",
        "description":"",
        "variations":['stout','lightfoot'],
        "weight": {
            "phb":"20",
            "equal":"1",
            "tervios":"240"
        }
    },
    {
        "name":"human",
        "description":"",
        "weight": {
            "phb":"30",
            "equal":"1",
            "tervios":"200"
        }
    },
    {
        "name":"dragonborn",
        "description":"",
        "variations":['black','blue','green','red','white'],
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"dragonborn",
        "description":"",
        "variations":['brass','bronze','copper','gold','silver'],
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"100"
        }
    },
    {
        "name":"dragonborn",
        "description":"",
        "variations":['amethyst','crystal','emerald','sapphire','topaz'],
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"half-elf",
        "description":"",
        "variations":['high','wood','dark'],
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"240"
        }
    },
    {
        "name":"half-orc",
        "description":"",
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"160"
        }
    },
    {
        "name":"gnome",
        "description":"",
        "variations":['forest','rock'],
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"200"
        }
    },
    {
        "name":"tiefling",
        "description":"",
        "variations":['','asmodeus','baalzebul','devil\'s tongue','dispater','fierna','glasya','levistus','mammon','mephistopheles','winged','zariel'],
        "weight": {
            "phb":"10",
            "equal":"1",
            "tervios":"200"
        }
    },
{
    "name":"dwarf",
    "description":"",
    "variations":['duergar'],
    "weight": {
        "phb":"1",
        "equal":"1",
        "tervios":"0"
    }
},
{
    "name":"elf",
    "description":"",
    "variations":['sea','shadar-kai','eladrin'],
    "weight": {
        "phb":"1",
        "equal":"1",
        "tervios":"1"
    }
},
{
    "name":"halfling",
    "description":"",
    "variations":['ghostwise'],
    "weight": {
        "phb":"1",
        "equal":"1",
        "tervios":"0"
    }
},
    {
        "name":"aasimar",
        "description":"",
        "variations":['protector','avenger','fallen'],
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"triton",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"firbolg",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"goliath",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"genasi",
        "description":"",
        "variations":['air','earth','fire','water'],
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"kenku",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"aarakocra",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"lizardfolk",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"tabaxi",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"orc",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"kobold",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"goblin",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"bugbear",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"hobgoblin",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"yuan-ti pureblood",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"1"
        }
    },
    {
        "name":"tortle",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"changeling",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"kalashtar",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"shifter",
        "description":"",
        "variations":['beasthide','longtooth','swiftstride','wildhunt'],
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"warforged",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"gith",
        "description":"",
        "variations":['githyanki','githzerai'],
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"reborn",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"dhampir",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"hexblood",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"centaur",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"changeling",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"fairy",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"harengon",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"leonin",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"loxodon",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"minotaur",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"owlin",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    },
    {
        "name":"satyr",
        "description":"",
        "weight": {
            "phb":"1",
            "equal":"1",
            "tervios":"0"
        }
    }
]