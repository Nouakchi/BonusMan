import React from 'react';
import Mapview from 'react-native-maps';
import MapCallout from './MapCallout';

export default function MapMarker(props) {
  return (
    <Mapview.Marker
          key={props.index}
          coordinate={{latitude:parseFloat(props.data.latitude),longitude:parseFloat(props.data.longitude)}}
          title={props.data.full_name}
          description={props.data.n_contact}
          image={require('../assets/shop_.png')}
          onPress={()=>{
            props._map.current.animateCamera({
              center: {latitude:parseFloat(props.data.latitude),longitude:parseFloat(props.data.longitude)},
              heading: 0,
              pitch: 90,
              zoom:18,
            })
          }}
          >
                <MapCallout 
                  setPointDetails={props.setPointDetails}
                  data={props.data}
                  setDestination={props.setDestination}
                  setModalVisible={props.setModalVisible}
                />
          </Mapview.Marker>
  );
}
