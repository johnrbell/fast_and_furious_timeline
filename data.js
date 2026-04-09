// ── Shared Data for Fast & Furious (2001) Map & Timeline ─────────

// ── Category Colors ─────────────────────────────
const COLORS = {
    brian:  '#3498db',   // blue
    dom:    '#e74c3c',   // red
    tran:   '#27ae60',   // green
    crew:   '#f39c12',   // orange
    heists: '#9b59b6'    // purple
};

const CATEGORY_LABELS = {
    brian:  'Brian O\'Conner',
    dom:    'Dominic Toretto',
    tran:   'Johnny Tran',
    crew:   'The Crew / Races',
    heists: 'The Heists'
};

const CATEGORY_ICONS = {
    brian:  '\u2605',  // ★
    dom:    '\u25C6',  // ◆
    tran:   '\u2716',  // ✖
    crew:   '\u2691',  // ⚑
    heists: '\u26A0'   // ⚠
};

// ── Event Data ──────────────────────────────────
const events = [

    // ── Brian O'Conner ──
    {
        id: "dodger-stadium",
        name: "Dodger Stadium — Brian Tests His Car",
        category: 'brian',
        sceneOrder: 2,
        filmTime: "0:05",
        lat: 34.0736, lng: -118.2400,
        address: "1000 Vin Scully Avenue, Los Angeles",
        description: "The film opens with Brian O'Conner testing his lime-green Mitsubishi Eclipse in the empty parking lot of Dodger Stadium, establishing his character as an aspiring street racer.",
        characters: "Brian O'Conner (Paul Walker)"
    },
    {
        id: "racers-edge",
        name: "The Racer's Edge — Brian's Day Job",
        category: 'brian',
        sceneOrder: 4,
        filmTime: "0:12",
        lat: 34.0893, lng: -118.3414,
        address: "1046 N. Orange Drive, Hollywood",
        description: "The Racer's Edge is the auto parts store where Brian works as his cover. The building at the southeast corner of Santa Monica Blvd and Orange Drive was dressed with a race car on the roof for filming. Harry, the store owner, is Brian's contact in the operation.",
        characters: "Brian O'Conner, Harry"
    },
    {
        id: "brian-arrested",
        name: "7th & Valencia — Brian's Cover Revealed",
        category: 'brian',
        sceneOrder: 11,
        filmTime: "0:38",
        lat: 34.0531, lng: -118.2694,
        address: "W. 7th Street & Valencia Street, Los Angeles",
        description: "Brian is 'arrested' by LAPD officers in a staged scene near MacArthur Park. This is the first reveal to the audience that Brian is actually an undercover cop investigating the truck hijackings.",
        characters: "Brian O'Conner, Sgt. Tanner, Agent Bilkins"
    },
    {
        id: "police-hq",
        name: "Police HQ — The Eddie Fisher House",
        category: 'brian',
        sceneOrder: 12,
        filmTime: "0:40",
        lat: 34.0921, lng: -118.4354,
        address: "1261 Angelo Drive, Beverly Hills",
        description: "The circular mid-century Hollywood home with the pool where Brian's FBI/LAPD task force has set up a temporary headquarters. The house was described in the film as 'the house Eddie Fisher built for Elizabeth Taylor.' The home was demolished around 2001.",
        characters: "Brian O'Conner, Sgt. Tanner, Agent Bilkins"
    },
    {
        id: "swat-raid-tran",
        name: "Simi Valley — SWAT Raid on Tran's House",
        category: 'brian',
        sceneOrder: 16,
        filmTime: "1:05",
        lat: 34.2805, lng: -118.7340,
        address: "5777 Tonopah Court, Simi Valley, California",
        description: "Brian leads a SWAT team to raid Johnny Tran's family home. The bust is a spectacular failure — the Civics in Tran's garage aren't black, the machine gun doesn't turn up, and the VCRs were legally purchased. All suspects are released on bail. Brian is placed on desk duty pending an Internal Affairs investigation, his career on the line.",
        characters: "Brian O'Conner, Sgt. Tanner, Agent Bilkins, Johnny Tran, Lance Nguyen"
    },
    {
        id: "final-hijack-brian",
        name: "Hemet — Brian Blows His Cover",
        category: 'brian',
        sceneOrder: 18,
        filmTime: "1:20",
        lat: 33.7474, lng: -116.9720,
        address: "Hemet, California (90 miles SE of Los Angeles)",
        description: "When the final hijacking goes catastrophically wrong and Vince is trapped on the side of the truck with a shotgun-wielding driver, Brian makes a fateful choice — he calls in a medevac helicopter, revealing to Dom and the crew that he's been an undercover cop the entire time.",
        characters: "Brian O'Conner, Dom Toretto, Vince"
    },
    {
        id: "final-race-brian",
        name: "Terminal Island — Brian Lets Dom Go",
        category: 'brian',
        sceneOrder: 22,
        filmTime: "1:38",
        lat: 33.7418, lng: -118.2653,
        address: "Terminal Way at Earle Street, Terminal Island, San Pedro",
        description: "After everything — the lies, the betrayal, the badge — Brian lines up against Dom for one last quarter-mile. They nearly collide with a train at the railroad crossing on Earle Street. When the dust settles, Brian tosses Dom the keys to his car, choosing loyalty over the law and letting him drive away.",
        characters: "Brian O'Conner, Dom Toretto"
    },

    // ── Dominic Toretto ──
    {
        id: "torettos-house",
        name: "Toretto's House — Dom's Home",
        category: 'dom',
        sceneOrder: 5,
        filmTime: "0:18",
        lat: 34.0783, lng: -118.2577,
        address: "722 E. Kensington Road, Echo Park, Los Angeles",
        description: "Dom's iconic white woodframe house in Echo Park, where the team gathers for backyard barbecues and Corona beers. The house and the brown Craftsman next door at 718-720 are real homes. The white garage between them was a temporary set piece built for the film.",
        characters: "Dom Toretto, Mia, Letty, Vince, Leon, Jesse"
    },
    {
        id: "torettos-market",
        name: "Toretto's Market & Café — Bob's Market",
        category: 'dom',
        sceneOrder: 3,
        filmTime: "0:07",
        lat: 34.0763, lng: -118.2585,
        address: "1234 Bellevue Avenue, Echo Park, Los Angeles",
        description: "The Toretto family deli and grocery store where Brian orders a tuna sandwich every day to get close to Mia. In reality it's Bob's Market, a mom-and-pop store at the corner of Kensington Road and Bellevue Ave. The fight between Vince and Brian spills out into the street here.",
        characters: "Brian O'Conner, Mia Toretto, Vince, Dom Toretto"
    },
    {
        id: "cha-cha-cha",
        name: "Cha Cha Cha — Mia & Brian's Date",
        category: 'dom',
        sceneOrder: 13,
        filmTime: "0:45",
        lat: 34.0828, lng: -118.2866,
        address: "656 N. Virgil Avenue, Silver Lake, Los Angeles",
        description: "Mia takes Brian to Cha Cha Cha, a popular Caribbean restaurant in the Virgil Village area of Silver Lake, partly to spite Vince. The colorful, lively eatery has since been demolished. It also appeared in the 2005 Steve Martin film Shopgirl.",
        characters: "Brian O'Conner, Mia Toretto"
    },
    {
        id: "neptunes-net",
        name: "Neptune's Net — Dom & Brian Bond",
        category: 'dom',
        sceneOrder: 15,
        filmTime: "0:52",
        lat: 34.0533, lng: -118.9635,
        address: "42505 Pacific Coast Highway, Malibu",
        description: "After racing a Ferrari on PCH, Dom and Brian stop at Neptune's Net, an iconic beachside seafood shack in Malibu. Over food, Brian tries to get Dom to reveal how he really makes money. This is a key bonding moment between the two characters. The restaurant also appeared in Point Break.",
        characters: "Dom Toretto, Brian O'Conner"
    },

    {
        id: "race-wars-dom",
        name: "Race Wars — Dom's Last Stand",
        category: 'dom',
        sceneOrder: 17,
        filmTime: "1:10",
        lat: 34.1042, lng: -117.2516,
        address: "San Bernardino International Airport, San Bernardino",
        description: "Dom and the crew arrive at Race Wars in force. Beneath the surface, Dom is planning one final truck hijacking. When Jesse loses his Jetta to Tran and disappears, Dom pushes forward with the heist anyway — a decision that unravels everything.",
        characters: "Dom Toretto, Letty, Vince, Leon, Jesse, Mia Toretto"
    },
    {
        id: "final-hijack-dom",
        name: "Hemet — Dom's Heist Goes Wrong",
        category: 'dom',
        sceneOrder: 18,
        filmTime: "1:20",
        lat: 33.7482, lng: -116.9712,
        address: "Hemet, California (90 miles SE of Los Angeles)",
        description: "Dom leads the crew on one final truck hijacking in the hills outside Hemet. The truck driver fights back with a shotgun, wounding Vince who gets tangled in the rig's cables. Dom watches helplessly as his plan falls apart and his crew is put in mortal danger.",
        characters: "Dom Toretto, Vince, Letty, Leon"
    },
    {
        id: "final-race-dom",
        name: "Terminal Island — Dom's Last Quarter-Mile",
        category: 'dom',
        sceneOrder: 22,
        filmTime: "1:38",
        lat: 33.7422, lng: -118.2645,
        address: "Terminal Way at Earle Street, Terminal Island, San Pedro",
        description: "With nothing left to lose — his crew scattered, Jesse dead, his freedom gone — Dom challenges Brian to one final race on Terminal Island. They barrel toward a freight train at the railroad crossing. Dom's Charger is destroyed in the aftermath, but Brian hands him the keys to escape. Dom drives off into an uncertain future.",
        characters: "Dom Toretto, Brian O'Conner"
    },

    // ── Johnny Tran ──
    {
        id: "little-saigon-statues",
        name: "Little Saigon — Vietnamese Cultural Court",
        category: 'tran',
        sceneOrder: 9,
        filmTime: "0:33",
        lat: 33.7449, lng: -117.9680,
        address: "9221 Bolsa Avenue, Westminster, Orange County",
        description: "The Asian motorcycle gang scenes were shot in Westminster's Little Saigon district. The temple-like area with white marble statues is the Vietnamese Cultural Court behind the 99 Ranch Market. Brian and Dom visit to confront Johnny Tran about the truck hijackings.",
        characters: "Johnny Tran, Lance Nguyen, Dom Toretto, Brian O'Conner"
    },
    {
        id: "little-saigon-archway",
        name: "Little Saigon — The Asian Gateway",
        category: 'tran',
        sceneOrder: 10,
        filmTime: "0:35",
        lat: 33.7449, lng: -117.9630,
        address: "9631 Bolsa Avenue, Westminster, Orange County",
        description: "The large ornamental Asian archway that the characters drive under in the Little Saigon scenes is located a few blocks east of the Cultural Court. Though the film makes them appear adjacent, they're actually separate locations along Bolsa Avenue.",
        characters: "Johnny Tran, Lance Nguyen"
    },
    {
        id: "race-wars-tran",
        name: "Race Wars — Tran Takes Jesse's Jetta",
        category: 'tran',
        sceneOrder: 17,
        filmTime: "1:10",
        lat: 34.1048, lng: -117.2508,
        address: "San Bernardino International Airport, San Bernardino",
        description: "At Race Wars, Johnny Tran goads Jesse into betting his father's Volkswagen Jetta in a head-to-head race. Tran wins easily, taking the car. Humiliated and terrified of Dom's reaction, Jesse panics and flees the event — setting off the chain of events that leads to the film's violent climax.",
        characters: "Johnny Tran, Jesse, Lance Nguyen"
    },
    {
        id: "driveby-jesse",
        name: "Toretto House — Tran's Drive-By Kills Jesse",
        category: 'tran',
        sceneOrder: 19,
        filmTime: "1:28",
        lat: 34.0785, lng: -118.2573,
        address: "722 E. Kensington Road, Echo Park, Los Angeles",
        description: "After the failed hijacking, Jesse returns to Dom's house. Johnny Tran and Lance Nguyen roar past on motorcycles, opening fire with machine guns in a retaliatory drive-by. Jesse is gunned down in the street — the crew's youngest member killed in a hail of bullets. His death sends Dom and Brian into a furious pursuit.",
        characters: "Johnny Tran, Lance Nguyen, Jesse, Dom Toretto, Mia Toretto"
    },
    {
        id: "micheltorena-chase",
        name: "Micheltorena Street — Motorcycle Chase",
        category: 'tran',
        sceneOrder: 20,
        filmTime: "1:30",
        lat: 34.0874, lng: -118.2758,
        address: "Micheltorena Street at Sunset Blvd, Silver Lake/Echo Park",
        description: "Seconds after the drive-by that killed Jesse, Brian leaps into his car and chases Tran and Lance through the steep, hilly streets of Echo Park. The steep descent down Micheltorena Street is a homage to the famous car chase in Bullitt.",
        characters: "Brian O'Conner, Johnny Tran, Lance Nguyen"
    },
    {
        id: "glendale-blvd",
        name: "Glendale Blvd — Tran's Gang Confronted",
        category: 'tran',
        sceneOrder: 21,
        filmTime: "1:33",
        lat: 34.0834, lng: -118.2599,
        address: "Glendale Blvd at Alvarado Street, Echo Park",
        description: "The motorcycle chase from Micheltorena Street ends on Glendale Boulevard, just north of Echo Park. Brian shoots Johnny Tran from his bike during the pursuit. This location is only a few blocks from Dom's house in the film.",
        characters: "Brian O'Conner, Johnny Tran"
    },

    // ── The Crew / Races ──
    {
        id: "first-rally",
        name: "Clock Street — The First Big Rally",
        category: 'crew',
        sceneOrder: 6,
        filmTime: "0:22",
        lat: 34.0285, lng: -118.2352,
        address: "761 Terminal Street / Clock Street, Downtown Los Angeles",
        description: "The first major nighttime car rally takes place between the giant warehouses of the LA Produce Market near 7th Street and Alameda. Brian wagers his car against Dom in a quarter-mile race. The huge warehouse complex (now ROW DTLA) was once the Southern Pacific Railroad goods terminus.",
        characters: "Brian O'Conner, Dom Toretto, Hector, Edwin, Jesse"
    },
    {
        id: "first-race",
        name: "Prairie Avenue — The First Race",
        category: 'crew',
        sceneOrder: 7,
        filmTime: "0:25",
        lat: 33.9200, lng: -118.3572,
        address: "Prairie Avenue, 120th to 118th Street, Hawthorne",
        description: "The actual quarter-mile race takes place on Prairie Avenue in Hawthorne, about 15 miles from the rally location. The cars race north from 120th Street to 118th Street, past the western edge of Hawthorne Airport. Brian loses his car to Dom after crossing the finish line and nearly crashing.",
        characters: "Brian O'Conner, Dom Toretto, Edwin, Jesse"
    },
    {
        id: "pch-ferrari-race",
        name: "PCH — Racing a Ferrari",
        category: 'crew',
        sceneOrder: 14,
        filmTime: "0:50",
        lat: 34.0400, lng: -118.8800,
        address: "Pacific Coast Highway, Malibu",
        description: "Brian and Dom take the rebuilt car for a test drive up the Pacific Coast Highway. When a Ferrari 355 Spider pulls alongside at a red light, they can't resist — Brian floors it and blows the Ferrari away, proving the car is finally race-worthy. The spontaneous victory leads them to celebrate at Neptune's Net just up the road.",
        characters: "Brian O'Conner, Dom Toretto"
    },
    {
        id: "race-wars",
        name: "Race Wars — Desert Rally",
        category: 'crew',
        sceneOrder: 17,
        filmTime: "1:10",
        lat: 34.1045, lng: -117.2512,
        address: "San Bernardino International Airport, E. 3rd Street, San Bernardino",
        description: "The massive desert 'Race Wars' rally was filmed at San Bernardino International Airport, about 60 miles east of LA. Director Rob Cohen noted it was 120 degrees during filming. Jesse loses his father's Volkswagen Jetta to Johnny Tran in a race, then flees.",
        characters: "Dom Toretto, Brian O'Conner, Jesse, Johnny Tran, the whole crew"
    },
    {
        id: "final-race",
        name: "Terminal Island — The Final Race",
        category: 'crew',
        sceneOrder: 22,
        filmTime: "1:38",
        lat: 33.7420, lng: -118.2649,
        address: "Terminal Way at Earle Street, Terminal Island, San Pedro",
        description: "The climactic race between Dom and Brian takes place on Terminal Island near the LA harbor. They race east on Terminal Way toward the railroad tracks at Earle Street, nearly colliding with a train. The Vincent Thomas Bridge is visible in the background. They end up at the east end of Terminal Way near Ferry Street.",
        characters: "Dom Toretto, Brian O'Conner"
    },

    // ── The Heists ──
    {
        id: "first-hijack",
        name: "Wilmington — First Truck Hijacking",
        category: 'heists',
        sceneOrder: 1,
        filmTime: "0:02",
        lat: 33.7864, lng: -118.2426,
        address: "Henry Ford Avenue & Alameda Street, Wilmington/Long Beach",
        description: "The film's opening sequence shows Dom's crew hijacking an 18-wheeler loaded with electronics using Honda Civics. Shot in the industrial area near the docks on the border of Wilmington and Long Beach, with the Texaco refinery visible in the background.",
        characters: "Dom Toretto, Vince, Letty, Leon, Jesse"
    },
    {
        id: "final-hijack",
        name: "Hemet — Final Truck Hijacking",
        category: 'heists',
        sceneOrder: 18,
        filmTime: "1:20",
        lat: 33.7478, lng: -116.9716,
        address: "Hemet, California (90 miles SE of Los Angeles)",
        description: "The final, disastrous truck hijacking attempt takes place in the remote hills of Hemet, about 90 miles southeast of LA. The truck driver surprises the crew with a shotgun, and Vince gets caught on the side of the truck. Brian blows his cover by calling in a medevac helicopter to save Vince's life.",
        characters: "Dom Toretto, Vince, Letty, Leon, Jesse, Brian O'Conner"
    },
    {
        id: "union-ave-escape",
        name: "Union Avenue — Dom Escapes the Cops",
        category: 'crew',
        sceneOrder: 8,
        filmTime: "0:30",
        lat: 34.0531, lng: -118.2740,
        address: "W. 7th Street & S. Union Avenue, Downtown Los Angeles",
        description: "After the first street race, Dom loses the pursuing police by pulling into an underground parking garage beneath the building at the northwest corner of 7th Street and Union Ave. Brian rescues Dom from the cops in this scene, beginning to earn his trust.",
        characters: "Dom Toretto, Brian O'Conner"
    }
];

