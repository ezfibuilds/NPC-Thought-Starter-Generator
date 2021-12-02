const tarotCards = [
    {
        "name":"The Fool",
        "img":"fool.webp",
        "meaning":"Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment",
        "meaning-inverted":"Negligence, absence, distribution, carelessness, apathy, nullity, vanity"
    },
    {
        "name":"The Magician",
        "img":"magician.webp",
        "meaning":"Determined, Dexterity, Resourceful, Skilled, Strong powerful man",
        "meaning-inverted":"Communication blocks, Confusion, Deceit, Ill intentions, Lack of energy"
    },
    {
        "name":"The High Priestess",
        "img":"highpriestess.webp",
        "meaning":"Hidden talents, Intuition, Mystery, Spiritual insight, Things yet to be revealed",
        "meaning-inverted":"Information withheld, Lack of personal harmony, Secrets"
    },
    {
        "name":"The Empress",
        "img":"empress.webp",
        "meaning":"A new opportunity, Abundance, Maternal care, Nuturing, Pregnancy, Stability",
        "meaning-inverted":"Domestic problems, Financial issues, Stagnation, Unwanted pregnancy"
    },
    {
        "name":"The Emperor",
        "img":"emperor.webp",
        "meaning":"Authority, Father figure, Law and order, Leadership, Power, Promotion",
        "meaning-inverted":"Control freak, Immaturity, Lack of discipline, Loss of authority, Manipulative"
    },
    {
        "name":"The Hierophant",
        "img":"hierophant.webp",
        "meaning":"Education, Learning, Marriage, Religion, Seeking counsel or advice, Spiritual guidance, Tradition",
        "meaning-inverted":"Abuse of position, Breakdown, Poor counsel, Rejection of family values"
    },
    {
        "name":"The Lovers",
        "img":"lovers.webp",
        "meaning":"Being at a crossroads, Choices, Commitment, Falling in love, Partnerships",
        "meaning-inverted":"Broken relationship, Infidelity, Relationship issues, Separation"
    },
    {
        "name":"The Chariot",
        "img":"chariot.webp",
        "meaning":"A journey, Ambition, Confidence, Drive, Overcoming obstacles, Will power",
        "meaning-inverted":"Lack of direction, Scattered energy, Self doubt"
    },
    {
        "name":"Strength",
        "img":"strength.webp",
        "meaning":"Confidence, Enjoying power, Inner strength, Potency, Self-belief, Virility, Vitality",
        "meaning-inverted":"Hedonism, Lack of self-control, Lacking courage, Self-doubt, Vanity"
    },
    {
        "name":"The Hermit",
        "img":"hermit.webp",
        "meaning":"Introspection, Meditation, Self-reflection, Solitude, Soul-searching, Withdrawn from society",
        "meaning-inverted":"Exile, Loneliness, Misfit, Sadness, Withdrawing from loved ones"
    },
    {
        "name":"The Wheel of Fortune",
        "img":"wheeloffortune.webp",
        "meaning":"Chance, Changes, Destiny, Luck, Opportunity, Winning",
        "meaning-inverted":"Bad luck, Disappointment, Misfortune, Mishap, Unforeseen setback"
    },
    {
        "name":"Justice",
        "img":"justice.webp",
        "meaning":"Balance and equilibrium, Cause and effect, Fairness, Justice, Responsibilty",
        "meaning-inverted":"Dishonesty, Imbalance, Lack of accountability, Legal flaws, Unfair treatment"
    },
    {
        "name":"The Hanged Man",
        "img":"hangedman.webp",
        "meaning":"Breaking old patterns, Circumspection, Letting go, Metamorphosis, Suspension",
        "meaning-inverted":"Egotism, Inability to change, Missing an opportunity"
    },
    {
        "name":"Death",
        "img":"death.webp",
        "meaning":"Endings, Failure, Letting go of attachments, Mortality, Profound change, Severe illness",
        "meaning-inverted":"Delayed endings, Depression, Living unaware, Long terminal illness, Resistance to change"
    },
    {
        "name":"Temperance",
        "img":"temperance.webp",
        "meaning":"Alchemy, Balance, Connecting with your guides, Harmony, Looking for divine intervention, Moderation",
        "meaning-inverted":"Disharmony, Imbalance, Lack of patience, Onset of illness"
    },
    {
        "name":"The Devil",
        "img":"devil.webp",
        "meaning":"Bondage, Enslavement, Fear, Feeling trapped, Materialism, Temptation, Unhealthy relationships",
        "meaning-inverted":"Breaking from addictions, Divorce, Freedom from restraints"
    },
    {
        "name":"The Tower",
        "img":"tower.webp",
        "meaning":"Accident or damage, Catastrophe, Destruction, Renovation, Unexpected change",
        "meaning-inverted":"Illness, Losses, Obstacles, Volatile situation"
    },
    {
        "name":"The Star",
        "img":"star.webp",
        "meaning":"Astronomy, Good health, Hope, Inspiration, Opportunities, Spirituality",
        "meaning-inverted":"Despair, Disappointments, Illness, Missed opportunities"
    },
    {
        "name":"The Moon",
        "img":"moon.webp",
        "meaning":"Deception, Difficult period, Fear, Hidden things, Insecurity, Mental confusion",
        "meaning-inverted":"Insomnia, Mysteries unveiled, Release of fear, Unhappiness, Unusual"
    },
    {
        "name":"The Sun",
        "img":"sun.webp",
        "meaning":"Enlightment, Joy, Marriage, Material happiness, Success, Vitality",
        "meaning-inverted":"False impressions, Lack of clarity, Low Vitality, Sadness"
    },
    {
        "name":"Judgement",
        "img":"judgement.webp",
        "meaning":"Awakening, Decision making, Redemption, Reincarnation, Renewal, Transition",
        "meaning-inverted":"Poor logic, Poor or hasty judgement, Self-doubt, Stagnation"
    },
    {
        "name":"The World",
        "img":"world.webp",
        "meaning":"Achievement, Fulfillment, Possibilities, Successful conclusions",
        "meaning-inverted":"Delayed success, Failed plans, Lack of completion, Stagnation"
    },
    {
        "name":"The Ace of Pentacles",
        "img":"1pentacles.webp",
        "meaning":"A new financial or career opportunity, manifestation, abundance",
        "meaning-inverted":"Lost opportunity, lack of planning and foresight"
    },
    {
        "name":"The Two of Pentacles",
        "img":"2pentacles.webp",
        "meaning":"Multiple priorities, time management, prioritisation, adaptability",
        "meaning-inverted":"Over-committed, disorganisation, reprioritisation"
    },
    {
        "name":"The Three of Pentacles",
        "img":"3pentacles.webp",
        "meaning":"Teamwork, collaboration, learning, implementation",
        "meaning-inverted":"Disharmony, misalignment, working alone"
    },
    {
        "name":"The Four of Pentacles",
        "img":"4pentacles.webp",
        "meaning":"Saving money, security, conservatism, scarcity, control",
        "meaning-inverted":"Over-spending, greed, self-protection"
    },
    {
        "name":"The Five of Pentacles",
        "img":"4pentacles.webp",
        "meaning":"Financial loss, poverty, lack mindset, isolation, worry",
        "meaning-inverted":"Recovery from financial loss, spiritual poverty"
    },
    {
        "name":"The Six of Pentacles",
        "img":"6pentacles.webp",
        "meaning":"Giving, receiving, sharing wealth, generosity, charity",
        "meaning-inverted":"Self-care, unpaid debts, one-sided charity"
    },
    {
        "name":"The Seven of Pentacles",
        "img":"7pentacles.webp",
        "meaning":"Long-term view, sustainable results, perseverance, investment",
        "meaning-inverted":"Lack of long-term vision, limited success or reward"
    },
    {
        "name":"The Eight of Pentacles",
        "img":"8pentacles.webp",
        "meaning":"Apprenticeship, repetitive tasks, mastery, skill development",
        "meaning-inverted":"Self-development, perfectionism, misdirected activity"
    },
    {
        "name":"The Nine of Pentacles",
        "img":"9pentacles.webp",
        "meaning":"Abundance, luxury, self-sufficiency, financial independence",
        "meaning-inverted":"Self-worth, over-investment in work, hustling"
    },
    {
        "name":"The Ten of Pentacles",
        "img":"10pentacles.webp",
        "meaning":"Wealth, financial security, family, long-term success, contribution",
        "meaning-inverted":"The dark side of wealth, financial failure or loss"
    },
    {
        "name":"The Page of Pentacles",
        "img":"pagepentacles.webp",
        "meaning":"Manifestation, financial opportunity, skill development",
        "meaning-inverted":"Lack of progress, procrastination, learn from failure"
    },
    {
        "name":"The Knight of Pentacles",
        "img":"knightpentacles.webp",
        "meaning":"Hard work, productivity, routine, conservatism",
        "meaning-inverted":"Self-discipline, boredom, feeling ‘stuck’, perfectionism"
    },
    {
        "name":"The Queen of Pentacles",
        "img":"queenpentacles.webp",
        "meaning":"Nurturing, practical, providing financially, a working parent",
        "meaning-inverted":"Financial independence, self-care, work-home conflict."
    },
    {
        "name":"The King of Pentacles",
        "img":"kingpentacles.webp",
        "meaning":"Wealth, business, leadership, security, discipline, abundance",
        "meaning-inverted":"Financially inept, obsessed with wealth and status, stubborn"
    },
    {
        "name":"The Ace of Swords",
        "img":"1swords.webp",
        "meaning":"Breakthroughs, new ideas, mental clarity, success",
        "meaning-inverted":"Inner clarity, re-thinking an idea, clouded judgement"
    },
    {
        "name":"The Two of Swords",
        "img":"2swords.webp",
        "meaning":"Difficult decisions, weighing up options, an impasse, avoidance",
        "meaning-inverted":"Indecision, confusion, information overload, stalemate"
    },
    {
        "name":"The Three of Swords",
        "img":"3swords.webp",
        "meaning":"Heartbreak, emotional pain, sorrow, grief, hurt",
        "meaning-inverted":"Negative self-talk, releasing pain, optimism, forgiveness"
    },
    {
        "name":"The Four of Swords",
        "img":"4swords.webp",
        "meaning":"Rest, relaxation, meditation, contemplation, recuperation",
        "meaning-inverted":"Exhaustion, burn-out, deep contemplation, stagnation"
    },
    {
        "name":"The Five of Swords",
        "img":"5swords.webp",
        "meaning":"Conflict, disagreements, competition, defeat, winning at all costs",
        "meaning-inverted":"Reconciliation, making amends, past resentment"
    },
    {
        "name":"The Six of Swords",
        "img":"6swords.webp",
        "meaning":"Transition, change, rite of passage, releasing baggage",
        "meaning-inverted":"Personal transition, resistance to change, unfinished business"
    },
    {
        "name":"The Seven of Swords",
        "img":"7swords.webp",
        "meaning":"Betrayal, deception, getting away with something, acting strategically",
        "meaning-inverted":"Imposter syndrome, self-deceit, keeping secrets"
    },
    {
        "name":"The Eight of Swords",
        "img":"8swords.webp",
        "meaning":"Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
        "meaning-inverted":"Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives"
    },
    {
        "name":"The Nine of Swords",
        "img":"9swords.webp",
        "meaning":"Anxiety, worry, fear, depression, nightmares",
        "meaning-inverted":"Inner turmoil, deep-seated fears, secrets, releasing worry"
    },
    {
        "name":"The Ten of Swords",
        "img":"10swords.webp",
        "meaning":"Painful endings, deep wounds, betrayal, loss, crisis",
        "meaning-inverted":"Recovery, regeneration, resisting an inevitable end"
    },
    {
        "name":"The Page of Swords",
        "img":"pageswords.webp",
        "meaning":"New ideas, curiosity, thirst for knowledge, new ways of communicating",
        "meaning-inverted":"Self-expression, all talk and no action, haphazard action, haste"
    },
    {
        "name":"The Knight of Swords",
        "img":"knightswords.webp",
        "meaning":"Ambitious, action-oriented, driven to succeed, fast-thinking",
        "meaning-inverted":"Restless, unfocused, impulsive, burn-out"
    },
    {
        "name":"The Queen of Swords",
        "img":"queenswords.webp",
        "meaning":"Independent, unbiased judgement, clear boundaries, direct communication",
        "meaning-inverted":"Overly-emotional, easily influenced, bitchy, cold-hearted"
    },
    {
        "name":"The King of Swords",
        "img":"kingswords.webp",
        "meaning":"Mental clarity, intellectual power, authority, truth",
        "meaning-inverted":"Quiet power, inner truth, misuse of power, manipulation"
    },
    {
        "name":"The Ace of Wands",
        "img":"1wands.webp",
        "meaning":"Inspiration, new opportunities, growth, potential",
        "meaning-inverted":"An emerging idea, lack of direction, distractions, delays"
    },
    {
        "name":"The Two of Wands",
        "img":"2wands.webp",
        "meaning":"Future planning, progress, decisions, discovery",
        "meaning-inverted":"Personal goals, inner alignment, fear of unknown, lack of planning"
    },
    {
        "name":"The Three of Wands",
        "img":"3wands.webp",
        "meaning":"Progress, expansion, foresight, overseas opportunities",
        "meaning-inverted":"Playing small, lack of foresight, unexpected delays"
    },
    {
        "name":"The Four of Wands",
        "img":"4wands.webp",
        "meaning":"Celebration, joy, harmony, relaxation, homecoming",
        "meaning-inverted":"Personal celebration, inner harmony, conflict with others, transition"
    },
    {
        "name":"The Five of Wands",
        "img":"5wands.webp",
        "meaning":"Conflict, disagreements, competition, tension, diversity",
        "meaning-inverted":"Inner conflict, conflict avoidance, tension release"
    },
    {
        "name":"The Six of Wands",
        "img":"6wands.webp",
        "meaning":"Success, public recognition, progress, self-confidence",
        "meaning-inverted":"Private achievement, personal definition of success, fall from grace, egotism"
    },
    {
        "name":"The Seven of Wands",
        "img":"7wands.webp",
        "meaning":"Challenge, competition, protection, perseverance",
        "meaning-inverted":"Exhaustion, giving up, overwhelmed"
    },
    {
        "name":"The Eight of Wands",
        "img":"8wands.webp",
        "meaning":"Movement, fast paced change, action, alignment, air travel",
        "meaning-inverted":"Delays, frustration, resisting change, internal alignment"
    },
    {
        "name":"The Nine of Wands",
        "img":"9wands.webp",
        "meaning":"Resilience, courage, persistence, test of faith, boundaries",
        "meaning-inverted":"Inner resources, struggle, overwhelm, defensive, paranoia"
    },
    {
        "name":"The Ten of Wands",
        "img":"10wands.webp",
        "meaning":"Burden, extra responsibility, hard work, completion",
        "meaning-inverted":"Doing it all, carrying the burden, delegation, release"
    },
    {
        "name":"The Page of Wands",
        "img":"pagewands.webp",
        "meaning":"Inspiration, ideas, discovery, limitless potential, free spirit",
        "meaning-inverted":"Newly-formed ideas, redirecting energy, self-limiting beliefs, a spiritual path"
    },
    {
        "name":"The Knight of Wands",
        "img":"knightwands.webp",
        "meaning":"Energy, passion, inspired action, adventure, impulsiveness",
        "meaning-inverted":"Passion project, haste, scattered energy, delays, frustration"
    },
    {
        "name":"The Queen of Wands",
        "img":"queenwands.webp",
        "meaning":"Courage, confidence, independence, social butterfly, determination",
        "meaning-inverted":"Self-respect, self-confidence, introverted, re-establish sense of self"
    },
    {
        "name":"The King of Wands",
        "img":"kingwands.webp",
        "meaning":"Natural-born leader, vision, entrepreneur, honour",
        "meaning-inverted":"Impulsiveness, haste, ruthless, high expectations"
    },
    {
        "name":"The Ace of Cups",
        "img":"1cups.webp",
        "meaning":"Love, new relationships, compassion, creativity",
        "meaning-inverted":"Self-love, intuition, repressed emotions"
    },
    {
        "name":"The Two of Cups",
        "img":"2cups.webp",
        "meaning":"Unified love, partnership, mutual attraction",
        "meaning-inverted":"Self-love, break-ups, disharmony, distrust"
    },
    {
        "name":"The Three of Cups",
        "img":"3cups.webp",
        "meaning":"Celebration, friendship, creativity, collaborations",
        "meaning-inverted":"Independence, alone time, hardcore partying, ‘three’s a crowd"
    },
    {
        "name":"The Four of Cups",
        "img":"4cups.webp",
        "meaning":"Meditation, contemplation, apathy, reevaluation",
        "meaning-inverted":"Retreat, withdrawal, checking in for alignment"
    },
    {
        "name":"The Five of Cups",
        "img":"5cups.webp",
        "meaning":"Regret, failure, disappointment, pessimism",
        "meaning-inverted":"Personal setbacks, self-forgiveness, moving on"
    },
    {
        "name":"The Six of Cups",
        "img":"6cups.webp",
        "meaning":"Revisiting the past, childhood memories, innocence, joy",
        "meaning-inverted":"Living in the past, forgiveness, lacking playfulness"
    },
    {
        "name":"The Seven of Cups",
        "img":"7cups.webp",
        "meaning":"Opportunities, choices, wishful thinking, illusion",
        "meaning-inverted":"Alignment, personal values, overwhelmed by choices"
    },
    {
        "name":"The Eight of Cups",
        "img":"8cups.webp",
        "meaning":"Disappointment, abandonment, withdrawal, escapism",
        "meaning-inverted":"Trying one more time, indecision, aimless drifting, walking away"
    },
    {
        "name":"The Nine of Cups",
        "img":"9cups.webp",
        "meaning":"Contentment, satisfaction, gratitude, wish come true",
        "meaning-inverted":"Inner happiness, materialism, dissatisfaction, indulgence"
    },
    {
        "name":"The Ten of Cups",
        "img":"10cups.webp",
        "meaning":"Divine love, blissful relationships, harmony, alignment",
        "meaning-inverted":"Disconnection, misaligned values, struggling relationships"
    },
    {
        "name":"The Page of Cups",
        "img":"pagecups.webp",
        "meaning":"Creative opportunities, intuitive messages, curiosity, possibility",
        "meaning-inverted":"New ideas, doubting intuition, creative blocks, emotional immaturity"
    },
    {
        "name":"The Knight of Cups",
        "img":"knightcups.webp",
        "meaning":"Creativity, romance, charm, imagination, beauty",
        "meaning-inverted":"Overactive imagination, unrealistic, jealous, moody"
    },
    {
        "name":"The Queen of Cups",
        "img":"queencups.webp",
        "meaning":"Compassionate, caring, emotionally stable, intuitive, in flow",
        "meaning-inverted":"Inner feelings, self-care, self-love, co-dependency"
    },
    {
        "name":"The King of Cups",
        "img":"kingcups.webp",
        "meaning":"Emotionally balanced, compassionate, diplomatic",
        "meaning-inverted":"Self-compassion, inner feelings, moodiness, emotionally manipulative"
    },
    
]