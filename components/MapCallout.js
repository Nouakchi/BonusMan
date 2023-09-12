import React from 'react';
import Mapview from 'react-native-maps';
import PointInfo from './PointInfo';
import { Alert } from 'react-native';

export default function MapCallout(props) {
  return (
    <Mapview.Callout tooltip onPress= {()=>{
      if(props.data._id != undefined){
        props.setDestination({latitude:parseFloat(props.data.latitude),longitude:parseFloat(props.data.longitude)});
        props.setModalVisible(true);
        props.setPointDetails(props.data);
      }
        else{
          Alert.alert(
          "يتم التحقق من بايانات هذا المحل المرجو العودة لاحقا",
          );
        }
        }}>
        <PointInfo 
            data={props.data}
        />
      </Mapview.Callout>
  );
}