// ── Event Links ──────────────────────────────────
const EVENT_LINKS = [
    { from: "dodger-stadium", to: "torettos-market", type: "sequel", label: "Brian infiltrates Dom's world" },
    { from: "torettos-market", to: "first-rally", type: "sequel", label: "Brian challenges Dom" },
    { from: "first-rally", to: "first-race", type: "sequel", label: "Rally leads to the race" },
    { from: "first-race", to: "union-ave-escape", type: "sequel", label: "Dom flees cops after race" },
    { from: "union-ave-escape", to: "torettos-house", type: "sequel", label: "Brian earns Dom's trust" },
    { from: "torettos-house", to: "cha-cha-cha", type: "sequel", label: "Brian and Mia grow closer" },
    { from: "cha-cha-cha", to: "pch-ferrari-race", type: "sequel", label: "Brian and Dom test the car" },
    { from: "pch-ferrari-race", to: "neptunes-net", type: "sequel", label: "They celebrate at Neptune's Net" },
    { from: "little-saigon-statues", to: "little-saigon-archway", type: "location", label: "Same district" },
    { from: "neptunes-net", to: "swat-raid-tran", type: "sequel", label: "Brian's investigation leads to raid" },
    { from: "swat-raid-tran", to: "race-wars", type: "sequel", label: "Failed raid — Race Wars is last chance" },
    { from: "race-wars", to: "final-hijack", type: "sequel", label: "Dom attempts one last heist" },
    { from: "final-hijack", to: "driveby-jesse", type: "sequel", label: "Tran retaliates — Jesse killed" },
    { from: "driveby-jesse", to: "micheltorena-chase", type: "sequel", label: "Brian chases Tran" },
    { from: "micheltorena-chase", to: "glendale-blvd", type: "sequel", label: "Chase ends on Glendale Blvd" },
    { from: "glendale-blvd", to: "final-race", type: "sequel", label: "Dom and Brian's final race" },
    { from: "first-hijack", to: "brian-arrested", type: "cause", label: "Hijackings trigger investigation" },
    { from: "brian-arrested", to: "police-hq", type: "sequel", label: "Brian reports to task force" },
    { from: "police-hq", to: "swat-raid-tran", type: "sequel", label: "Investigation targets Tran" },
    { from: "first-rally", to: "little-saigon-statues", type: "sequel", label: "Dom takes Brian to confront Tran" }
];

