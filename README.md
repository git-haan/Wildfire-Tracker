# Wildfire Tracker

A small React app that visualizes recent wildfire events on a Google Map using NASA's EONET API and `@vis.gl/react-google-maps`.

**Quick overview**
- Landing page (`/`) with an Open button that navigates to the app.
- Interactive map page (`#/app`) that shows wildfire markers from the EONET feed.
- Markers are displayed as fire icons; each marker is positioned using the most recent geometry from the event.

**Features**
- Live event fetch from EONET (https://eonet.gsfc.nasa.gov/api/v3/events)
- Google Maps rendering via `@vis.gl/react-google-maps`
- Simple landing page and back navigation