import React, {useEffect} from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Logo from '../../assets/EON-logoblack2.png'
import GlobalStyle from '../components/GlobalStyle'
import MenuBar from '../components/MenuBar/MenuBar'

const Welcome = ({navigation, route}) => {
    if( navigation.isFocused()){

            setTimeout(() => {
              navigation.navigate('signOut')
            }, 2000);

    }
    else{

    }
  return (
    <View style={styles.container}>
        <View style={styles.containerSecond}>
            <Image style={styles.image} source={Logo}></Image>
            <Text style={[
                styles.name,
                GlobalStyle.globalStyle
            ]}>
                Hola, George
            </Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FF7C66',
        height: '100%',
    },

    containerSecond: {
        // backgroundColor: '#FFFFFF',
        marginTop: 263,
        alignItems: 'center',
        textAlign: 'center',
        alignSelf: 'center',
        width: 191,

    },

    name:{
        marginTop: 35,
        fontSize: 50,
        justifyContent: 'center',
        color: '#232A30',
        textAlign: 'center'
    },

    image: {
        width: 96,
        height: 40,
    }
})

export default Welcome
