import { View, Text, SafeAreaView, ScrollView,TouchableOpacity,Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
import { MaterialIcons } from '@expo/vector-icons';
import OrderModal from '../components/OrderModal';
import BillModal from '../components/BillModal';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from '../axios';

export default function Orders(props) {
  const [ords,setOrds] = useState([]);
  useEffect(()=>{
    const fetchData = async ()=>{
      await axios.get("order/" + props.route.params.dataOrd._id)
      .then(res =>{
        setOrds(res.data);
      }) 
    }
    fetchData();
  },[]);
  const [orderModalVisibile,setOrderModalVisibile] = useState(false);
  const [billModalVisibile,setBillModalVisibile] = useState(false);
  const OrdersComp = ({isEmpty})=>{
    if(!isEmpty){
      return(
        <View style={{
          flexDirection:'row',
          flex:1,
          justifyContent:'center',
          alignItems:'center'
        }}>
          <Text>لائحة الطلبات فارغة</Text>
          <MaterialCommunityIcons name="notification-clear-all" size={24} color="black" />
        </View>
        
      )
    }
    return(
      <ScrollView >
            {
              ords.map((dataOrd,index)=>(
            <Product 
              key={index}
              data={dataOrd}
              index={index}
              />
          ))
            }
          </ScrollView>
    )
  }
  return (
    <SafeAreaView style={{
      backgroundColor:'#f6f9f9',
      flex:1
    }}>
      <OrdersComp isEmpty={ords.length > 0} />
      <View style={{
        position:'absolute',
        bottom:10,
        right:10
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
      onPress={()=>setOrderModalVisibile(true)}
      >
        <MaterialIcons name="add-shopping-cart" size={24} color="white" />
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
          (ords.length != 0) ?
          setBillModalVisibile(true):
          Alert.alert(
            "لائحة الطلبات فارغة",
          );
        }}
      >
        <MaterialIcons name="confirmation-num" size={24} color="white" />
      </TouchableOpacity>
      </View>
      <OrderModal 
      orderModalVisibile={orderModalVisibile} 
      setOrderModalVisibile={setOrderModalVisibile}
      data={ords}
      setData={setOrds}
      id={props.route.params.dataOrd._id}
      />
      <BillModal 
        billModalVisibile={billModalVisibile}
        setBillModalVisibile={setBillModalVisibile}
        data={ords}
        setData={setOrds}
        info={props.route.params.dataOrd}
      />
    </SafeAreaView>
  );
}
