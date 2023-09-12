import React, { useState, useEffect, useCallback} from 'react';
import Mapview, {PROVIDER_GOOGLE } from 'react-native-maps';
import * as Location from 'expo-location';
import MapMarker from './MapMarker';
import axios from '../axios';
import { View } from 'react-native'
import LoadingModal from '../components/LoadingModal';
export default function MapView(props) {
  const [loading,setLoading] = useState(true);
        const [state, setstate] = useState({
          latitude: 31.318365030754777, 
          longitude: -6.734599622881953,
          latitudeDelta: 10,
          longitudeDelta: 10
        });
        useEffect(() => {
          _onMapReady();
        }, [_onMapReady]);
        const _onMapReady = useCallback(async () => {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== `granted`) {
          }
          const location = await Location.getCurrentPositionAsync({ "accuracy": Location.Accuracy.High });
          props.setOrigin({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          });
          await axios.get("store/position/" + JSON.stringify({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }))
          .then(res =>{
            props.setData(props.data.concat(res.data));
          }) 
          setstate({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 10,
            longitudeDelta: 10
          });
          props._map.current.animateCamera({
            center: {latitude:location.coords.latitude,longitude:location.coords.longitude},
            heading: 0,
            pitch: 50,
            zoom:16,
          })
        }, [state]);
  return (
    <View style={{flex:1}}>
    <Mapview
      ref={props._map}
      loadingEnabled={true}
      provider={PROVIDER_GOOGLE}
      initialRegion={state}
      showsIndoors={true}
      showsMyLocationButton={true}
      zoomControlEnabled={true}
      zoomEnabled={true}
      zoomTapEnabled={true}
      showsScale={true}
      showsBuildings={true}
      showsUserLocation={true}
      showsCompass={true}
      onLongPress={(e)=>{
        props.setNewCordinates(e.nativeEvent.coordinate);
        props.setNewPointModalVisible(true);
      }}
      onMapReady={_onMapReady}
      style={{flex:1}}>
      {
      props.data.map((data, index) => {
          return(
            (
              <MapMarker 
                setPointDetails={props.setPointDetails}
                key={index}
                data={data}
                _map={props._map}
                setDestination={props.setDestination}
                setModalVisible={props.setModalVisible}
              />
          )
          )
      })
      }
    </Mapview>
    <LoadingModal
          visible={loading}
          setVisible={setLoading}
          data={props.data}
        />
    </View>
  );
}
