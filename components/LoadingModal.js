import { Text, Modal,SafeAreaView  } from 'react-native'
import React , {useEffect} from 'react'
import LottieView from "lottie-react-native";
export default function LoadingModal(props) {
    useEffect(() => {
        props.setVisible((props.data.length > 1) ? false : true);
      },[props.data]);
    return (
        <Modal 
       transparent={true}
        visible={props.visible}
        onRequestClose={() => {
        }}
        style={{
        padding: 24,
        flex: 1,
      }}>
          <SafeAreaView style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'#eeeeee99'
            }}>
            <LottieView
                source={require("../assets/pin-on-map.json")}
                style={{
                    width: 300,
                    height: 300,
                  }}
                autoPlay
            />
            <Text>تحميل البيانات ...</Text>
          </SafeAreaView>
      </Modal>
    )
  }