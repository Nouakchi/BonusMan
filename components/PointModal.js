import React from 'react';
import {  View, TouchableOpacity, Modal, SafeAreaView,Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import PointDetails from './PointDetails';

export default function PointModal(props) {
  

  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => {
          props.setModalVisible(!props.modalVisible);
        }}
        style={{
          padding: 24,
          flex: 1,
      }}
      >
        <SafeAreaView style={{
          flex:1,
          flexDirection:'column-reverse',
        }}>
        <PointDetails 
            data={props.pointDetails}
          />
          <View style={{
          flexDirection:'row',
          justifyContent:'space-evenly',
          margin:10,
          borderWidth:1,
          padding:10,
          borderRadius:50,
          backgroundColor:'#eeeeee99',
          borderColor:'pink'
        }}>
        <TouchableOpacity style={{
            padding:20,
            borderRadius:30,
            backgroundColor:'#fe8d8a',
            shadowOffset:{
              width:0,
              height:2
            },
            shadowRadius:2.62,
            shadowOpacity:1,
            shadowColor:'#fe8d8a',
            marginBottom:5
          }}
            onPress={()=>{
              props.setModalVisible(!props.modalVisible);
              url = "https://www.google.com/maps/dir/?api=1&"
                    +"origin="+props.origin.latitude.toString()+"/"+props.origin.longitude.toString()+"&"
                    +"destination="+props.destination.latitude.toString()+"/"+props.destination.longitude.toString()+"&"
                    +"travelmode=car"
              Linking.canOpenURL(url).then((supported) => {
                if (supported) {
                  Linking.openURL(url);
                } else {
                  logger.error("Don't know how to open URI: " + url);
                }
              });
            }
            }
            >
              <FontAwesome5 name="route" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{
            padding:20,
            borderRadius:30,
            backgroundColor:'#fb9121',
            shadowOffset:{
              width:0,
              height:2
            },
            shadowRadius:2.62,
            shadowOpacity:1,
            shadowColor:'#fb9121',
            marginBottom:5
          }}
            onPress={()=>{
              props.setModalVisible(!props.modalVisible);
              props.navigation.navigate('orders',{
                dataOrd:props.pointDetails
              })
            }}
            >
            <MaterialIcons name="add-shopping-cart" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={{
            padding:20,
            borderRadius:30,
            backgroundColor:'#f5482d',
            shadowOffset:{
              width:0,
              height:2
            },
            shadowRadius:2.62,
            shadowOpacity:1,
            shadowColor:'#f5482d',
            marginBottom:5
          }}
            onPress={()=>{
              props.setModalVisible(!props.modalVisible);
            }}
            >
              <MaterialIcons name="cancel" size={24} color="black" />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
      </Modal>
  );
}
