import { View, Text, Modal, TouchableOpacity, SafeAreaView, ScrollView,Alert } from 'react-native'
import React, {useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import axios from '../axios'
export default function BillModal(props) {
    var total = 0;
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    //const [data,setData] = useState((typeof(props.data) != undefined)? props.data : []);
  return (
      <Modal
        visible={props.billModalVisibile}
        animationType='slide'
        >
          <SafeAreaView style={{
              flex:1,
          }}>
              <View style={{
                  flex:2
              }}>
                  <Text style={{fontWeight:'bold',fontSize:20,textAlign:'center'}}>FACTURE</Text>
                  <Text style={{textAlign:'center',margin:5}}>
                      EPICIER {props.info.id} {'\n'} {props.info.adresse} {'\n'} Tel :{props.info.n_contact}
                      </Text>
                  <View style={{
                      flexDirection:'row',
                      justifyContent:'space-around'
                  }}>
                     <Text>CLIENT: {props.info.full_name}</Text> 
                     <View>
                     <Text>DATE: {date}</Text>
                     <Text>TIME: {time}</Text>
                     </View>
                  </View>
                  <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginEnd:20,
                        marginStart:20,
                        marginTop:5
                        }}
                    />
                    <View style={{
                                marginStart:20,
                                marginEnd:20
                            }}>
                  <View style={{
                      flexDirection:'row',
                      justifyContent:'space-between',
                      margin:5
                  }}>
                      <View style={{flex:1,}}>
                        <Text style={{fontWeight:'bold'}}>QTY</Text>
                      </View>
                      <View style={{flex:2,}}>
                        <Text style={{fontWeight:'bold'}}>DESCRIPTION</Text>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{fontWeight:'bold'}}>PRIX</Text>
                      </View>
                      <View style={{flex:1,alignItems:'flex-end'}}>
                        <Text style={{fontWeight:'bold'}}>TOTAL</Text>
                      </View>
                  </View>
                  </View>
                  <ScrollView >
                  {
                      props.data.map((data,index)=>{
                          var totalPerUnit = parseInt(data.qte) * parseFloat(data.product.price);
                          total += totalPerUnit;
                          return(
                            <View key={index} style={{
                                marginStart:20,
                                marginEnd:20
                            }}>
                               <View  style={{
                                flexDirection:'row',
                                justifyContent:'space-between',
                                margin:5
                            }}>
                                <View style={{flex:1}}>
                                    <Text >{data.qte}</Text>
                                </View>
                                <View style={{flex:2}}>
                                   <Text >{data.product.prodName}</Text> 
                                </View>
                                <View style={{flex:1,alignItems:'flex-end'}}>
                                    <Text >{data.product.price} Dh</Text>
                                </View>
                                <View style={{flex:1,alignItems:'flex-end'}}>
                                   <Text >{totalPerUnit} Dh</Text> 
                                </View>
                            </View> 
                            </View>
                        )
                      })
                  }
              </ScrollView>
              </View>
              <View >
              <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginEnd:20,
                        marginStart:20,
                        marginTop:10
                        }}
                    />
                    <View
                    style={{
                        borderBottomColor: 'black',
                        borderBottomWidth: 1,
                        marginEnd:20,
                        marginStart:20,
                        marginTop:5
                        }}
                    />
                    <View style={{
                        flexDirection:'row',
                        justifyContent:'space-between',
                        margin:20
                    }}>
                        <Text style={{fontSize:30}}>Total</Text>
                        <Text style={{fontSize:30}}>{(total * 0.8).toFixed(2)} DH</Text>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        alignSelf:'center'
                        }}>
                        <TouchableOpacity 
              onPress={()=>{
                Alert.alert(
                    "تأكيد الطلب",
                    "هل تريد حقًا تأكيد الطلب",
                    [
                      {
                        text: "إلغاء",
                        onPress: () => {

                        },
                        style: "cancel"
                      },
                      { text: "نعم", onPress:async () => {
                          console.log(props.data);
                        await axios.post('/archive',props.data);
                        //props.setData([]);
                        props.setBillModalVisibile(!props.billModalVisibile);
                      }}
                    ]
                  );
                }}
              style={{
                  alignItems:'center',
                  marginRight:20
              }}
              >
                <MaterialIcons name="confirmation-num" size={24} color="black" />
                <Text>Confirmer</Text>
              </TouchableOpacity>
              <TouchableOpacity 
              onPress={()=>props.setBillModalVisibile(!props.billModalVisibile)}
              style={{
                  alignItems:'center'
              }}
              >
                <MaterialIcons name="cancel" size={24} color="black" />
                <Text>Annuler</Text>
              </TouchableOpacity>
                    </View>
              
              </View>
        </SafeAreaView> 
      </Modal>
  )
}