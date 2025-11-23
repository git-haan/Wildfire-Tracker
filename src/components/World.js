import {
  APIProvider,
  Map,
  AdvancedMarker
} from '@vis.gl/react-google-maps';


const World = ({ 
    eventData, 
    center = { lat: 33.7490, lng: -84.3880 }, 
    zoom = 3 
    }) => {
        const wildfireEvents = eventData.filter(event => 
            event.categories?.some(
                cat => cat.id === 'wildfires' || cat.title === 'Wildfires'
            )
        );

        const wildfireMarkers = wildfireEvents.flatMap(event => {
            const coords = event.geometry?.[0]
            if (!coords || !coords.coordinates) return []

            const [lon, lat] = coords.coordinates

            return [{
                id: event.id,
                title: event.title,
                position: { lat, lng: lon }

            }];
        });

    return (
        <div style={{ height: '100vh', width: '100%', position: 'relative' }}>
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                <Map
                    defaultZoom={ zoom }
                    defaultCenter={ center }
                    mapId={process.env.REACT_APP_GOOGLE_MAP_ID}
                >
                    {wildfireMarkers.map(fire => (
                        <AdvancedMarker 
                            key={ fire.id }
                            position={ fire.position }
                        >
                            <span className='fire-marker' title={ fire.title }>
                                🔥
                            </span>
                        </AdvancedMarker>
                    ))}
                </Map>
            </APIProvider>

            <button
                onClick={() => { window.location.hash = '#/'; }}
                className='button'
            >
                <span style={{ fontSize: 16, lineHeight: 1 }}>&larr;</span>
            </button>
        </div>
    )
}


export default World;