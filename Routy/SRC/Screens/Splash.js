/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Information');
        }, 2000);
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../Assets/xd2.jpg')}
                style={styles.image}
            />
            <Text style={styles.text}>Digitus</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    image: {
        width: 350,
        height: 150,
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SplashScreen;


