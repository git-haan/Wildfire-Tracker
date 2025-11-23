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
        <div style={{ height: '100vh', width: '100%' }}>
            <APIProvider apiKey='AIzaSyD0gNBmi9lvkLDCgaMe7RE6Em2QFwjpKGI'>
                <Map
                    defaultZoom={ zoom }
                    defaultCenter={ center }
                    mapId={'3f89f24ff80819c63cc700e0'}
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
        </div>
    )
}


export default World;