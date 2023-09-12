import React, { useState,useRef,useEffect } from 'react';
import { Platform,TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView, View, Text,Modal } from 'react-native';
import MapView from '../components/MapView';
import NewPointModal from '../components/NewPointModal';
import PointModal from '../components/PointModal';


export default function Map(props) {
  
  const [pointDetails,setPointDetails] = useState({});
  const [origin,setOrigin] = useState(null);
  const [destination,setDestination] = useState(null);
  const _map = useRef(null);
  const [modalVisible,setModalVisible] = useState(false);
  const [newPointModalVisible,setNewPointModalVisible] = useState(false);
  const [newCordinates,setNewCordinates] = useState({latitude:0,longitude:0})
  const [data,setData] = useState([]);
  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{
          flex: 1,
          justifyContent: "space-around"
        }}>
            <MapView 
            setPointDetails={setPointDetails}
            setModalVisible={setModalVisible}
            _map={_map}
            origin={origin}
            setOrigin={setOrigin}
            destination={destination}
            setDestination={setDestination}
            newPointModalVisible={newPointModalVisible}
            setNewPointModalVisible={setNewPointModalVisible}
            setNewCordinates={setNewCordinates}
            data={data}
            setData={setData}
          />
      <PointModal 
        pointDetails={pointDetails}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        _map={_map}
        origin={origin}
        destination={destination}
        navigation={props.navigation}
        />
        <NewPointModal 
        newPointModalVisible={newPointModalVisible}
        setNewPointModalVisible={setNewPointModalVisible}
        newCordinates={newCordinates}
        setData={setData}
        data={data}
        />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}