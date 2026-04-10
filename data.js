// ── Shared Data for Fast & Furious Franchise Map & Timeline ──────

const MOVIES = {

// ═══════════════════════════════════════════════════════════════════
// THE FAST AND THE FURIOUS (2001)
// ═══════════════════════════════════════════════════════════════════
"fast-1": {
    title: "The Fast and the Furious",
    year: 2001,
    region: "Los Angeles",
    defaultCenter: [34.0, -118.3],
    defaultZoom: 10,

    COLORS: {
        brian:  '#3498db',
        dom:    '#e74c3c',
        tran:   '#27ae60',
        crew:   '#f39c12',
        heists: '#9b59b6'
    },

    CATEGORY_LABELS: {
        brian:  'Brian O\'Conner',
        dom:    'Dominic Toretto',
        tran:   'Johnny Tran',
        crew:   'The Crew / Races',
        heists: 'The Heists'
    },

    CATEGORY_ICONS: {
        brian:  '\u2605',
        dom:    '\u25C6',
        tran:   '\u2716',
        crew:   '\u2691',
        heists: '\u26A0'
    },

    events: [
        // ── Brian O'Conner ──
        {
            id: "dodger-stadium",
            image: "screengrabs/dodger-stadium.jpg",
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
            id: "torettos-market-brian",
            image: "screengrabs/torettos-market.jpg",
            name: "Toretto's Market & Café — Brian's Tuna Sandwich",
            category: 'brian',
            sceneOrder: 3,
            filmTime: "0:07",
            lat: 34.0763, lng: -118.2585,
            address: "1234 Bellevue Avenue, Echo Park, Los Angeles",
            description: "Brian walks into Toretto's Market and orders the same terrible tuna sandwich for the fourth day in a row — a transparent excuse to get close to Mia. Vince, suspicious from day one, picks a fight that spills into the street. Dom breaks it up, and Brian gets his first real look at the man he's been sent to investigate.",
            characters: "Brian O'Conner, Mia Toretto, Vince, Dom Toretto"
        },
        {
            id: "racers-edge",
            image: "screengrabs/racers-edge.jpg",
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
            id: "first-rally-brian",
            image: "screengrabs/clock-street.jpg",
            name: "Clock Street — Brian Bets It All",
            category: 'brian',
            sceneOrder: 6,
            filmTime: "0:22",
            lat: 34.0285, lng: -118.2352,
            address: "761 Terminal Street / Clock Street, Downtown Los Angeles",
            description: "Brian shows up to the underground rally and does the one thing no outsider should — he challenges Dominic Toretto to a race and puts up his own car as the wager. It's a calculated gamble: lose the race, but win Dom's attention. The entire crowd thinks he's insane.",
            characters: "Brian O'Conner, Dom Toretto, Hector, Edwin, Jesse"
        },
        {
            id: "first-race-brian",
            image: "screengrabs/prairie-ave.jpg",
            name: "Prairie Avenue — Brian Loses His Car",
            category: 'brian',
            sceneOrder: 7,
            filmTime: "0:25",
            lat: 33.9200, lng: -118.3572,
            address: "Prairie Avenue, 120th to 118th Street, Hawthorne",
            description: "Brian lines up against Dom on Prairie Avenue for a quarter-mile drag. He pushes the Eclipse hard but Dom's Mazda RX-7 pulls ahead. Brian hits the NOS too late, crosses the finish line out of control, and loses his car. It's the worst possible outcome for his cover — and the best possible outcome for getting inside Dom's world.",
            characters: "Brian O'Conner, Dom Toretto, Edwin, Jesse"
        },
        {
            id: "union-ave-brian",
            image: "screengrabs/union-ave.jpg",
            name: "Union Avenue — Brian Saves Dom from the Cops",
            category: 'brian',
            sceneOrder: 8,
            filmTime: "0:30",
            lat: 34.0531, lng: -118.2740,
            address: "W. 7th Street & S. Union Avenue, Downtown Los Angeles",
            description: "When the cops show up after the race, Brian makes a split-second decision that changes everything — he picks up Dom and drives him to safety. It's the moment Brian stops being a spectator and becomes complicit. Dom owes him now, and Brian knows it. The door to the Toretto crew just opened.",
            characters: "Brian O'Conner, Dom Toretto"
        },
        {
            id: "house-party-brian",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's House — Brian Meets the Family",
            category: 'brian',
            sceneOrder: 8,
            filmTime: "0:32",
            lat: 34.0783, lng: -118.2577,
            address: "722 E. Kensington Road, Echo Park, Los Angeles",
            description: "Dom brings Brian back to the house after the escape, and Brian walks into something he wasn't prepared for — a family. The backyard is lit up, music thumping, the crew eating and laughing like the cops were never a factor. Brian's been watching these people through surveillance photos and wiretaps for weeks. Now he's standing in their yard, holding a Corona, while Mia catches his eye from across the table. For the FBI, this is the deepest cover Brian has ever achieved. For Brian the person, it's the moment everything gets complicated.",
            characters: "Brian O'Conner, Dom Toretto, Mia Toretto, Letty, Vince, Leon, Jesse"
        },
        {
            id: "pch-ferrari-brian",
            image: "screengrabs/pch-malibu.jpg",
            name: "PCH — Brian Smokes a Ferrari",
            category: 'brian',
            sceneOrder: 14,
            filmTime: "0:50",
            lat: 34.0400, lng: -118.8800,
            address: "Pacific Coast Highway, Malibu",
            description: "Brian and Dom take the rebuilt Supra up the Pacific Coast Highway. When a Ferrari 355 Spider pulls alongside, Brian floors it and leaves the Ferrari in the dust. It's pure, uncomplicated joy — two guys and a fast car on an open road. For a few minutes, Brian isn't a cop and Dom isn't a suspect. They're just friends.",
            characters: "Brian O'Conner, Dom Toretto"
        },
        {
            id: "brian-arrested",
            image: "screengrabs/brian-arrested.jpg",
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
            image: "screengrabs/police-hq.jpg",
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
            id: "supra-rebuild",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's Garage — Brian Brings the Supra",
            category: 'brian',
            sceneOrder: 13,
            filmTime: "0:42",
            lat: 34.0906, lng: -118.2935,
            address: "4632 Santa Monica Blvd, Los Angeles, CA 90029",
            description: "Brian pulls up to Dom's house with a battered, half-destroyed Toyota Supra — passenger side crushed, trim missing, headlights dangling from their wires. Jesse takes one look and calls it 'a ten minute car.' Dom asks if Brian plans to tow it or push it across the finish line. But when Brian pops the hood and reveals the engine underneath, Jesse's eyes go wide: 'This will decimate all — after you put about fifteen grand in it. Or more, if we have to overnight parts from Japan.' Dom puts it on his tab at Harry's and walks Brian to his garage: 'My tools are your tools.' What follows is the most important montage in the franchise — Dom, Brian, and Jesse rebuilding the car together, turning a wreck into a weapon. It's the scene where Brian stops being a guest and becomes part of the family.",
            characters: "Brian O'Conner, Dom Toretto, Jesse"
        },
        {
            id: "swat-raid-tran",
            image: "screengrabs/simi-valley.jpg",
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
            id: "race-wars-brian",
            image: "screengrabs/race-wars.jpg",
            name: "Race Wars — Brian's Last Night Undercover",
            category: 'brian',
            sceneOrder: 17,
            filmTime: "1:10",
            lat: 34.1045, lng: -117.2512,
            address: "San Bernardino International Airport, San Bernardino",
            description: "Brian arrives at Race Wars walking a razor's edge — the SWAT raid on Tran's house was a disaster, Internal Affairs is circling, and Bilkins is ready to pull the plug. This is his last chance to build a case. When Jesse loses his car to Tran and disappears, Brian senses the crew is about to do something reckless, but he's powerless to stop it without blowing his cover.",
            characters: "Brian O'Conner, Dom Toretto, Jesse, Johnny Tran"
        },
        {
            id: "final-hijack-brian",
            image: "screengrabs/hemet.jpg",
            name: "Hemet — Brian Blows His Cover",
            category: 'brian',
            sceneOrder: 18,
            filmTime: "1:20",
            lat: 33.7478, lng: -116.9716,
            address: "Hemet, California (90 miles SE of Los Angeles)",
            description: "When the final hijacking goes catastrophically wrong and Vince is trapped on the side of the truck with a shotgun-wielding driver, Brian makes a fateful choice — he calls in a medevac helicopter, revealing to Dom and the crew that he's been an undercover cop the entire time.",
            characters: "Brian O'Conner, Dom Toretto, Vince"
        },
        {
            id: "final-race-brian",
            image: "screengrabs/terminal-island.jpg",
            name: "Terminal Island — Brian Lets Dom Go",
            category: 'brian',
            sceneOrder: 22,
            filmTime: "1:38",
            lat: 33.7420, lng: -118.2649,
            address: "Terminal Way at Earle Street, Terminal Island, San Pedro",
            description: "After everything — the lies, the betrayal, the badge — Brian lines up against Dom for one last quarter-mile. They nearly collide with a train at the railroad crossing on Earle Street. When the dust settles, Brian tosses Dom the keys to his car, choosing loyalty over the law and letting him drive away.",
            characters: "Brian O'Conner, Dom Toretto"
        },
        {
            id: "cha-cha-cha-brian",
            image: "screengrabs/cha-cha-cha.jpg",
            name: "Cha Cha Cha — Brian's Date with Mia",
            category: 'brian',
            sceneOrder: 13,
            filmTime: "0:45",
            lat: 34.0828, lng: -118.2866,
            address: "656 N. Virgil Avenue, Silver Lake, Los Angeles",
            description: "Mia takes Brian to Cha Cha Cha, a Caribbean restaurant in Silver Lake. It's one of their first real moments alone — away from the crew, away from Dom's watchful eye. For Brian, it's the night things stop being just a job. He's falling for Mia, and every minute deeper makes the eventual betrayal worse.",
            characters: "Brian O'Conner, Mia Toretto"
        },
        {
            id: "neptunes-net-brian",
            image: "screengrabs/neptunes-net.jpg",
            name: "Neptune's Net — Brian Digs for the Truth",
            category: 'brian',
            sceneOrder: 15,
            filmTime: "0:52",
            lat: 34.0533, lng: -118.9635,
            address: "42505 Pacific Coast Highway, Malibu",
            description: "After racing a Ferrari on PCH, Brian and Dom stop at Neptune's Net. While Dom sees it as two friends sharing a meal, Brian is working — probing Dom about how he really makes his money. It's the most conflicted Brian has been: genuinely bonding with the man he's been sent to destroy.",
            characters: "Brian O'Conner, Dom Toretto"
        },
        {
            id: "little-saigon-brian",
            image: "screengrabs/little-saigon.jpg",
            name: "Little Saigon — Brian Meets Tran",
            category: 'brian',
            sceneOrder: 9,
            filmTime: "0:33",
            lat: 33.7449, lng: -117.9680,
            address: "9221 Bolsa Avenue, Westminster, Orange County",
            description: "Dom brings Brian to Little Saigon to confront Johnny Tran — Brian's first direct look at the man the FBI initially suspects is behind the hijackings. The visit turns violent when Tran's crew torches Brian's Eclipse in a parking lot, giving Brian a personal stake in the investigation beyond just following orders.",
            characters: "Brian O'Conner, Dom Toretto, Johnny Tran, Lance Nguyen"
        },
        {
            id: "micheltorena-brian",
            image: "screengrabs/micheltorena.jpg",
            name: "Micheltorena Street — Brian Chases Tran",
            category: 'brian',
            sceneOrder: 20,
            filmTime: "1:30",
            lat: 34.0874, lng: -118.2758,
            address: "Micheltorena Street at Sunset Blvd, Silver Lake/Echo Park",
            description: "Seconds after Jesse is gunned down, Brian jumps into his Supra and tears after Tran and Lance through the steep, winding streets of Echo Park. He's no longer a cop following procedure — he's running on rage and grief, chasing the men who just killed a kid on his friend's front lawn.",
            characters: "Brian O'Conner, Johnny Tran, Lance Nguyen"
        },
        {
            id: "glendale-blvd-brian",
            image: "screengrabs/glendale-blvd.jpg",
            name: "Glendale Blvd — Brian Kills Tran",
            category: 'brian',
            sceneOrder: 21,
            filmTime: "1:33",
            lat: 34.0834, lng: -118.2599,
            address: "Glendale Blvd at Alvarado Street, Echo Park",
            description: "The chase from Micheltorena Street ends on Glendale Boulevard. Brian pulls alongside Tran's motorcycle and shoots him off the bike — the first time in the film Brian uses lethal force. It's the moment the undercover cop fully crosses over: he's not making an arrest, he's avenging Jesse.",
            characters: "Brian O'Conner, Johnny Tran"
        },

        // ── Dominic Toretto ──
        {
            id: "torettos-house",
            image: "screengrabs/torettos-house.jpg",
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
            id: "first-hijack-dom",
            image: "screengrabs/wilmington.jpg",
            name: "Wilmington — Dom Leads the Heist",
            category: 'dom',
            sceneOrder: 1,
            filmTime: "0:02",
            lat: 33.7864, lng: -118.2426,
            address: "Henry Ford Avenue & Alameda Street, Wilmington/Long Beach",
            description: "The film opens with Dom and his crew hijacking an 18-wheeler loaded with electronics near the docks. Dom is in command — coordinating four Honda Civics from underneath the trailer at highway speed. It's a meticulously rehearsed operation that establishes who Dominic Toretto is before we ever hear him speak: a man who lives a quarter-mile at a time.",
            characters: "Dom Toretto, Vince, Letty, Leon, Jesse"
        },
        {
            id: "first-rally-dom",
            image: "screengrabs/clock-street.jpg",
            name: "Clock Street — Dom Accepts the Challenge",
            category: 'dom',
            sceneOrder: 6,
            filmTime: "0:22",
            lat: 34.0285, lng: -118.2352,
            address: "761 Terminal Street / Clock Street, Downtown Los Angeles",
            description: "Dom runs the rally from the center of the crowd — the king of this world. When the new kid Brian wagers his car in a head-to-head challenge, Dom doesn't flinch. He's been racing since he was a teenager, and no outsider with a neon Eclipse is going to embarrass him on his own turf.",
            characters: "Dom Toretto, Brian O'Conner, Hector, Edwin, Jesse"
        },
        {
            id: "first-race-dom",
            image: "screengrabs/prairie-ave.jpg",
            name: "Prairie Avenue — Dom Wins the Race",
            category: 'dom',
            sceneOrder: 7,
            filmTime: "0:25",
            lat: 33.9200, lng: -118.3572,
            address: "Prairie Avenue, 120th to 118th Street, Hawthorne",
            description: "Dom lines up on Prairie Avenue and does what he always does — wins. His RX-7 pulls ahead cleanly, and Brian's Eclipse crosses the line out of control. Dom takes Brian's car, but what he really gains is the measure of the man: reckless, determined, and willing to risk everything. That catches Dom's attention more than the car ever could.",
            characters: "Dom Toretto, Brian O'Conner, Edwin, Jesse"
        },
        {
            id: "union-ave-dom",
            image: "screengrabs/union-ave.jpg",
            name: "Union Avenue — Dom Escapes with Brian's Help",
            category: 'dom',
            sceneOrder: 8,
            filmTime: "0:30",
            lat: 34.0531, lng: -118.2740,
            address: "W. 7th Street & S. Union Avenue, Downtown Los Angeles",
            description: "When the cops scatter the rally, Dom ducks into a parking garage — cornered. Then Brian pulls up and offers him a ride. It's an unexpected move from a guy who just lost everything to Dom. In Dom's code, that kind of loyalty means something. Brian just went from outsider to someone worth knowing.",
            characters: "Dom Toretto, Brian O'Conner"
        },
        {
            id: "house-party-dom",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's House — The Backyard Party",
            category: 'dom',
            sceneOrder: 8,
            filmTime: "0:32",
            lat: 34.0783, lng: -118.2577,
            address: "722 E. Kensington Road, Echo Park, Los Angeles",
            description: "The crew is already deep into their ritual — Coronas, barbecue smoke, and Tego Calderón on the speakers — when Dom walks through the gate with the blond kid who just pulled him out of a parking garage full of cops. The yard goes quiet. Vince's jaw tightens. Letty sizes Brian up in two seconds flat. But Dom's word is law on Kensington Road, and if he says the kid's welcome, the kid's welcome. By the time the food comes out, Brian is sitting at the Toretto table for the first time, surrounded by a family he was sent to destroy.",
            characters: "Dom Toretto, Brian O'Conner, Mia Toretto, Letty, Vince, Leon, Jesse"
        },
        {
            id: "pch-ferrari-dom",
            image: "screengrabs/pch-malibu.jpg",
            name: "PCH — Dom Tests the Rebuilt Car",
            category: 'dom',
            sceneOrder: 14,
            filmTime: "0:50",
            lat: 34.0400, lng: -118.8800,
            address: "Pacific Coast Highway, Malibu",
            description: "Dom rides shotgun as Brian takes the rebuilt car up PCH. When they dust a Ferrari at a stoplight, Dom sees the engine Brian built is the real deal. This is the moment Brian fully earns Dom's respect — not through words or loyalty, but through the only language Dom truly trusts: speed.",
            characters: "Dom Toretto, Brian O'Conner"
        },
        {
            id: "torettos-market",
            image: "screengrabs/torettos-market.jpg",
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
            id: "neptunes-net",
            image: "screengrabs/neptunes-net.jpg",
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
            id: "little-saigon-dom",
            image: "screengrabs/little-saigon.jpg",
            name: "Little Saigon — Dom Confronts Tran",
            category: 'dom',
            sceneOrder: 9,
            filmTime: "0:33",
            lat: 33.7449, lng: -117.9680,
            address: "9221 Bolsa Avenue, Westminster, Orange County",
            description: "Dom drives Brian to Little Saigon to settle a score with Johnny Tran face-to-face. The confrontation in the Vietnamese Cultural Court reveals the bad blood between the two — Tran's family and Dom's have a history that predates the hijackings. When Tran's crew torches Brian's car in retaliation, it confirms Dom's suspicion that Tran is dangerous and unpredictable.",
            characters: "Dom Toretto, Brian O'Conner, Johnny Tran, Lance Nguyen"
        },
        {
            id: "supra-rebuild-dom",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's Garage — Dom Opens His Doors",
            category: 'dom',
            sceneOrder: 13,
            filmTime: "0:42",
            lat: 34.0906, lng: -118.2935,
            address: "4632 Santa Monica Blvd, Los Angeles, CA 90029",
            description: "Brian shows up at Dom's house with a destroyed Toyota Supra, and Dom sees something in the gesture — not the car, but the commitment. When Jesse confirms the engine is legitimate, Dom makes a decision that changes everything: he puts the parts on his tab at Harry's and walks Brian into his garage. 'My tools are your tools.' Dom doesn't say that to outsiders. By opening his garage, he's opening his family. The three of them — Dom, Brian, and Jesse — rebuild the Supra together, and by the time it's done, Brian isn't a customer or a guest anymore. He's one of Dom's people.",
            characters: "Dom Toretto, Brian O'Conner, Jesse"
        },
        {
            id: "race-wars-dom",
            image: "screengrabs/race-wars.jpg",
            name: "Race Wars — Dom's Last Stand",
            category: 'dom',
            sceneOrder: 17,
            filmTime: "1:10",
            lat: 34.1045, lng: -117.2512,
            address: "San Bernardino International Airport, San Bernardino",
            description: "Dom and the crew arrive at Race Wars in force. Beneath the surface, Dom is planning one final truck hijacking. When Jesse loses his Jetta to Tran and disappears, Dom pushes forward with the heist anyway — a decision that unravels everything.",
            characters: "Dom Toretto, Letty, Vince, Leon, Jesse, Mia Toretto"
        },
        {
            id: "final-hijack-dom",
            image: "screengrabs/hemet.jpg",
            name: "Hemet — Dom's Heist Goes Wrong",
            category: 'dom',
            sceneOrder: 18,
            filmTime: "1:20",
            lat: 33.7478, lng: -116.9716,
            address: "Hemet, California (90 miles SE of Los Angeles)",
            description: "Dom leads the crew on one final truck hijacking in the hills outside Hemet. The truck driver fights back with a shotgun, wounding Vince who gets tangled in the rig's cables. Dom watches helplessly as his plan falls apart and his crew is put in mortal danger.",
            characters: "Dom Toretto, Vince, Letty, Leon"
        },
        {
            id: "final-race-dom",
            image: "screengrabs/terminal-island.jpg",
            name: "Terminal Island — Dom's Last Quarter-Mile",
            category: 'dom',
            sceneOrder: 22,
            filmTime: "1:38",
            lat: 33.7420, lng: -118.2649,
            address: "Terminal Way at Earle Street, Terminal Island, San Pedro",
            description: "With nothing left to lose — his crew scattered, Jesse dead, his freedom gone — Dom challenges Brian to one final race on Terminal Island. They barrel toward a freight train at the railroad crossing. Dom's Charger is destroyed in the aftermath, but Brian hands him the keys to escape. Dom drives off into an uncertain future.",
            characters: "Dom Toretto, Brian O'Conner"
        },
        {
            id: "driveby-dom",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's House — Jesse Is Killed",
            category: 'dom',
            sceneOrder: 19,
            filmTime: "1:28",
            lat: 34.0783, lng: -118.2577,
            address: "722 E. Kensington Road, Echo Park, Los Angeles",
            description: "Jesse finally returns home after fleeing Race Wars, pulling up to Dom's house in his battered Jetta. Before anyone can react, Johnny Tran and Lance roar past on motorcycles and open fire. Jesse is cut down in the street — the youngest member of Dom's family, murdered on his own front lawn. Dom's grief turns instantly to rage.",
            characters: "Dom Toretto, Jesse, Mia Toretto, Johnny Tran, Lance Nguyen"
        },

        // ── Johnny Tran ──
        {
            id: "little-saigon-statues",
            image: "screengrabs/little-saigon.jpg",
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
            image: "screengrabs/little-saigon-archway.jpg",
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
            id: "swat-raid-tran-pov",
            image: "screengrabs/simi-valley.jpg",
            name: "Simi Valley — Tran's House Raided",
            category: 'tran',
            sceneOrder: 16,
            filmTime: "1:05",
            lat: 34.2805, lng: -118.7340,
            address: "5777 Tonopah Court, Simi Valley, California",
            description: "A SWAT team storms Johnny Tran's family compound on Brian's orders. The raid turns up nothing — no black Civics, no stolen goods, no machine guns. Tran and Lance are arrested but quickly released on bail. The botched raid vindicates Tran and humiliates the task force, leaving Tran more brazen and dangerous than before.",
            characters: "Johnny Tran, Lance Nguyen, Brian O'Conner, Sgt. Tanner"
        },
        {
            id: "race-wars-tran",
            image: "screengrabs/race-wars.jpg",
            name: "Race Wars — Tran Takes Jesse's Jetta",
            category: 'tran',
            sceneOrder: 17,
            filmTime: "1:10",
            lat: 34.1045, lng: -117.2512,
            address: "San Bernardino International Airport, San Bernardino",
            description: "At Race Wars, Johnny Tran goads Jesse into betting his father's Volkswagen Jetta in a head-to-head race. Tran wins easily, taking the car. Humiliated and terrified of Dom's reaction, Jesse panics and flees the event — setting off the chain of events that leads to the film's violent climax.",
            characters: "Johnny Tran, Jesse, Lance Nguyen"
        },
        {
            id: "driveby-jesse",
            image: "screengrabs/torettos-house.jpg",
            name: "Toretto's House — Tran's Drive-By Kills Jesse",
            category: 'tran',
            sceneOrder: 19,
            filmTime: "1:28",
            lat: 34.0783, lng: -118.2577,
            address: "722 E. Kensington Road, Echo Park, Los Angeles",
            description: "After the failed hijacking, Jesse returns to Dom's house. Johnny Tran and Lance Nguyen roar past on motorcycles, opening fire with machine guns in a retaliatory drive-by. Jesse is gunned down in the street — the crew's youngest member killed in a hail of bullets. His death sends Dom and Brian into a furious pursuit.",
            characters: "Johnny Tran, Lance Nguyen, Jesse, Dom Toretto, Mia Toretto"
        },
        {
            id: "micheltorena-chase",
            image: "screengrabs/micheltorena.jpg",
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
            image: "screengrabs/glendale-blvd.jpg",
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
            image: "screengrabs/clock-street.jpg",
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
            image: "screengrabs/prairie-ave.jpg",
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
            image: "screengrabs/pch-malibu.jpg",
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
            image: "screengrabs/race-wars.jpg",
            name: "Race Wars — Desert Rally",
            category: 'crew',
            sceneOrder: 17,
            filmTime: "1:10",
            lat: 34.1045, lng: -117.2512,
            address: "San Bernardino International Airport, San Bernardino",
            description: "The massive desert 'Race Wars' rally was filmed at San Bernardino International Airport, about 60 miles east of LA. Director Rob Cohen noted it was 120 degrees during filming. Jesse loses his father's Volkswagen Jetta to Johnny Tran in a race, then flees.",
            characters: "Dom Toretto, Brian O'Conner, Jesse, Johnny Tran, the whole crew"
        },
        {
            id: "final-race",
            image: "screengrabs/terminal-island.jpg",
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
            image: "screengrabs/wilmington.jpg",
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
            image: "screengrabs/hemet.jpg",
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
            image: "screengrabs/union-ave.jpg",
            name: "Union Avenue — Dom Escapes the Cops",
            category: 'crew',
            sceneOrder: 8,
            filmTime: "0:30",
            lat: 34.0531, lng: -118.2740,
            address: "W. 7th Street & S. Union Avenue, Downtown Los Angeles",
            description: "After the first street race, Dom loses the pursuing police by pulling into an underground parking garage beneath the building at the northwest corner of 7th Street and Union Ave. Brian rescues Dom from the cops in this scene, beginning to earn his trust.",
            characters: "Dom Toretto, Brian O'Conner"
        }
    ],

    EVENT_LINKS: [
        { from: "dodger-stadium", to: "torettos-market", type: "sequel", label: "Brian infiltrates Dom's world" },
        { from: "torettos-market", to: "first-rally", type: "sequel", label: "Brian challenges Dom" },
        { from: "first-rally", to: "first-race", type: "sequel", label: "Rally leads to the race" },
        { from: "first-race", to: "union-ave-escape", type: "sequel", label: "Dom flees cops after race" },
        { from: "union-ave-escape", to: "house-party-brian", type: "sequel", label: "Dom brings Brian to the party" },
        { from: "house-party-brian", to: "house-party-dom", type: "location", label: "Same party" },
        { from: "house-party-brian", to: "cha-cha-cha-brian", type: "sequel", label: "Brian and Mia grow closer" },
        { from: "cha-cha-cha-brian", to: "pch-ferrari-race", type: "sequel", label: "Brian and Dom test the car" },
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
        { from: "police-hq", to: "supra-rebuild", type: "sequel", label: "Brian finds a car to rebuild" },
        { from: "supra-rebuild", to: "cha-cha-cha-brian", type: "sequel", label: "Brian falls for Mia" },
        { from: "police-hq", to: "swat-raid-tran", type: "sequel", label: "Investigation targets Tran" },
        { from: "first-rally", to: "little-saigon-statues", type: "sequel", label: "Dom takes Brian to confront Tran" }
    ],

    JOURNEYS: {
        brian: {
            label: "Brian's Journey",
            color: '#3498db',
            points: [
                [34.0736, -118.2400],
                [34.0763, -118.2585],
                [34.0893, -118.3414],
                [34.0285, -118.2352],
                [33.9200, -118.3572],
                [34.0531, -118.2740],
                [34.0783, -118.2577],
                [33.7449, -117.9680],
                [34.0531, -118.2694],
                [34.0921, -118.4354],
                [34.0906, -118.2935],
                [34.0828, -118.2866],
                [34.0400, -118.8800],
                [34.0533, -118.9635],
                [34.2805, -118.7340],
                [34.1045, -117.2512],
                [33.7478, -116.9716],
                [34.0783, -118.2577],
                [34.0874, -118.2758],
                [34.0834, -118.2599],
                [33.7420, -118.2649]
            ]
        },
        dom: {
            label: "Dom's Journey",
            color: '#e74c3c',
            points: [
                [33.7864, -118.2426],
                [34.0763, -118.2585],
                [34.0783, -118.2577],
                [34.0285, -118.2352],
                [33.9200, -118.3572],
                [34.0531, -118.2740],
                [34.0783, -118.2577],
                [33.7449, -117.9680],
                [34.0906, -118.2935],
                [34.0400, -118.8800],
                [34.0533, -118.9635],
                [34.1045, -117.2512],
                [33.7478, -116.9716],
                [34.0783, -118.2577],
                [33.7420, -118.2649]
            ]
        }
    }
},

// ═══════════════════════════════════════════════════════════════════
// 2 FAST 2 FURIOUS (2003)
// ═══════════════════════════════════════════════════════════════════
"fast-2": {
    title: "2 Fast 2 Furious",
    year: 2003,
    region: "Miami / Florida Keys",
    defaultCenter: [25.76, -80.20],
    defaultZoom: 11,

    COLORS: {
        brian:  '#3498db',
        roman:  '#e67e22',
        verone: '#e74c3c',
        crew:   '#f39c12',
    },

    CATEGORY_LABELS: {
        brian:  'Brian O\'Conner',
        roman:  'Roman Pearce',
        verone: 'Carter Verone',
        crew:   'The Crew / Races',
    },

    CATEGORY_ICONS: {
        brian:  '\u2605',
        roman:  '\u25C6',
        verone: '\u2716',
        crew:   '\u2691',
    },

    events: [
        // ── Brian O'Conner ──
        {
            id: "bridge-jump",
            name: "South Miami Avenue Bridge — The Bridge Jump",
            category: 'brian',
            sceneOrder: 3,
            filmTime: "0:12",
            lat: 25.7650, lng: -80.1930,
            address: "South Miami Avenue at the Miami River, Miami",
            description: "During the opening race, Brian faces a drawbridge that's unexpectedly raised over the Miami River. Without hesitation, he launches his car over the rising bridge, sailing past race leader Slap Jack who crashes out. The stunt was digitally composited to place the bridge within view of the starting-line crowd.",
            characters: "Brian O'Conner (Paul Walker)"
        },
        {
            id: "fbi-rooftop",
            name: "FBI Building — Brian Gets Recruited",
            category: 'brian',
            sceneOrder: 4,
            filmTime: "0:14",
            lat: 25.7740, lng: -80.1910,
            address: "Federal Building, Downtown Miami",
            description: "After being captured by the Feds using an ESD that kills his Skyline's electrical system, Brian is dragged to the FBI field office. On the rooftop at dawn, Bilkins — the same agent from the LA operation — offers Brian a deal: go undercover as a driver for drug lord Carter Verone, or face 12 to 15 years for his crimes in both LA and Miami. Brian agrees, but only if he picks his own partner.",
            characters: "Brian O'Conner, Agent Bilkins, Agent Markham"
        },
        {
            id: "verone-estate-brian",
            name: "Verone's Estate — Brian Wins the Audition",
            category: 'brian',
            sceneOrder: 8,
            filmTime: "0:28",
            lat: 25.7270, lng: -80.2090,
            address: "100 SE 32nd Road, Coconut Grove, Miami",
            description: "Brian and Roman are the first team back from the impound lot, and Brian coolly tosses Verone his mother's pearl ring without breaking stride. The audition is won. In Verone's backyard, with sprinklers running to foil eavesdropping, Verone reveals the job: carrying something from North Beach to the Keys. Brian pushes for details while Roman negotiates the fee up to fifty grand apiece.",
            characters: "Brian O'Conner, Roman Pearce, Carter Verone, Monica Fuentes"
        },
        {
            id: "pink-slip-brian",
            name: "Pink Slip Race — Brian Flies Over the Honda",
            category: 'brian',
            sceneOrder: 12,
            filmTime: "0:42",
            lat: 25.7900, lng: -80.1960,
            address: "Warehouse District, Downtown Miami",
            description: "In the second lap of Edwin's elaborate tag-team race for pink slips, Brian closes on Koto's Honda S2000 through three turns. On the final stretch, an SUV blocks the narrow street leading to the rising Dunes bridge. Both cars split around the SUV, shearing off its mirrors. Brian hits the nitrous and launches the EVO over the Honda in mid-air, landing first and sliding sideways across the finish line to win two new cars.",
            characters: "Brian O'Conner, Koto"
        },
        {
            id: "opium-brian",
            name: "Opium — Verone Tests Brian's Loyalty",
            category: 'brian',
            sceneOrder: 15,
            filmTime: "0:48",
            lat: 25.7700, lng: -80.1340,
            address: "136 Collins Avenue, South Beach, Miami Beach",
            description: "At the exclusive Opium nightclub, Verone invites Brian and Roman to his booth and asks Brian point-blank whether he finds Monica beautiful. Brian doesn't flinch — 'She's fine. In fact, she's gorgeous' — but draws the line at going further, earning Verone's respect through honesty rather than lies. The night takes a darker turn when Verone leads them to a VIP room for a demonstration of what happens to people who betray him.",
            characters: "Brian O'Conner, Roman Pearce, Carter Verone, Monica Fuentes"
        },
        {
            id: "scramble-warehouse",
            name: "Mana Wynwood — The Scramble",
            category: 'brian',
            sceneOrder: 21,
            filmTime: "1:15",
            lat: 25.7980, lng: -80.1990,
            address: "318 NW 23rd Street, Wynwood, Miami",
            description: "The cops' carefully planned stakeout is foiled when a fleet of countless cars bursts from a seemingly empty storage warehouse, creating chaos that lets Brian and Roman slip away with Verone's money. Edwin organized a hundred kids with one phone call — every amateur with a driver's license pours onto the street, engulfing the police like angry bees. In the chaos, Brian and Roman swap into the Acura NSX and Honda S2000 they won in the pink slip race.",
            characters: "Brian O'Conner, Roman Pearce, Tej, Edwin, Suki"
        },
        {
            id: "seven-mile-brian",
            name: "Seven Mile Bridge — Brian Ejects Enrique",
            category: 'brian',
            sceneOrder: 23,
            filmTime: "1:22",
            lat: 24.7200, lng: -81.1350,
            address: "Old Seven Mile Bridge, Florida Keys",
            description: "Speeding south across the old Seven Mile Bridge in the Honda S2000, Brian hits a jerry-rigged nitrous switch that blasts Enrique's seat loose. When the first charge only cracks the door, Brian fights Enrique hand-to-hand at 100 mph, kicks the seat free, and sends the goon tumbling across the asphalt. With both babysitters ejected, Brian and Roman are finally free — but Brian radios Roman that he's not running. He's going back for Clemente.",
            characters: "Brian O'Conner, Enrique"
        },
        {
            id: "boat-jump",
            name: "Bill Baggs Cape Florida — The Final Boat Jump",
            category: 'brian',
            sceneOrder: 25,
            filmTime: "1:30",
            lat: 25.6750, lng: -80.1590,
            address: "Bill Baggs Cape Florida State Park, 1200 S Crandon Blvd, Key Biscayne",
            description: "The film's climax sees Brian launch his Camaro off a fishing pier at the southern tip of Key Biscayne, landing on Verone's moving yacht. A custom ramp was built on the pier, and the car's engine was removed and steam-cleaned to prevent Biscayne Bay from being polluted. Simultaneously, Michael Bay was filming Bad Boys II on the other side of the park.",
            characters: "Brian O'Conner, Roman Pearce, Carter Verone"
        },

        // ── Roman Pearce ──
        {
            id: "demolition-derby",
            name: "Demolition Derby — Roman's Introduction",
            category: 'roman',
            sceneOrder: 5,
            filmTime: "0:18",
            lat: 25.4620, lng: -80.4780,
            address: "Rural Arena, South Florida",
            description: "Brian and Bilkins track Roman Pearce to a dusty demolition derby arena where he's dominating behind the wheel of a jet-black '71 Monte Carlo — ankle monitor and all. Roman wins by flipping the last standing Trans-Am into the crowd, then gets stiffed on his prize money. Brian's arrival triggers a fistfight between the two childhood friends, but once the dust settles, Brian offers Roman a deal: drive for the Feds in Miami and get the ankle bracelet removed for good.",
            characters: "Roman Pearce (Tyrese Gibson), Brian O'Conner, Agent Bilkins"
        },
        {
            id: "verone-estate-roman",
            name: "Verone's Estate — Roman Shoots a Fed",
            category: 'roman',
            sceneOrder: 9,
            filmTime: "0:28",
            lat: 25.7270, lng: -80.2090,
            address: "100 SE 32nd Road, Coconut Grove, Miami",
            description: "When Agent Markham blows their cover by showing up at the impound lot, Roman makes a split-second decision that changes everything — he shoots the Fed in the leg. 'That crazy asshole shot a Fed!' Olan screams, and Verone's attitude shifts from skepticism to respect. Back at the estate, Roman negotiates fifty grand apiece for the driving job, eating Verone's empanadas with one hand while making demands with the other.",
            characters: "Roman Pearce, Brian O'Conner, Carter Verone, Agent Markham"
        },
        {
            id: "pink-slip-roman",
            name: "Pink Slip Race — Roman vs Livan",
            category: 'roman',
            sceneOrder: 11,
            filmTime: "0:42",
            lat: 25.7900, lng: -80.1960,
            address: "Warehouse District, Downtown Miami",
            description: "In the first lap of the tag-team race, Roman takes on Livan's Acura NSX through the North Course — but Brian has handicapped him by agreeing to no nitrous. Roman leads through the first two turns on raw driving skill alone, but Livan pops his nitrous on the final straight and steals the tunnel. Roman's Spyder clips the tunnel entrance at 120 mph and somersaults forward, somehow landing on all four tires. He roars out bruised but alive, triggering Brian's second-lap start.",
            characters: "Roman Pearce, Livan"
        },
        {
            id: "opium-roman",
            name: "Opium — Roman Keeps His Cool",
            category: 'roman',
            sceneOrder: 16,
            filmTime: "0:48",
            lat: 25.7700, lng: -80.1340,
            address: "136 Collins Avenue, South Beach, Miami Beach",
            description: "Roman watches Verone's mind games with a hand resting near his waistband, ready for anything. When Verone confronts him about torching the goons' Cadillac windshield, Roman doesn't back down — 'I don't like being followed. And I have a little issue with authority.' Verone grins: he has the same problem, especially with cops. Then Verone leads them into the VIP room for a demonstration none of them will forget.",
            characters: "Roman Pearce, Brian O'Conner, Carter Verone"
        },
        {
            id: "versailles-roman",
            name: "Versailles — Roman Prepares for the Run",
            category: 'roman',
            sceneOrder: 18,
            filmTime: "0:55",
            lat: 25.7656, lng: -80.2530,
            address: "3555 SW 8th Street, Coral Gables, Miami",
            description: "At six a.m. the morning of the money run, Roman and Brian arrive at the Versailles coffee window to meet Verone's men Enrique and Roberto. The goons will be riding along as babysitters — one in each car — to ensure the drivers don't try anything. Roman sizes up Roberto, already working out how to get rid of him. As the Mercedes SUV pulls out of the lot, the run begins.",
            characters: "Roman Pearce, Brian O'Conner, Enrique, Roberto"
        },
        {
            id: "sunset-talk",
            name: "Pigeon Key — The Sunset Talk",
            category: 'roman',
            sceneOrder: 19,
            filmTime: "1:00",
            lat: 24.7060, lng: -81.1580,
            address: "Pigeon Key, Old Seven Mile Bridge, Florida Keys",
            description: "Brian and Roman settle their differences in front of a glowing sunset on Pigeon Key, a tiny island on the Florida Keys Overseas Heritage Trail. The old 7 Mile Bridge — now closed to traffic — is where the helicopter/limo chase from James Cameron's True Lies was also filmed. It's the emotional turning point where the two friends finally clear the air.",
            characters: "Brian O'Conner, Roman Pearce (Tyrese Gibson)"
        },
        {
            id: "seven-mile-roman",
            name: "Seven Mile Bridge — Ejecto Seato, Cuz",
            category: 'roman',
            sceneOrder: 22,
            filmTime: "1:22",
            lat: 24.7200, lng: -81.1350,
            address: "Old Seven Mile Bridge, Florida Keys",
            description: "Roman slows the Acura NSX on the bridge, looks Roberto dead in the eye, and shows him the makeshift nitrous button wired to the passenger seat. 'Ejection seat, cuz.' He presses it. The nitrous canisters beneath the seat explode, blowing the suicide door clean off its hinges and launching Roberto and his seat across the pavement. Roman accelerates away grinning, free of his babysitter for the first time.",
            characters: "Roman Pearce, Roberto"
        },
        {
            id: "boat-jump-roman",
            name: "Bill Baggs Cape Florida — Roman Storms the Yacht",
            category: 'roman',
            sceneOrder: 26,
            filmTime: "1:30",
            lat: 25.6750, lng: -80.1590,
            address: "Bill Baggs Cape Florida State Park, 1200 S Crandon Blvd, Key Biscayne",
            description: "Roman follows Brian off the fishing pier ramp at Key Biscayne, both cars sailing through the air and crashing down onto Verone's yacht. While Brian subdues Verone, Roman secures the money. In the aftermath, Roman suggests sticking around Miami — maybe investing in a garage together with 'a little extra cash.' Three bags delivered, three bags on the books. The fourth stays off the record.",
            characters: "Roman Pearce, Brian O'Conner, Carter Verone"
        },

        // ── Carter Verone ──
        {
            id: "verone-estate",
            name: "Carter Verone's Estate — The Audition",
            category: 'verone',
            sceneOrder: 6,
            filmTime: "0:25",
            lat: 25.7270, lng: -80.2090,
            address: "100 SE 32nd Road, Coconut Grove, Miami",
            description: "Verone's lavish 14-acre waterfront estate in Coconut Grove, where a clutch of drivers is invited to 'audition' for a smuggling job. The mansion, built in 1971 overlooking Biscayne Bay, once belonged to Sylvester Stallone and sits alongside the famous Villa Vizcaya. The audition sends the drivers on a high-speed race to retrieve a pearl ring from Verone's impounded Ferrari in Little Haiti.",
            characters: "Carter Verone (Cole Hauser), Brian O'Conner, Roman Pearce, Monica Fuentes (Eva Mendes)"
        },
        {
            id: "verone-sprinklers",
            name: "Verone's Mansion — The Sprinkler Briefing",
            category: 'verone',
            sceneOrder: 7,
            filmTime: "0:27",
            lat: 25.7270, lng: -80.2090,
            address: "100 SE 32nd Road, Coconut Grove, Miami",
            description: "In his manicured backyard, Verone presses a button that activates the lawn sprinklers — not to water the grass, but to mask his conversation from hidden microphones. 'The house has ears in it, so we water the yard when I want to talk. That's why my grass looks so good.' Standing in the one dry spot, he reveals the job: something must be carried from North Beach to the Keys. The Feds are too close and the local cops are getting harder to control.",
            characters: "Carter Verone, Brian O'Conner, Roman Pearce"
        },
        {
            id: "opium-verone",
            name: "Opium VIP Room — The Rat",
            category: 'verone',
            sceneOrder: 14,
            filmTime: "0:48",
            lat: 25.7700, lng: -80.1340,
            address: "136 Collins Avenue, South Beach, Miami Beach",
            description: "In the Opium VIP room, four objects wait on a table: champagne, a metal box, duct tape, and a blowtorch. Verone's men tape corrupt Detective Whitworth to a table, place a rat on his bare stomach, and cover it with the metal box. As the blowtorch heats the metal and the rat screeches trying to chew its way down, Whitworth breaks — agreeing to pull his cops from Verone's stash houses for a fifteen-minute window. Verone turns to Brian and Roman: 'The same goes for you two.'",
            characters: "Carter Verone, Detective Whitworth, Brian O'Conner, Roman Pearce, Enrique, Roberto"
        },
        {
            id: "boat-jump-verone",
            name: "Bill Baggs Cape Florida — Verone Captured",
            category: 'verone',
            sceneOrder: 27,
            filmTime: "1:30",
            lat: 25.6750, lng: -80.1590,
            address: "Bill Baggs Cape Florida State Park, 1200 S Crandon Blvd, Key Biscayne",
            description: "Verone waits on his yacht expecting a smooth handoff and a clean escape to international waters. Instead, two cars come flying off the pier and crash onto his deck. Brian and Roman take him down while Monica reveals she's been FBI all along. 'At least I can say I shared my bed with a cop,' Verone sneers as agents drag him away. Monica smiles: 'And now you can share plenty with your own kind.'",
            characters: "Carter Verone, Brian O'Conner, Roman Pearce, Monica Fuentes"
        },

        // ── The Crew / Races ──
        {
            id: "tejs-garage",
            name: "Tej's Garage — Brian's Home Base",
            category: 'crew',
            sceneOrder: 1,
            filmTime: "0:03",
            lat: 25.7340, lng: -80.1550,
            address: "Arthur Lamb Jr Road, Virginia Key, Miami",
            description: "On the run after the events of the first film, Brian has relocated to Miami and is staying in a houseboat behind Tej's garage on Virginia Key. The location was the legendary Jimbo's dive bar, run by Jimbo Luznar from 1954 until it closed in 2012. The site has been used for filming Miami Vice, CSI Miami, Burn Notice, Dexter, and more.",
            characters: "Brian O'Conner (Paul Walker), Tej (Ludacris)"
        },
        {
            id: "starting-line",
            name: "Old Fire Station No. 2 — The Starting Line",
            category: 'crew',
            sceneOrder: 2,
            filmTime: "0:08",
            lat: 25.7910, lng: -80.1937,
            address: "1401 North Miami Avenue, Miami",
            description: "The starting point for the opening street race through Downtown Miami. The cars line up on NE 14th Street at North Miami Avenue, in front of the Firehouse MRKT restaurant housed in the Old Fire Station No. 2. The race winds through the streets of Downtown Miami past the American Airlines Arena.",
            characters: "Brian O'Conner, Tej, Suki, Orange Julius, Slap Jack"
        },
        {
            id: "impound-lot",
            name: "Little Haiti Impound — The Audition Race",
            category: 'crew',
            sceneOrder: 10,
            filmTime: "0:30",
            lat: 25.8350, lng: -80.1900,
            address: "NE 2nd Avenue, Little Haiti, Miami",
            description: "Verone's audition sends eight drivers racing up I-95 from his Coconut Grove estate to a federal impound lot in Little Haiti, twenty miles north. The lot is packed with seized yachts, jet-skis, and cigarette boats. Brian and Roman reach Verone's cherry red Ferrari first — Roman smashes the window with his shirt-wrapped fist, only for Brian to open the unlocked door. Agent Markham nearly blows the operation, but Roman shoots him in the leg, sealing their credibility.",
            characters: "Brian O'Conner, Roman Pearce, Agent Markham, Olan"
        },
        {
            id: "pink-slip-race",
            name: "Pink Slip Race — Tag-Team for Slips",
            category: 'crew',
            sceneOrder: 13,
            filmTime: "0:42",
            lat: 25.7900, lng: -80.1960,
            address: "Warehouse District, Downtown Miami",
            description: "Edwin's masterpiece: a tag-team race for pink slips through the warehouse district. First-wave drivers run the North Course — all left turns ending in a tunnel on Canal Street. When they pass the alley, second-wave drivers launch onto the South Course. The kicker: the Dunes bridge keeps rising, and if you don't reach it in time, you can't cross the finish line. Brian and Roman beat Koto and Livan, winning an Acura NSX and a Honda S2000 — the untraceable cars they need for the money run.",
            characters: "Brian O'Conner, Roman Pearce, Koto, Livan, Edwin, Suki"
        },
        {
            id: "versailles",
            name: "Versailles Restaurant — Meeting Verone's Men",
            category: 'crew',
            sceneOrder: 17,
            filmTime: "0:55",
            lat: 25.7656, lng: -80.2530,
            address: "3555 SW 8th Street, Coral Gables, Miami",
            description: "The iconic Cuban restaurant near Little Havana where Brian and Roman meet up with Verone's men at six a.m. for the big job. Versailles has been serving Cuban cuisine since 1971 and is possibly the world's most famous Cuban restaurant. Enrique and Roberto — Verone's enforcers — will ride along as babysitters, one in each car, to ensure the money reaches the drop.",
            characters: "Brian O'Conner, Roman Pearce, Enrique, Roberto"
        },
        {
            id: "money-run",
            name: "I-95 South — The Money Run",
            category: 'crew',
            sceneOrder: 20,
            filmTime: "1:08",
            lat: 25.8100, lng: -80.1950,
            address: "Interstate 95, Miami",
            description: "With three duffel bags of cash in each car — sixty million dollars total — Brian and Roman tear south on I-95 with Enrique and Roberto riding shotgun as babysitters. Miami PD picks up the chase thanks to Detective Whitworth's double-cross, and dozens of cruisers, a police helicopter, and ESD weapons converge. Brian hops the highway median into oncoming traffic and threads through a jackknifing semi, leading the pursuit toward the warehouse district.",
            characters: "Brian O'Conner, Roman Pearce, Enrique, Roberto"
        },
        {
            id: "seven-mile-bridge",
            name: "Seven Mile Bridge — The Goon Ejection",
            category: 'crew',
            sceneOrder: 24,
            filmTime: "1:22",
            lat: 24.7200, lng: -81.1350,
            address: "Old Seven Mile Bridge, Florida Keys",
            description: "Having swapped into the Acura NSX and Honda S2000 they won in the pink slip race, Brian and Roman speed across the old Seven Mile Bridge toward Verone's yacht. With synchronized precision, they trigger rigged nitrous canisters beneath their passengers' seats. Roman's suicide door blows clean off, launching Roberto onto the pavement. Brian fights Enrique hand-to-hand at speed before kicking him out. Free of their babysitters, the boys race for the Keys.",
            characters: "Brian O'Conner, Roman Pearce, Enrique, Roberto"
        }
    ],

    EVENT_LINKS: [
        { from: "tejs-garage", to: "starting-line", type: "sequel", label: "Brian enters the race" },
        { from: "starting-line", to: "bridge-jump", type: "sequel", label: "The race heats up" },
        { from: "bridge-jump", to: "fbi-rooftop", type: "sequel", label: "Brian is captured by the Feds" },
        { from: "fbi-rooftop", to: "demolition-derby", type: "sequel", label: "Brian recruits Roman" },
        { from: "demolition-derby", to: "verone-estate", type: "sequel", label: "The audition begins" },
        { from: "verone-estate", to: "impound-lot", type: "sequel", label: "Drivers race to Little Haiti" },
        { from: "impound-lot", to: "verone-sprinklers", type: "sequel", label: "Brian and Roman win the audition" },
        { from: "verone-sprinklers", to: "pink-slip-race", type: "sequel", label: "The boys need untraceable cars" },
        { from: "pink-slip-race", to: "opium-verone", type: "sequel", label: "Verone invites them to Opium" },
        { from: "opium-verone", to: "versailles", type: "sequel", label: "The money run is set" },
        { from: "versailles", to: "sunset-talk", type: "sequel", label: "Brian and Roman make peace" },
        { from: "sunset-talk", to: "money-run", type: "sequel", label: "The money run begins" },
        { from: "money-run", to: "scramble-warehouse", type: "sequel", label: "The scramble shakes the cops" },
        { from: "scramble-warehouse", to: "seven-mile-bridge", type: "sequel", label: "Ejecto seato on the bridge" },
        { from: "seven-mile-bridge", to: "boat-jump", type: "sequel", label: "The final boat jump" },
        { from: "verone-estate", to: "verone-sprinklers", type: "location", label: "Same estate" },
        { from: "opium-brian", to: "opium-verone", type: "location", label: "Same nightclub" },
        { from: "seven-mile-brian", to: "seven-mile-roman", type: "location", label: "Same bridge" },
        { from: "boat-jump", to: "boat-jump-verone", type: "location", label: "Same yacht" }
    ],

    JOURNEYS: {
        brian: {
            label: "Brian's Journey",
            color: '#3498db',
            points: [
                [25.7340, -80.1550],
                [25.7910, -80.1937],
                [25.7650, -80.1930],
                [25.7740, -80.1910],
                [25.7270, -80.2090],
                [25.8350, -80.1900],
                [25.7900, -80.1960],
                [25.7700, -80.1340],
                [25.7656, -80.2530],
                [24.7060, -81.1580],
                [25.8100, -80.1950],
                [25.7980, -80.1990],
                [24.7200, -81.1350],
                [25.6750, -80.1590]
            ]
        },
        roman: {
            label: "Roman's Journey",
            color: '#e67e22',
            points: [
                [25.4620, -80.4780],
                [25.7270, -80.2090],
                [25.8350, -80.1900],
                [25.7900, -80.1960],
                [25.7700, -80.1340],
                [25.7656, -80.2530],
                [24.7060, -81.1580],
                [25.8100, -80.1950],
                [25.7980, -80.1990],
                [24.7200, -81.1350],
                [25.6750, -80.1590]
            ]
        }
    }
},

// ═══════════════════════════════════════════════════════════════════
// THE FAST AND THE FURIOUS: TOKYO DRIFT (2006)
// ═══════════════════════════════════════════════════════════════════
"fast-3": {
    title: "The Fast and the Furious: Tokyo Drift",
    year: 2006,
    region: "Los Angeles / Tokyo",
    defaultCenter: [34.0, -118.3],
    defaultZoom: 3,

    COLORS: {
        sean:  '#3498db',
        han:   '#e67e22',
        dk:    '#e74c3c',
        drift: '#27ae60'
    },

    CATEGORY_LABELS: {
        sean:  'Sean Boswell',
        han:   'Han Seoul-Oh',
        dk:    'DK / Takashi',
        drift: 'Drift Scenes / Races'
    },

    CATEGORY_ICONS: {
        sean:  '\u2605',
        han:   '\u25C6',
        dk:    '\u2716',
        drift: '\u2691'
    },

    events: [
        // ── Sean Boswell ──
        {
            id: "sean-school",
            name: "Cabrillo High School — Sean Can't Stay Out of Trouble",
            category: 'sean',
            sceneOrder: 1,
            filmTime: "0:01",
            lat: 33.8060, lng: -118.1880,
            address: "2001 Santa Fe Avenue, Long Beach, California",
            description: "Sean Boswell is the perpetual new kid — another school, another parking lot, another fight he didn't start but can't walk away from. When rich-kid bully Clay needles him into a race, Sean accepts without hesitation, putting up the pink slip on his '71 Monte Carlo against Clay's Rolex. The school is really Juan Rodriguez Cabrillo High School in Long Beach, which also doubled as William McKinley High in the first season of Glee.",
            characters: "Sean Boswell (Lucas Black), Clay (Zachery Ty Bryan)"
        },
        {
            id: "sean-opening-race",
            name: "Victorville — Sean Totals the Monte Carlo",
            category: 'sean',
            sceneOrder: 2,
            filmTime: "0:05",
            lat: 34.4930, lng: -117.3350,
            address: "Ferndale Road & Tigertail Street, Golden Mesa, Victorville, California",
            description: "Sean and Clay tear through the 'Shangri La' housing estate — a real construction site near Victorville on I-15, about 80 miles northeast of LA. Sean's Chevrolet Monte Carlo and Clay's Dodge Viper SRT-10 career along half-built streets until both cars are destroyed in a spectacular crash into a model home. Sean is arrested — his third strike — and given an ultimatum: juvenile detention or exile to Tokyo to live with his estranged military father.",
            characters: "Sean Boswell, Clay"
        },
        {
            id: "sean-dads-house",
            name: "Azabu-Jūban — Sean Arrives in Tokyo",
            category: 'sean',
            sceneOrder: 3,
            filmTime: "0:15",
            lat: 35.6540, lng: 139.7370,
            address: "Azabu-Jūban district, Minato, Tokyo, Japan",
            description: "Banished across the Pacific, Sean arrives at his father's cramped apartment on a narrow sidestreet in the Azabu-Jūban district. The tiny house — a far cry from American suburbia — paints a vivid picture of typical Tokyo residential life. The real location was on the eastern fringe of the district in the Minato area, but has since been demolished in redevelopment. Sean's father, a career military man stationed at nearby Camp Zama, lays down strict rules that Sean immediately plans to break.",
            characters: "Sean Boswell, Sergeant Major Boswell (Brian Goodman)"
        },
        {
            id: "sean-first-drift",
            name: "Hawthorne Mall — Sean Wrecks Han's Silvia",
            category: 'sean',
            sceneOrder: 5,
            filmTime: "0:25",
            lat: 33.9190, lng: -118.3510,
            address: "Hawthorne Plaza Mall, Hawthorne Boulevard at 120th Street, Hawthorne, California",
            description: "Twinkie brings Sean to the underground drift meet in a vast multi-level parking garage — really the abandoned Hawthorne Plaza Mall, with Tokyo skyline views added digitally for rooftop scenes. Sean, high on adrenaline and American bravado, rashly challenges DK to a head-to-head drift race and borrows Han's pristine Nissan Silvia S15. It goes catastrophically wrong: Sean can't hold the drifts on the spiral ramps, destroys the car, and owes Han a debt he has no way to repay.",
            characters: "Sean Boswell, Twinkie (Bow Wow), Han Seoul-Oh (Sung Kang), DK (Brian Tee)"
        },
        {
            id: "sean-hans-garage",
            name: "Santa Fe Ave — Sean Works Off His Debt",
            category: 'sean',
            sceneOrder: 7,
            filmTime: "0:35",
            lat: 34.0370, lng: -118.2290,
            address: "South Santa Fe Avenue at Mesquit Street, Downtown Los Angeles",
            description: "To pay off the destroyed Silvia, Sean is put to work in Han's garage — a warehouse beneath the old Sixth Street Viaduct in Downtown LA, dressed to look like a Tokyo back-alley workshop. The real area was redeveloped after the historic bridge was demolished in 2016. Sean spends his days fixing cars and running errands, slowly earning Han's trust and learning that there's more to drifting than just going fast.",
            characters: "Sean Boswell, Han Seoul-Oh"
        },
        {
            id: "sean-drift-practice",
            name: "Terminal Island — Sean Learns to Drift",
            category: 'sean',
            sceneOrder: 9,
            filmTime: "0:40",
            lat: 33.7420, lng: -118.2650,
            address: "South Seaside Avenue, Terminal Island, San Pedro, Los Angeles",
            description: "On a sun-bleached dock on Terminal Island, near the Japanese Fishing Village Memorial, Sean teaches himself to drift while local fishermen look on with amused skepticism. Among them — in an uncredited cameo — is the real-life 'Drift King' Keiichi Tsuchiya, the legendary Japanese driver whose mountain runs inspired the Initial D manga and, in turn, this film. The dockside was dressed with Japanese set dressing to pass for a Tokyo waterfront.",
            characters: "Sean Boswell, Keiichi Tsuchiya (cameo)"
        },
        {
            id: "sean-mountain-race",
            name: "San Gabriel Mountains — Sean Wins the Crown",
            category: 'sean',
            sceneOrder: 21,
            filmTime: "1:30",
            lat: 34.2350, lng: -117.8700,
            address: "San Gabriel Canyon Road (Route 39), near San Gabriel Reservoir, Azusa, California",
            description: "In the film's climax, Sean strips his father's hybrid Mustang down to bare metal — ripping out the passenger seat, bumpers, hood, and rear windshield — because lighter cars drift faster. Neela ties his broken hand to the gear shift with his belt. On the treacherous switchbacks off Route 39, with the San Gabriel Dam visible in the background and a sheer cliff drop on every turn, Sean outdrives DK using everything Han taught him. The new kid from Alabama becomes the Drift King.",
            characters: "Sean Boswell, DK, Neela (Nathalie Kelley)"
        },

        // ── Han Seoul-Oh ──
        {
            id: "han-drift-garage",
            name: "Hawthorne Mall — Han Sees Something in Sean",
            category: 'han',
            sceneOrder: 5,
            filmTime: "0:25",
            lat: 33.9190, lng: -118.3510,
            address: "Hawthorne Plaza Mall, Hawthorne Boulevard at 120th Street, Hawthorne, California",
            description: "While the rest of the parking structure laughs at the American kid who just totaled a Silvia on the first turn, Han watches from the shadows with a different expression. He sees something familiar in Sean — the same reckless hunger that Han himself once had. Instead of demanding money or retribution, Han makes Sean an offer: work off the debt in his garage. It's a decision that will change both their lives.",
            characters: "Han Seoul-Oh, Sean Boswell, DK"
        },
        {
            id: "han-garage",
            name: "Santa Fe Ave — Han's Garage",
            category: 'han',
            sceneOrder: 7,
            filmTime: "0:35",
            lat: 34.0370, lng: -118.2290,
            address: "South Santa Fe Avenue at Mesquit Street, Downtown Los Angeles",
            description: "Han's garage is more than a workshop — it's a sanctuary. Beneath the rumble of the Sixth Street Viaduct, Han runs a loose crew of misfits, fixing cars and occasionally collecting debts for people who'd rather not go to the police. He teaches Sean the philosophy behind drifting: it's not about winning or losing, it's about control. 'The only thing that matters is who's behind the wheel.' The real warehouse was demolished when the viaduct was replaced in 2016.",
            characters: "Han Seoul-Oh, Sean Boswell, Twinkie, Recon (Earl)"
        },
        {
            id: "han-apartment",
            name: "Shibuya Futsal Park — View from Han's Apartment",
            category: 'han',
            sceneOrder: 8,
            filmTime: "0:38",
            lat: 35.6590, lng: 139.7005,
            address: "Adidas Futsal Park, Shibuya, Tokyo, Japan",
            description: "The rooftop football pitch visible from Han's apartment window is the real Shibuya Adidas Futsal Park, built in 2001 atop the Tokyu Department Store, overlooking Shibuya Square. The park is open to the public and requires advance booking. Han's apartment scenes establish his lifestyle — relaxed, sophisticated, always snacking — and reveal a man who chose Tokyo not to hide, but to live on his own terms.",
            characters: "Han Seoul-Oh, Sean Boswell"
        },
        {
            id: "han-tsukiji",
            name: "Tsukiji Fish Market — Collecting Debts",
            category: 'han',
            sceneOrder: 10,
            filmTime: "0:45",
            lat: 35.6654, lng: 139.7707,
            address: "Tsukiji Fish Market, Chuo, Tokyo, Japan",
            description: "Sean accompanies Han on a debt-collection run through the controlled chaos of Tsukiji, Tokyo's legendary wholesale fish market. Among the maze of stalls and the clatter of auction bells, Sean learns that Han's income doesn't come from racing — it comes from a network of favors and debts that keeps his garage funded. It's also where Sean first understands that Han operates in a grey zone between the drift crews and the Yakuza.",
            characters: "Han Seoul-Oh, Sean Boswell"
        },
        {
            id: "han-donut",
            name: "Wilshire Blvd (as 'Shibuya') — Han Shows Why He Drifts",
            category: 'han',
            sceneOrder: 11,
            filmTime: "0:50",
            lat: 34.0540, lng: -118.2530,
            address: "Wilshire Boulevard between Grand Avenue and Flower Street, Downtown Los Angeles (doubling for Shibuya, Tokyo)",
            description: "Han reveals the real reason he drifts — to meet girls. At a Downtown 'Tokyo' intersection, Han performs tight, smoking donuts around two women who stand unflinching in the middle of the road, laughing and posing. Underneath the neon set dressing, the intersection is Wilshire Boulevard at Grand Avenue in the heart of Downtown LA. It's the same spot — dressed identically — where Han will be killed near the end of the film.",
            characters: "Han Seoul-Oh, Sean Boswell"
        },
        {
            id: "han-death",
            name: "Wilshire Blvd (as 'Shibuya') — Han's Death",
            category: 'han',
            sceneOrder: 19,
            filmTime: "1:17",
            lat: 34.0540, lng: -118.2530,
            address: "Wilshire Boulevard between Grand Avenue and Flower Street, Downtown Los Angeles (doubling for Shibuya, Tokyo)",
            description: "The same intersection where Han once performed joyful donuts becomes the site of his death. During a high-speed chase through the neon-lit streets of 'Shibuya,' DK's crew T-bones Han's car at the crossing. The vehicle flips, leaks fuel, and erupts in flames. Although the scene is set in Tokyo's Shibuya district, the crash was filmed at Wilshire Boulevard and Grand Avenue in Downtown LA — dressed with Japanese signage, neon, and set extensions. It is the emotional hinge of the film — transforming Sean's arc from self-discovery to vengeance. In the franchise's timeline, this scene takes place after the events of Fast & Furious 6, and a mysterious Mercedes at the crash site is later revealed to be driven by Deckard Shaw.",
            characters: "Han Seoul-Oh, DK, Sean Boswell"
        },

        // ── DK / Takashi ──
        {
            id: "dk-drift-king",
            name: "Hawthorne Mall — The Drift King Reigns",
            category: 'dk',
            sceneOrder: 5,
            filmTime: "0:25",
            lat: 33.9190, lng: -118.3510,
            address: "Hawthorne Plaza Mall, Hawthorne Boulevard at 120th Street, Hawthorne, California",
            description: "DK arrives at the parking structure in a fleet of chameleon-paint Nissan 350Zs, the crowd parting like a sea. He is the undisputed Drift King — nephew of Yakuza boss Matsui, untouchable on and off the track. When the cocky American kid challenges him, DK doesn't even break a sweat. He humiliates Sean on the spiral ramps, drifting with surgical precision while Sean destroys Han's car. DK's message is clear: this is his kingdom.",
            characters: "DK (Brian Tee), Sean Boswell, Hiro, Morimoto"
        },
        {
            id: "dk-yakuza",
            name: "Kabukichō — DK Joins the Yakuza",
            category: 'dk',
            sceneOrder: 15,
            filmTime: "1:00",
            lat: 35.6938, lng: 139.7034,
            address: "Kabukichō, Shinjuku, Tokyo, Japan",
            description: "In the Ageha nightclub deep in Kabukichō — Shinjuku's notorious red-light and entertainment district — DK celebrates his formal induction into his uncle Matsui's Yakuza clan. Champagne flows, hostesses serve, and demure dancers work the room. But Neela, watching DK play the gangster, sees the boy she loved disappearing. She walks away from the balcony without a word. Kabukichō was guerrilla-filmed by the crew, who couldn't get permits for the district's neon-soaked streets.",
            characters: "DK, Neela, Matsui, Hiro"
        },
        {
            id: "dk-chase",
            name: "Shibuya Crossing — DK Chases Han",
            category: 'dk',
            sceneOrder: 18,
            filmTime: "1:12",
            lat: 35.6595, lng: 139.7004,
            address: "Shibuya Scramble Crossing, Shibuya, Tokyo, Japan",
            description: "When DK discovers that Han has been skimming money from the Yakuza and that Sean has been seeing Neela, he launches a furious chase through the streets of Shibuya. The production team used LiDAR scans and thousands of high-resolution photographs of the real Shibuya Crossing to create 3D maps, seamlessly blending guerrilla-filmed rolling footage of the actual scramble crossing with CGI recreations. The chase ends at the Wilshire Boulevard intersection dressed as Shibuya, where Han's car is struck and explodes.",
            characters: "DK, Han Seoul-Oh, Sean Boswell, Morimoto"
        },
        {
            id: "dk-mountain",
            name: "San Gabriel Mountains — DK Falls",
            category: 'dk',
            sceneOrder: 21,
            filmTime: "1:30",
            lat: 34.2350, lng: -117.8700,
            address: "San Gabriel Canyon Road (Route 39), near San Gabriel Reservoir, Azusa, California",
            description: "DK accepts Sean's challenge for one final race on the suicide mountain run — the treacherous switchback road that only DK has ever survived. With Matsui watching from a black sedan and the entire drift community lining the cliffs, DK drives his chameleon-paint 350Z with fury and precision. But Sean, lighter and calmer, holds every turn. On Deadman's Curve, DK's rage gets the better of him — he oversteers, clips the wall, and tumbles. The Drift King's reign is over.",
            characters: "DK, Sean Boswell, Matsui"
        },

        // ── Drift Scenes / Races ──
        {
            id: "drift-opening-race",
            name: "Victorville — The Shangri La Race",
            category: 'drift',
            sceneOrder: 2,
            filmTime: "0:05",
            lat: 34.4930, lng: -117.3350,
            address: "Ferndale Road & Tigertail Street, Golden Mesa, Victorville, California",
            description: "The film opens with a raw, old-school American street race through a half-built housing development called Shangri La — a real construction site near Victorville on I-15. Clay's Dodge Viper SRT-10 squares off against Sean's ratty '71 Monte Carlo that runs on attitude and backyard engineering. They barrel through unfinished streets, swerve around construction equipment, and both crash spectacularly into a model home. It's the last American race Sean will have for a long time.",
            characters: "Sean Boswell, Clay"
        },
        {
            id: "drift-parking-race",
            name: "Hawthorne Mall — The Underground Drift Meet",
            category: 'drift',
            sceneOrder: 5,
            filmTime: "0:25",
            lat: 33.9190, lng: -118.3510,
            address: "Hawthorne Plaza Mall, Hawthorne Boulevard at 120th Street, Hawthorne, California",
            description: "The vast parking structure drift meet is a hyper-real spectacle of color, chrome, and skin. Dozens of JDM-tuned cars fill the concrete levels — an invisible Supra with acrylic bodywork showing its gold-plated engine, Twinkie's orange Scion that splits open into a DJ station, and DK's fleet of chameleon 350Zs. The real location is the abandoned Hawthorne Plaza Mall, shuttered since 1999, which was also used for Minority Report, Gone Girl, and Birds of Prey. The 'Tokyo' skyline visible from the roof was entirely CGI.",
            characters: "Sean Boswell, Twinkie, Han Seoul-Oh, DK, Neela"
        },
        {
            id: "drift-harajuku",
            name: "Takeshita Street — Twinkie's Hustle",
            category: 'drift',
            sceneOrder: 10,
            filmTime: "0:42",
            lat: 35.6702, lng: 139.7025,
            address: "Takeshita Street (Takeshita-dōri), Harajuku, Shibuya, Tokyo, Japan",
            description: "Twinkie takes Sean to Harajuku's Takeshita Street — the epicenter of Tokyo teen fashion — to hawk bootleg electronics and designer knockoffs from the back of his van. The narrow pedestrian street, lined with trendy boutiques and crepe stands, was filmed on location by the guerrilla crew. It's the scene where Sean begins to find his footing in Tokyo, making friends among the army brats and local drift kids who congregate in the district's side streets.",
            characters: "Twinkie, Sean Boswell, Recon (Earl)"
        },
        {
            id: "drift-car-meet",
            name: "Daikoku Futō — The Legendary Car Meet",
            category: 'drift',
            sceneOrder: 13,
            filmTime: "0:55",
            lat: 35.4550, lng: 139.6720,
            address: "Daikoku Futō Service Area, Tsurumi, Yokohama, Japan",
            description: "Sean and Neela grab vending-machine food at a service station surrounded by a parking lot full of custom cars — the real-life Daikoku Futō in Yokohama, one of the world's most famous car meet spots. The elevated highway off-ramps around the service area are notorious for impromptu drifting when the police aren't patrolling. The vending machines sell everything from ramen to steak, charged by swiping a cellphone. It's a quintessential Tokyo car-culture pilgrimage site.",
            characters: "Sean Boswell, Neela"
        },
        {
            id: "drift-mountain",
            name: "San Gabriel Mountains — The Mountain Showdown",
            category: 'drift',
            sceneOrder: 21,
            filmTime: "1:30",
            lat: 34.2350, lng: -117.8700,
            address: "San Gabriel Canyon Road (Route 39), near San Gabriel Reservoir, Azusa, California",
            description: "The climactic mountain drift takes place on roads off San Gabriel Canyon Road, Route 39, at the southern tip of the San Gabriel Reservoir. Despite the Japanese gate erected at the starting line, the location is pure Southern California — a few miles northeast of Azusa. A tuner girl lights a trail of gasoline as the starting signal. Sean's stripped-down hybrid Mustang — American on the outside, Japanese RB26 engine inside — faces DK's chameleon 350Z on switchbacks where one wrong move means a 500-foot drop. The San Gabriel Dam is visible in the background at the starting point.",
            characters: "Sean Boswell, DK, Neela, Matsui, Twinkie, Recon"
        }
    ],

    EVENT_LINKS: [
        { from: "sean-school", to: "sean-opening-race", type: "sequel", label: "Sean races Clay" },
        { from: "sean-opening-race", to: "sean-dads-house", type: "sequel", label: "Sean is exiled to Tokyo" },
        { from: "sean-dads-house", to: "sean-first-drift", type: "sequel", label: "Sean discovers drift culture" },
        { from: "sean-first-drift", to: "sean-hans-garage", type: "sequel", label: "Sean works off his debt" },
        { from: "sean-hans-garage", to: "sean-drift-practice", type: "sequel", label: "Sean learns to drift" },
        { from: "han-drift-garage", to: "han-garage", type: "sequel", label: "Han takes Sean under his wing" },
        { from: "han-garage", to: "han-apartment", type: "sequel", label: "Han and Sean bond" },
        { from: "han-apartment", to: "han-tsukiji", type: "sequel", label: "Han shows Sean his world" },
        { from: "han-tsukiji", to: "han-donut", type: "sequel", label: "Han shows why he drifts" },
        { from: "dk-drift-king", to: "dk-yakuza", type: "sequel", label: "DK rises in the Yakuza" },
        { from: "dk-yakuza", to: "dk-chase", type: "sequel", label: "DK discovers the betrayal" },
        { from: "dk-chase", to: "han-death", type: "cause", label: "DK's chase kills Han" },
        { from: "han-death", to: "sean-mountain-race", type: "cause", label: "Han's death triggers the final race" },
        { from: "drift-opening-race", to: "drift-parking-race", type: "sequel", label: "American racing to Japanese drifting" },
        { from: "drift-parking-race", to: "drift-harajuku", type: "sequel", label: "Sean enters Tokyo drift culture" },
        { from: "drift-harajuku", to: "drift-car-meet", type: "sequel", label: "Deeper into the scene" },
        { from: "drift-car-meet", to: "drift-mountain", type: "sequel", label: "The final showdown" },
        { from: "dk-chase", to: "dk-mountain", type: "sequel", label: "DK accepts the challenge" },
        { from: "sean-drift-practice", to: "sean-mountain-race", type: "sequel", label: "Sean is ready" }
    ],

    JOURNEYS: {
        "sean-ca": {
            label: "Sean's Journey (California)",
            color: '#3498db',
            points: [
                [33.8060, -118.1880],
                [34.4930, -117.3350]
            ]
        },
        "sean-tokyo": {
            label: "Sean's Journey (Tokyo)",
            color: '#3498db',
            points: [
                [35.6540, 139.7370],
                [35.6590, 139.7005],
                [35.6654, 139.7707],
                [35.6702, 139.7025],
                [35.4550, 139.6720],
                [35.6595, 139.7004]
            ]
        },
        "han-tokyo": {
            label: "Han's Journey (Tokyo)",
            color: '#e67e22',
            points: [
                [35.6590, 139.7005],
                [35.6654, 139.7707],
                [35.6938, 139.7034],
                [35.4550, 139.6720],
                [35.6595, 139.7004]
            ]
        }
    }
}

}; // end MOVIES

// ── Movie ordering for UI ───────────────────────
const MOVIE_ORDER = ["fast-1"];

// ── Backward-compatible aliases (default to first movie) ────────
const COLORS = MOVIES["fast-1"].COLORS;
const CATEGORY_LABELS = MOVIES["fast-1"].CATEGORY_LABELS;
const CATEGORY_ICONS = MOVIES["fast-1"].CATEGORY_ICONS;
const events = MOVIES["fast-1"].events;
const EVENT_LINKS = MOVIES["fast-1"].EVENT_LINKS;
const JOURNEYS = MOVIES["fast-1"].JOURNEYS;
