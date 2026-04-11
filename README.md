# The Fast & The Furious — Filming Locations Map & Timeline

An interactive map and timeline of real-world filming locations from *The Fast and the Furious* (2001), built as a static site with Leaflet.

![Screenshot](screengrabs/ss.png)

## Features

- **Interactive map** — explore 20+ filming locations across the greater Los Angeles area, color-coded by character/storyline (Brian, Dom, Tran, The Crew, The Heists)
- **Character journeys** — toggle road-routed polylines tracing Brian's and Dom's paths through the film, powered by OSRM
- **Timeline view** — browse locations in scene order with timestamps, descriptions, and direct "View on Map" links
- **Deep linking** — jump from the timeline straight to a specific marker on the map via URL parameters
- **Street view toggle** — switch between a dark Carto basemap and standard OpenStreetMap tiles
- **Filter & navigate** — show/hide categories in the legend; click any location to fly to it on the map

## Getting Started

This is a zero-dependency static site — no build step or `npm install` required.

### Serve locally

Any static HTTP server will work:

```bash
# Python
python3 -m http.server 8080

# Node (npx)
npx serve .
```

Then open [http://localhost:8080](http://localhost:8080).

> Opening `index.html` directly via `file://` may cause CORS issues with the OSRM routing API. An HTTP server is recommended.

## Project Structure

```
├── index.html       # Map page (Leaflet + inline CSS/JS)
├── timeline.html    # Timeline page (vanilla JS)
├── data.js          # Shared location data, categories, and journey waypoints
└── README.md
```

## Tech Stack

| Component | Technology |
|-----------|------------|
| Map | [Leaflet 1.9.4](https://leafletjs.com/) via CDN |
| Tiles | [Carto Dark Matter](https://carto.com/basemaps/) / OpenStreetMap |
| Routing | [OSRM](https://project-osrm.org/) public API |
| Runtime | Vanilla HTML, CSS, and JavaScript — no frameworks or bundlers |

## Data

All location data lives in `data.js` as a hand-curated `events` array. Each entry includes:

- Scene order and in-film timestamp
- Latitude/longitude and real-world address
- Description, characters, and category

Location information sourced from [movie-locations.com](https://www.movie-locations.com) and [seeing-stars.com](https://www.seeing-stars.com) as well as the screenplay. 

## License

This is a fan project for educational purposes. *The Fast and the Furious* is a trademark of Universal Pictures.