// ── Journey Paths ──────────────────────────────
const JOURNEYS = {
    brian: {
        label: "Brian's Journey",
        color: '#3498db',
        points: [
            [34.0736, -118.2400],   // Dodger Stadium
            [34.0893, -118.3414],   // Racer's Edge
            [34.0763, -118.2585],   // Toretto's Market
            [34.0531, -118.2694],   // 7th & Valencia (arrested)
            [34.0921, -118.4354],   // Police HQ
            [34.0763, -118.2585],   // Toretto's Market (returns)
            [34.0285, -118.2352],   // First Rally
            [33.9200, -118.3572],   // First Race
            [34.0531, -118.2740],   // Union Ave escape
            [34.0783, -118.2577],   // Toretto's House
            [33.7449, -117.9680],   // Little Saigon
            [34.0828, -118.2866],   // Cha Cha Cha
            [34.0400, -118.8800],   // PCH Ferrari Race
            [34.0533, -118.9635],   // Neptune's Net
            [34.2805, -118.7340],   // SWAT Raid (Simi Valley)
            [34.1045, -117.2512],   // Race Wars
            [33.7478, -116.9716],   // Final Hijack (Hemet)
            [34.0785, -118.2573],   // Toretto House (drive-by)
            [34.0874, -118.2758],   // Micheltorena Chase
            [34.0834, -118.2599],   // Glendale Blvd
            [33.7420, -118.2649]    // Final Race
        ]
    },
    dom: {
        label: "Dom's Journey",
        color: '#e74c3c',
        points: [
            [33.7864, -118.2426],   // First Hijack
            [34.0783, -118.2577],   // Toretto's House
            [34.0763, -118.2585],   // Toretto's Market
            [34.0285, -118.2352],   // First Rally
            [33.9200, -118.3572],   // First Race
            [34.0531, -118.2740],   // Union Ave escape
            [34.0783, -118.2577],   // Toretto's House (BBQ)
            [33.7449, -117.9680],   // Little Saigon
            [34.0400, -118.8800],   // PCH Ferrari Race
            [34.0533, -118.9635],   // Neptune's Net
            [34.1045, -117.2512],   // Race Wars
            [33.7478, -116.9716],   // Final Hijack (Hemet)
            [34.0785, -118.2573],   // Toretto House (drive-by)
            [33.7420, -118.2649]    // Final Race
        ]
    }
};
