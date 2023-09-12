import {SafeAreaView,Text, View,Image, TouchableOpacity} from 'react-native';
import React,{useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Map from './Map';
import Orders from './Orders';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';



const Stack = createNativeStackNavigator();
  const MenuComp = ({ navigation })=>{
    return(
        <LinearGradient
        colors={['#41405e', '#a87bab']}
        style={{
          flex:1,
        }}>
          <SafeAreaView style={{
        flex:1,
        justifyContent:'center',
      }}>
          <View style={{flex:1.5}}>
            <View style={{
              flex:1,
            }}>
            <Image 
              resizeMode='cover'
              source={require('../assets/bonusMan.png')}
              style={{
                width:'100%',
                height:'100%',
                shadowOffset:{
                  width:0,
                  height:2
                },
                shadowRadius:2.62,
                shadowOpacity:1,
              }}
           />
            </View>
            <View style={{height:'40%',width:'40%',position:'absolute',left:10}}>
            <Image 
              resizeMode='contain'
              source={require('../assets/LOGO_BONUS.png')}
              style={{
                width:'100%',
                height:'100%',
              }}
            />
            </View>
          </View>
          <View style={{flex:1,margin:5}}>
          <Text style={{
          width:'100%',
          fontSize:60,
          color:'white',
          marginBottom:10
        }}>BONUS خدمة</Text>
        <Text style={{
          width:'100%',
          fontSize:27,
          color:'#eeeeee90',
          textAlign:'right'
        }}>متل أكتر من 300 تاجر في الدار البيظاء يمكن ليا نربح حتى ال 10000 درهم شهريا بفضل الأتمنة المحفزة و المزايا</Text>
          </View>
          <View style={{
          flex:1,
          flexDirection:'row',
          justifyContent:'space-evenly',
          alignItems:'center'}}>
            <View>
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
          }}>
            <Entypo name="location" size={50} color="white" />
          </TouchableOpacity>
          <Text style={{textAlign:'center',color:'white'}}>حسب المنطقة</Text>
          </View>
          <View>
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
          onPress={()=>navigation.navigate('map')}>
            <MaterialCommunityIcons name="truck-fast-outline" size={50} color="white" />
          </TouchableOpacity>
          <Text style={{textAlign:'center',color:'white'}}>جولة حرة</Text>
          </View>
          <View>
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
          }}>
            <MaterialIcons name="emoji-objects" size={50} color="white" />
          </TouchableOpacity>
          <Text style={{textAlign:'center',color:'white'}}>حسب المنتجات</Text>
          </View>
          </View>
      </SafeAreaView>
        </LinearGradient>
    );
  };
  const MapComp = ({ navigation }) => {
    return(
      <Map navigation={navigation}/>
    );
  };
  const OrdersComp = ({route}) => {
    return (
      <Orders route={route}/>
    );
  };
  
export default function Homme() {
  return (
    <NavigationContainer >
      <Stack.Navigator screenOptions={{header:()=>null}}>
      <Stack.Screen name="menu" component={MenuComp} />
      <Stack.Screen name="map" component={MapComp} />
      <Stack.Screen name="orders" component={OrdersComp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

