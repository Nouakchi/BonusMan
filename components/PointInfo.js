import React from 'react';
import {
  View, Text,  TouchableOpacity,Image, ScrollView,
} from 'react-native';


export default function PointInfo(props) {
  return (
    <TouchableOpacity >
      <View style={{
      borderRadius:30,
      borderWidth:1,
      padding:2,
      backgroundColor:'#C4C4C499'
    }}>
          <View style={{
            alignItems:'center',
            borderWidth:3,
            borderColor:'pink',
            backgroundColor:'white',
            padding:10,
            borderRadius:30
          }}>
                <Text style={{
                fontSize:15,
                fontWeight:'bold',
              }}>{props.data.full_name}</Text>
              <Text style={{
                fontSize:12,
              }}>{props.data.n_contact}</Text>
              <Text style={{
                fontSize:12,
              }}>{props.data.type}</Text>
              </View>
    </View>
</TouchableOpacity>
  );
}
