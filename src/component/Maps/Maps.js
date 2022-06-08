import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'

const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
}

export class Maps extends Component {
    render() {
        return (
            <div>
                <Map google={window.google}
                zoom={10}
                initialCenter={{
                lat: 38.805915,
                lng: -89.969537
                }}
                >
                    <Marker />
                </Map>
            </div>
        );
    }
    
}

// export default GoogleApiWrapper({apiKey: ("AIzaSyDL6BZcb0iaAFuJEob4CHtc9bfQbWHNfsA")})(Maps);

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDL6BZcb0iaAFuJEob4CHtc9bfQbWHNfsA")
   })(Maps);