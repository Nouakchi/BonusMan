import { View, Text,Image,ScrollView } from 'react-native';
import React , {useEffect, useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import axios from '../axios';
export default function PointDetails(props) {
  const [products,setProducts] = useState([{}]);
  useEffect(() => {
    const getProd = async ()=>{
      await axios.get('/product').then(res => {
        setProducts(res.data);
      });
    }
    getProd();
  }, [])
  return (
    <LinearGradient
        colors={['#a87bab','#41405e']}
        style={{
          flex:1,
          alignItems:'center',
          borderWidth:1,
          borderColor:'pink',
          backgroundColor:'white',
          padding:10,
          borderRadius:30,
        }}>
          <Text style={{color:'white'}}>{props.data.region}{'/'}{props.data.province}</Text>
          <Text style={{color:'white'}}>{props.data.commune}</Text>
          <Text style={{color:'white'}}>{props.data.address}</Text>
          <Text style={{
            fontSize:10
          }}>{props.data.latitude}{props.data.longitude}</Text>
          <Text style={{
            marginTop:5,
            color:'white'
          }}>Liste des Produits:</Text>
          <ScrollView style={{
            flex:1,
            width:'100%'
          }}>
            {
              products.map((data,index)=>(
                <View
                key={index}
                style={{
                  marginRight:5,
                  padding:5,
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                  flex:1
                }}>
                  <View style={{flex:1}}>
                    <Image
                  style={{
                  width: '100%',
                  height: 200,
                  borderWidth:1,
                  borderColor:'pink',
                  borderRadius:50,
                }}
                source={{
                  uri: data.ImageUrl,
                }}
                />
                  </View>
                </View>
              ))
            }
          </ScrollView>
          </LinearGradient>
  );
}
