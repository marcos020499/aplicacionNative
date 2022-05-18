import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import Modal from 'react-native-modal'
import ModalImage from '../../assets/modal.png'
import Products from '../../assets/products.png'
import Contact from '../../assets/contact.png'
import Invite from '../../assets/invite.png'
import Bottom from '../../assets/bottom.png'

const Menu = ({visible, setVisible}) => {
    const [selected, setSelected] = React.useState("")
  return (
    <Modal
    animationInTiming={10}
    swipeDirection="down"
    onSwipeComplete={()=>setVisible(false)}
    onSwipeCancel={()=>setVisible(false)}
    animationOutTiming={10}   
    animationType='slide'
    visible={visible}
    // style={styles.containerModal}
    >
        <View style={styles.containerModal}>
            <Image style={styles.image} source={ModalImage}></Image>
                <View>
                    <View style={styles.containerNameMenu}>
                        <Text style={styles.textMenu}>MENÚ</Text>
                        <TouchableOpacity onPress={()=>setVisible(false)}>
                            <Image style={styles.imageBottom} source={Bottom}></Image>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={styles.containerButtonMenu}>
                        <TouchableOpacity onPress={() => setSelected("Productos")}>
                            <Image style={styles.imageProducts} source={Products}></Image>
                            <Text style={selected === 'Productos' ? styles.textButtonSelected : styles.textButton}>Productos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected("Contactos")}>
                            <Image style={styles.imageContact} source={Contact}></Image>
                            <Text style={selected === 'Contactos' ? styles.textButtonSelected : styles.textButton}>Contactos</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setSelected("Invitar")}>
                            <Image style={styles.imageInvite} source={Invite}></Image>
                            <Text style={selected === 'Invitar' ? styles.textButtonSelected : styles.textButton}>Invitar</Text>
                        </TouchableOpacity>                        
                        
                    </View> 
                </View>
                <View>
                    <View style={styles.containetTitleDetails}>
                        <Text style={styles.textDetalles}>DETALLES</Text>
                    </View>
                    <View >
                        <View style={styles.containerDetails}>
                            <View style={styles.detail}></View>
                            <View style={styles.detail}></View>
                        </View>
                        <View style={styles.containerDetails}>
                            <View style={styles.detail}></View>
                            <View style={styles.detail}></View>
                        </View>
                        <View style={styles.containerDetails}>
                            <View style={styles.detail}></View>
                            <View style={styles.detail}></View>
                        </View>
                    </View>
                </View>
        </View>
    </Modal>
  )
}

export default Menu


const styles = StyleSheet.create({
    containerModal:{
        height: '77%',
        backgroundColor: '#232A2F',
        margin: 20,
        borderRadius: 24,
        paddingHorizontal: 28,
    },  
    image:{
        position: 'relative',
        bottom: 132,
        width: 114,
        height: 152,
        alignSelf: 'center',
    },
    imageBottom:{
        width:13,
        height:20,
    },
    containerNameMenu:{
        position: 'relative',
        bottom: 110,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    }, 
    textMenu:{
        position: 'relative',
        right: '32%',
        fontSize: 13,
        color: '#FFFF',
        fontWeight: 'bold',
        letterSpacing: 6,
    },
    textDetalles:{
        alignSelf: 'center',
        fontSize: 13,
        color: '#FFFF',
        fontWeight: 'bold',
        letterSpacing: 6,
    },
    containerButtonMenu:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        bottom: 75,
    },
    imageProducts:{
        width: 71,
        height: 44,
    },
    imageContact:{
        width: 71,
        height: 44,
    },
    imageInvite:{
        width: 71,
        height: 44,
    },
    textButton:{
        marginTop: 6,
        color: '#FFFF',
        textAlign:'center',
    },
    textButtonSelected:{
        marginTop: 6,
        color: '#FF7C66',
        textAlign:'center',
    },
    containetTitleDetails:{
        position: 'relative',
        bottom: 20,
    },
    detail:{
        width: '45%',
        height: 74,
        borderColor: '#959494',
        borderWidth: 1,
        borderRadius: 15,
    },
    containerDetails:{
        marginTop: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})