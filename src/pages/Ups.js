import React from 'react'
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity} from 'react-native'
import Container from '../components/Container'
import GlobalStyle from '../components/GlobalStyle'
const Ups = ()=>{
    return (
        <Container>
            <View style={styles.container}>
            <Text style={[
                styles.textTitle,
                GlobalStyle.bold
            ]}>¡ups!</Text>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={require('../../assets/Group80.png')}/>
            </View>
            <Text style={styles.overview}>estaremos trabajando en esto a la brevedad</Text>
            <TouchableOpacity style={styles.button}>
                <Image style={styles.imageButton} source={require('../../assets/Vector-8.png')}/>
                <Text style={[styles.text, GlobalStyle.extraBold]}>REGRESAR</Text>
            </TouchableOpacity>
            </View>
        </Container>

    )
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'center'
    },
    textTitle: {
        marginTop: Platform.OS == 'ios' ? '40%': '30%',
        fontSize: 50,
        textAlign: 'center'
    },
    image: {
        height: 199,
        width: 148
    },
    imageContainer: {
        marginTop: '20%',
        display: 'flex',
        alignSelf: 'center'
    },
    button: {
        width:324,
        height: 98,
        backgroundColor: '#232A2F',
        borderWidth: 2,
        borderRadius: 25,
        marginTop: '35%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
alignContent: 'center'
    },
    text: {
        fontSize: 13,
        color: 'white',
        letterSpacing: 4,
        textAlign: 'center'
    },
    imageButton: {
        width: 14,
        height: 10,
        marginRight: 5
    },
    overview:{
        marginTop: Platform.OS == 'ios' ? '20%': '10%',
        fontSize: 20,
        textAlign: 'center'
    }
})
export default Ups