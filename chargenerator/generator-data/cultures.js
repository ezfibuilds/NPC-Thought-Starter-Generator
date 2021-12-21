const cultures = [
    {
        'name':'Majority local culture',
        'weight':{
            'isolated':90,
            'average':75,
            'multicultural':50,
            'colonized':40
        }
    },
    {
        'name':'Minority local culture',
        'weight':{
            'isolated':10,
            'average':20,
            'multicultural':30,
            'colonized':10
        }
    },
    {
        'name':'Foreign culture from a nearby land',
        'variations':['north','northeast','east','southeast','south','southwest','west','northwest'],
        'weight':{
            'isolated':2,
            'average':10,
            'multicultural':30,
            'colonized':10
        }
    },
    {
        'name':'Foreign culture from a faraway land',
        'variations':['north','northeast','east','southeast','south','southwest','west','northwest'],
        'weight':{
            'isolated':1,
            'average':5,
            'multicultural':15,
            'colonized':5
        }
    },
    {
        'name':'Colonizing culture',
        'weight':{
            'isolated':0,
            'average':0,
            'trade port':0,
            'colonized':50
        }
    },
    {
        'name':'Mixed culture (majority local + minority local)',
        'weight':{
            'isolated':2,
            'average':5,
            'trade port':10,
            'colonized':5
        }
    },
    {
        'name':'Mixed culture (majority local + nearby foreign)',
        'weight':{
            'isolated':1,
            'average':1,
            'trade port':4,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (majority local + faraway foreign)',
        'weight':{
            'isolated':0,
            'average':1,
            'trade port':2,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (majority local + colonizer)',
        'weight':{
            'isolated':0,
            'average':0,
            'trade port':0,
            'colonized':5
        }
    },
    {
        'name':'Mixed culture (minority local + nearby foreign)',
        'weight':{
            'isolated':0,
            'average':1,
            'trade port':1,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (minority local + faraway foreign)',
        'weight':{
            'isolated':0,
            'average':1,
            'trade port':1,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (minority local + colonizer)',
        'weight':{
            'isolated':0,
            'average':0,
            'trade port':0,
            'colonized':2
        }
    },
    {
        'name':'Mixed culture (nearby foreign + nearby foreign)',
        'weight':{
            'isolated':1,
            'average':1,
            'trade port':1,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (nearby foreign + faraway foreign)',
        'weight':{
            'isolated':0,
            'average':1,
            'trade port':1,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (nearby foreign + colonizer)',
        'weight':{
            'isolated':0,
            'average':0,
            'trade port':0,
            'colonized':2
        }
    },
    {
        'name':'Mixed culture (faraway foreign + faraway foreign)',
        'weight':{
            'isolated':0,
            'average':1,
            'trade port':1,
            'colonized':1
        }
    },
    {
        'name':'Mixed culture (faraway foreign + colonizer)',
        'weight':{
            'isolated':0,
            'average':0,
            'trade port':0,
            'colonized':2
        }
    },
]