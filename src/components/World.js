import {
  APIProvider,
  Map,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';

const GOOGLE_MAPS_API_KEY = 'INSERT_YOUR_GOOGLE_MAPS_API_KEY_HERE'

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


    return (
        <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
            <div style={{ height: '100vh', width: '100%' }}>
                <Map
                    defaultZoom={ zoom }
                    defaultCenter={ center }
                    mapId={'DEMO_MAP_ID'}
                >
                    <AdvancedMarker position={ center }>

                        <span className='fire-marker'>🔥</span>

                    </AdvancedMarker>
                </Map>
            </div>
        </APIProvider>
    )
}


export default World;