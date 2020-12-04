import React, { useState, useEffect } from 'react'
import Dialog, { DialogButton, DialogContent, DialogFooter, SlideAnimation } from 'react-native-popup-dialog';
import { StyleSheet, View, Modal, TouchableNativeFeedback } from 'react-native'
import TextComponent from './TextComponent';
const AlertComponent = (props) => {
     const [showAlert, setShowAlert] = useState(true)
     //console.log(props.navigation)

     return (
          <View style={{ flex: 1, justifyContent: 'space-between', position: 'absolute' }}>
               <Modal
                    animationType="fade"
                    transparent={true}
                    visible={showAlert}

               >

                    <View style={styles.Modal} >
                         <View>
                              <View style={{ alignItems: 'center' }}>
                                   <TextComponent style={{
                                        fontSize: 17,
                                        fontFamily: 'Roboto-Light'
                                   }}>

                                        Almost Done!.

                              </TextComponent>
                              </View>


                              <TextComponent style={{
                                   marginTop: 10,
                                   fontSize: 17, fontFamily: 'Roboto-Light'
                              }}>

                                   Do you want to exit?
                              </TextComponent>

                         </View>
                         <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', }}>
                              <TouchableNativeFeedback onPress={() => {
                                   props.onPop()

                                   props.onCancelClick()
                                   setShowAlert(false)

                              }
                              }>
                                   <View style={{
                                        width: '49%',
                                        justifyContent: 'center',
                                        padding: 10,
                                        borderRadius: 5,
                                        alignItems: 'center',
                                        backgroundColor: 'rgba(66, 133, 244,1)'
                                   }}>


                                        <TextComponent color="white"
                                             style={{ fontFamily: 'Roboto-Light' }}
                                        >CANCEL</TextComponent>

                                   </View>
                              </TouchableNativeFeedback>
                              <TouchableNativeFeedback
                                   onPress={() => {
                                        props.onPop()
                                        props.onOkClick()
                                        setShowAlert(false)


                                   }}
                              >
                                   <View style={{
                                        borderRadius: 5,

                                        backgroundColor: 'rgba(66, 133, 244,1)'
                                        , width: '49%', alignItems: 'center', justifyContent: 'center'
                                   }}>

                                        <TextComponent
                                             color="white"
                                             style={{ fontFamily: 'Roboto-Light' }}

                                        >Ok</TextComponent>

                                   </View>
                              </TouchableNativeFeedback>


                         </View>

                    </View>


               </Modal>

          </View>

     )
}

export default AlertComponent

const styles = StyleSheet.create({
     Modal: {
          width: '80%',
          height: 180,
          borderColor: '#fff',
          borderWidth: 1,
          borderRadius: 5,
          backgroundColor: 'white',
          elevation: 25,
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: 20,
          position: 'absolute',
          top: '40%',
          left: '10%'
     }
})
