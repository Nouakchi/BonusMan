import { View, Text,Image, TouchableOpacity,StyleSheet, Modal, TextInput } from 'react-native';
import React, { useState } from 'react';
import axios from '../axios';

export default function Product(props) {
  const [initialOrder,setInitial] = useState(props.data.qte);
  const updateData = async (data)=>{
    await axios.post('order/update',data);
  }
  return (
    <View style={{
      backgroundColor:'white',
      borderRadius:30,
      margin:10,
      padding:10,
      flexDirection:'row',
      justifyContent:'space-between',
      shadowOffset:{
        width:0,
        height:2
      },
      shadowRadius:2.62,
      shadowOpacity:1,
      }}>
      <View style={{
        flex:1,
      }}>
        <View >
          <Image
        style={{
        width: '100%',
        height: 175,
        borderRadius:50,
        }}
        source={{
            uri: props.data.product.ImageUrl,
        }}
    />
        </View>
        <View style={{
          flex:1,
        }}>
        <View style={{flexDirection:'row',flex:1,justifyContent:'space-evenly'}}>
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
          <Text>الكمية</Text>
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity style={{
              marginEnd:5,
              backgroundColor:'#ccd2d2',
              borderWidth:1,
              borderRadius:10,
              padding:5
            }}
            onPress={()=>{
              if(initialOrder > 1){
                setInitial(initialOrder - 1);
              props.data.qte = initialOrder - 1;
              //orders.filter(itemInArray => itemInArray.id === props.id)[0].data.qte = initialOrder - 1;
              updateData(props.data);
              }
              
            }}
            >
              <Text>-</Text>
            </TouchableOpacity>
            <TextInput
        style={{
        borderBottomWidth:1,
        paddingStart:10,
        paddingEnd:10,
        borderColor:'black',
        paddingBottom:1,
        marginStart:5,
        alignSelf:'center'
      }}
        onChangeText={(newText) => {
          if(parseInt(newText) > 1){
          setInitial(parseInt(newText));
          props.data.qte = parseInt(newText);
          //orders.filter(itemInArray => itemInArray.id === props.id)[0].data.qte = parseInt(newText);
          updateData(props.data);
          }else{
            setInitial(1);
            props.data.qte = 1;
            //orders.filter(itemInArray => itemInArray.id === props.id)[0].data.qte = parseInt(newText);
            updateData(props.data);
          }
          }}
        defaultValue={String(initialOrder)}
        keyboardType="numeric"
      />
            <TouchableOpacity style={{
              marginStart:5,
              backgroundColor:'#ccd2d2',
              borderWidth:1,
              borderRadius:10,
              padding:5
            }}
            onPress={()=>{
              setInitial(initialOrder + 1);
              props.data.qte = initialOrder + 1;
              //orders.filter(itemInArray => itemInArray.id === props.id)[0].data.qte = initialOrder + 1;
              updateData(props.data);
            }}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex:1,alignItems:'center'}}>
            <Text style={{fontSize:20,marginBottom:5 , fontWeight:'bold',textAlign:'center'}}>{props.data.product.prodName}</Text>
            <View style={{flexDirection:'row' ,alignItems:'center'}}>
            <Text style={{margin:5}}>{props.data.product.price} DH</Text>
            <Text style={{color:'#b3bcbc'}}>{props.data.date}</Text>
            </View>
          </View>
          </View>
        </View>
    </View>
    </View>
  );
}