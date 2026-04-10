
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