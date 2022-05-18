import {View, Text, TouchableOpacity, Image, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import Vector from '../../assets/Vector-9.png'
import Captura from '../../assets/Captura-de-Pantalla.png'
import QR from '../../assets/Group92.png'
import GlobalStyle from '../components/GlobalStyle'
const ShareQR =()=>{
    return (
        <View>
            <View style={styles.containerShare}>
                <TouchableOpacity style={styles.share}>
                    <Image source={Vector}/>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image source={Captura}/>
                <Text style={[styles.title, GlobalStyle.globalStyle]}>George Goodman</Text>
                <ScrollView>
                    <ScrollView horizontal>
                        <View style={styles.scrollViewer}>
                            <Image source={QR}/>
                            <Text style={[styles.overview, GlobalStyle.globalStyle]}>TIME PIER TO PIER</Text>
                        </View>
                        <View style={styles.scrollViewer}>
                            <Image source={QR}/>
                            <Text style={[styles.overview, GlobalStyle.globalStyle]}>MULTIPLICADOR</Text>
                        </View>
                        <View style={styles.scrollViewer}>
                            <Image source={QR}/>
                            <Text style={[styles.overview, GlobalStyle.globalStyle]}>OTHER</Text>
                        </View>
                    </ScrollView>
                </ScrollView>
                <Text style={[styles.overviewD, GlobalStyle.globalStyle]}>Tu código QR es privado. Si lo compartes con alguien, esa persona podría escanearlo con la camara de su celular para agregar nuevos contactos a tu experiencia EON</Text>
                <TouchableOpacity style={styles.touch}>
                    <Text style={[styles.textButton, GlobalStyle.extraBold]}>COMPARTE</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ShareQR

const styles = StyleSheet.create({
    containerShare:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        width: '90%'
    },
    share:{
        marginTop: '10%'
    },
    container:{
        display: 'flex',
        marginTop: '15%',
        paddingHorizontal: '13%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        marginTop: '8%',
        textAlign: 'center'
    },
    textButton: {
        color: '#FF7C66',
        textAlign: 'center',
        top: '35%'
    },
    scrollViewer:{
        marginTop: '12%',
        paddingHorizontal: 13
    },
    overview:{
        fontSize: 12,
        textAlign: 'center'
    },
    overviewD:{
        fontSize: 12,
        textAlign: 'center',
        marginTop: '15%'
    },
    touch:{
        backgroundColor: 'black',
        marginTop: '15%',
        width: 248,
        height: 74,
        borderRadius: 25,
        display: 'flex',
    }
})