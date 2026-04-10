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
            image: "screengrabs/torettos-garage.jpg",
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
            id: "speed-shop-brian",
            image: "screengrabs/placeholder.jpg",
            name: "Speed Shop — Brian Sees Tran's Methods",
            category: 'brian',
            sceneOrder: 13,
            filmTime: "0:44",
            lat: 34.0893, lng: -118.3414,
            address: "TBD — Filming location to be confirmed",
            description: "Dom takes Brian on a drive through Tran's territory to show him what they're really dealing with. Through the window of a speed shop, they watch Johnny Tran rough up the owner — forcing motor oil down his throat as a warning. It's pure intimidation, a message to anyone who might talk or do business outside Tran's control. For Brian the undercover cop, this is critical intelligence: Tran isn't just a racer with an attitude, he's running an operation built on fear and violence.",
            characters: "Brian O'Conner, Dom Toretto, Johnny Tran"
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
            image: "screengrabs/torettos-garage.jpg",
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
            id: "speed-shop-dom",
            image: "screengrabs/placeholder.jpg",
            name: "Speed Shop — Dom Shows Brian Who Tran Really Is",
            category: 'dom',
            sceneOrder: 13,
            filmTime: "0:44",
            lat: 34.0893, lng: -118.3414,
            address: "TBD — Filming location to be confirmed",
            description: "Dom drives Brian past one of Tran's operations — not to start trouble, but to make a point. Through the shop window they watch Tran grab the owner and pour motor oil into his mouth, a brutal display of dominance over anyone in his orbit. Dom doesn't flinch; he's seen this before. He's showing Brian the world he lives in — where business disputes aren't settled in court, they're settled with humiliation and fear. It's a warning as much as an education.",
            characters: "Dom Toretto, Brian O'Conner, Johnny Tran"
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
            id: "speed-shop-tran",
            image: "screengrabs/placeholder.jpg",
            name: "Speed Shop — Tran Sends a Message",
            category: 'tran',
            sceneOrder: 13,
            filmTime: "0:44",
            lat: 34.0893, lng: -118.3414,
            address: "TBD — Filming location to be confirmed",
            description: "Johnny Tran walks into a speed shop and grabs the owner by the collar. This isn't a negotiation — it's a demonstration. He forces motor oil down the man's throat while his crew watches from the doorway. The message is simple: everyone in Tran's territory plays by Tran's rules, or they choke on the consequences. What Tran doesn't know is that Dom and Brian are watching from outside — taking the measure of the man they'll eventually have to go through.",
            characters: "Johnny Tran, Dom Toretto, Brian O'Conner"
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
        { from: "supra-rebuild", to: "speed-shop-brian", type: "sequel", label: "Dom shows Brian Tran's world" },
        { from: "speed-shop-brian", to: "cha-cha-cha-brian", type: "sequel", label: "Brian falls for Mia" },
        { from: "speed-shop-brian", to: "speed-shop-dom", type: "location", label: "Same scene" },
        { from: "speed-shop-brian", to: "speed-shop-tran", type: "location", label: "Same scene" },
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
}

// fast-2 and fast-3 data backed up to backup/data-fast2.js and backup/data-fast3.js

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
