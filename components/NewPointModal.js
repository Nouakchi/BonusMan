import { View, Text , Modal,Image, TextInput,TouchableOpacity, ScrollView,
    Platform,TouchableWithoutFeedback,Keyboard, KeyboardAvoidingView,  } 
from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Fontisto } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import axios from '../axios';

export default function NewPointModal(props) {

    const newShop = {
        type: "Retail",
        CA: 0,
        Segment: "",
        commune: "",
        province: "",
        region: "",
        address: "",
        longitude: props.newCordinates.longitude.toString(),
        latitude:  props.newCordinates.latitude.toString(),
        full_name: "",
        n_contact: "",
        id: -1
       };

  return (
    <Modal
    animationType="slide"
    transparent={true}
    visible={props.newPointModalVisible}
    onRequestClose={() => {
      props.setNewPointModalVisible(!props.newPointModalVisible);
    }}
    style={{
        padding: 24,
        flex: 1,
    }}
  >

    <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{flex:1}}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
    <View style={{
          flex: 1,
          flexDirection:'column-reverse'
    }}>
            <View style={{
          flex:0.60,
          backgroundColor:'white',
          marginRight:20,
          marginLeft:20,
          borderTopLeftRadius:50,
          borderTopRightRadius:50,
          padding:5
        }}>
            <ScrollView style={{
                flex:1,
                backgroundColor:'white',
                borderRadius:50
            }}>
                <LinearGradient
        colors={['#41405e', '#a87bab']}
        style={{
          flex:1,
          borderRadius:50,
        }}>
                    <View style={{
                        alignItems:'center',
                        margin:10
                    }}>
                        <Image source={require('../assets/point.png')} style={{
                        borderWidth:1,
                        borderColor:'#C4C4C4',
                        borderRadius:50,
                        padding:10,
                        backgroundColor:'white'
                        }} 
                        />
                        <Text style={{color:'white'}}>Nouveau point de vente</Text>
                    </View>
                    <View>
                    <TextInput style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    onChangeText={newText => newShop.full_name = newText}
                    placeholder='Nom Complet'
                    />
                    <TextInput style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder='N Contact'
                    onChangeText={newText => newShop.n_contact = newText}
                    />
                    <TextInput multiline style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder='Adresse'
                    onChangeText={newText => newShop.adresse = newText}
                    />
                    <TextInput  style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder='Commune'
                    onChangeText={newText => newShop.commune = newText}
                    />
                    <TextInput  style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder='Province'
                    onChangeText={newText => newShop.province = newText}
                    />
                    <TextInput  style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholderTextColor={'#C4C4C4'}
                    placeholder='Region'
                    onChangeText={newText => newShop.region = newText}
                    />
                    <TextInput  style={{
                        borderBottomWidth:1,
                        marginLeft:16,
                        marginRight:16,
                        marginBottom:10,
                        padding:10,
                        paddingLeft:20,
                        borderRadius:20,
                        color:'white',
                    }}
                    placeholder='Type'
                    placeholderTextColor={'#C4C4C4'}
                    onChangeText={newText => newShop.type = newText}
                    />
                    </View>
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-evenly',
                        padding:10,
                        margin:5,
                        width:'60%',
                        alignSelf:'center',
                        borderRadius:20,
                        backgroundColor:'#eeeeee99',
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
                        props.setData(props.data.concat(newShop));
                        axios.post('store', newShop)
                        .then((res) => {
                            console.log(res.data)
                        }).catch((error) => {
                            console.log(error)
                        });
                        props.setNewPointModalVisible(false);
                    }}
                    >
                        <Fontisto name="shopping-basket-add" size={24} color="black" />
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
                        props.setNewPointModalVisible(false);
                    }}
                    >
                        <MaterialIcons name="cancel" size={24} color="black" />
                    </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
            </View>
        </View>
            </TouchableWithoutFeedback>
            </KeyboardAvoidingView>

     </Modal>
  );
}