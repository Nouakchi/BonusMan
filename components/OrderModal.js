import { View, Text, Modal, SafeAreaView,ScrollView,Image, TouchableOpacity, TextInput } from 'react-native';
import React, {  useState,useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import axios from '../axios';

export default function OrderModal(props) {
  const [prod,setProd] = useState({});
  const [selected,setSelected] = useState(false);
  const [products,setProducts] = useState([{}]);
  useEffect(() => {
    const getProd = async ()=>{
      await axios.get('/product').then(res => {
        setProducts(res.data);
      });
    }
    getProd();
  }, [])
  const addProd = async (prod)=>{
    await axios.post('/order',prod);
  }
  const Prod = ()=>{
    return(
      <View>
        <View style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'space-between'
            }}>
              <Text>choisissez un produit :</Text>
              <TouchableOpacity style={{
                  borderWidth:1,
                  borderRadius:50,
                  padding:5,
                  backgroundColor:'white',
                  borderColor:'pink',
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                  margin:10
                }}
                onPress={()=>{
                  props.setOrderModalVisibile(false);
                }}
                >
                <MaterialIcons name="cancel" size={24} color="red" />
                </TouchableOpacity>
        </View>
        <ScrollView >
            {
              products.map((product,index)=>(
                <View
                key={index}
                style={{
                  marginRight:5,
                  padding:10,
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                }}>
                  <TouchableOpacity onPress={()=>{
                    console.log(product);
                    setProd(product);
                    setSelected(true);
                    }}>
                    <Image
                  style={{
                  width: 300,
                  height: 150,
                  borderWidth:1,
                  borderColor:'pink',
                  borderRadius:50,
                }}
                source={{
                  uri: product.ImageUrl,
                }}
                />
                  </TouchableOpacity>
                </View>
              ))
            }
          </ScrollView>
      </View>
      
    )
  }
  const SelectedProd = ()=>{
    var qty = 0;
    return(
      <View>
        <View style={{
                  flexDirection:'row',
                  padding:10,
                  width:'100%'
                }}> 
                <View style={{flexDirection:'row',flex:1}}>
                  <View style={{flex:2}}>
                  <Image
                  style={{
                  width: '100%',
                  height: 150,
                  borderColor:'pink',
                  borderRadius:10,
                }}
                source={{
                  uri: prod.ImageUrl,
                }}
                />
                  </View>
                  <View style={{flex:1}}>
                    <Text style={{textAlign:'center',margin:5,fontWeight:'bold',color:'white'}}>الكمية</Text>
                    <TextInput 
                    style={{paddingBottom:5,borderBottomWidth:1,width:'50%',alignSelf:'center',textAlign:'center'}}
                    defaultValue={'0'}
                    keyboardType='numeric'
                    onChangeText={(newText)=>{
                      qty = parseInt(newText);
                    }}
                    />
                    <View style={{
                      flexDirection:'row'
                    }}>
                      <TouchableOpacity style={{
                  borderWidth:1,
                  borderRadius:50,
                  padding:5,
                  backgroundColor:'white',
                  borderColor:'pink',
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                  margin:10
                }}
                onPress={()=>{
                  var today = new Date();
                  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                    props.setData(props.data.concat({
                      "product": {
                          "ImageUrl": prod.ImageUrl,
                          "prodName": prod.prodName,
                          "price": prod.price,
                      },
                      "qte": qty,
                      "date": date
                    }))
                    addProd({
                      product:prod._id,
                      store:props.id,
                      qte:qty,
                      date:date
                    })
                  props.setOrderModalVisibile(false);
                  setSelected(false);
                }}
                >
                <MaterialCommunityIcons name="checkbox-multiple-marked-circle-outline" size={24} color="green" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                  borderWidth:1,
                  borderRadius:50,
                  padding:5,
                  backgroundColor:'white',
                  borderColor:'pink',
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                  margin:10
                }}
                onPress={()=>{

                  var today = new Date();
                  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
                  props.setData(props.data.concat({
                    "product": {
                        "ImageUrl": prod.ImageUrl,
                        "prodName": prod.prodName,
                        "price": prod.price,
                    },
                    "qte": qty,
                    "date": date
                  }))
                  addProd({
                    product:prod._id,
                    store:props.id,
                    qte:qty,
                    date:date
                  })
                  setSelected(false);
                }}>
                  <MaterialIcons name="add-task" size={24} color="#E96B15" />
                </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={{
                  borderWidth:1,
                  borderRadius:50,
                  padding:5,
                  backgroundColor:'white',
                  borderColor:'pink',
                  shadowOffset:{
                    width:0,
                    height:2
                  },
                  shadowRadius:2.62,
                  shadowOpacity:0.23,
                  alignSelf:'flex-end',
                  margin:5,
                  alignSelf:'center'
                }}
                onPress={()=>{
                  props.setOrderModalVisibile(false);
                  setSelected(false);
                }}
                >
                <MaterialIcons name="cancel" size={24} color="red" />
                </TouchableOpacity>
                  </View>
                </View>
      </View>
      </View>
     
    )
  }
  return (
    <Modal 
    transparent
    visible={props.orderModalVisibile}
    animationType="fade"
    >
        <SafeAreaView style={{
            flex:1,
            alignContent:'center',
            justifyContent:'center',
            margin:10,
            backgroundColor:'#DCDCDF90'
        }}>
            <View style={{
              alignItems:'center',
              backgroundColor:'#CCCCFF',
              padding:10,
              borderRadius:50,
              shadowOffset:{
                width:0,
                height:2
              },
              shadowRadius:2.62,
              shadowOpacity:0.23
            }}>
              {
                selected?
                <SelectedProd />:
                <Prod />
              }
            </View>
        </SafeAreaView>
    </Modal>
  );
}
