import React from 'react';
import { View, ScrollView, StyleSheet, Text, ImageBackground, Image, Button, TouchableOpacity } from 'react-native';
import Screen1 from './Screen1';
import { Swipe } from '../../assets/Svg';
import { useState } from 'react';
const Screen2 = () => {

    const [imageSource, setImageSource] = useState(require('../../assets/images/textt.png'));
    const [isDefaultImage, setIsDefaultImage] = useState(true);

    const toggleImage = () => {
        if (isDefaultImage) {
          setImageSource(require('../../assets/images/frame.png'));
        } else {
          setImageSource(require('../../assets/images/textt.png'));
        }
        setIsDefaultImage(!isDefaultImage);
      };
    ;
    ///////////////////////////

    const maxValue = 10000;
    const [value, setValue] = useState("0000");

    const incrementValue = () => {
        const newValue = parseInt(value) + 100;
        if (newValue <= maxValue) {
            setValue(String(newValue).padStart(4, "0"));
        }
    };

    const decrementValue = () => {
        const newValue = parseInt(value) - 100;
        if (newValue >= 0) {
            setValue(String(newValue).padStart(4, "0"));
        }
    };




    return (
        <View>

            <View style={styles.card}>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '800' }}>
                    Product is added to cart
                </Text>
                <Text style={{ textAlign: 'center', color: 'black', fontWeight: '800' }}>Ask your parents to check it while ordering.</Text>
                <ImageBackground borderRadius={12} source={require('../../assets/images/label.png')} style={{ height: 190, width: '100%', marginTop: '6%' }}>
                    <Text style={{ marginLeft: '39%', fontSize: 22, fontWeight: '900', marginTop: '9%' }} >{value}</Text>

                    <View style={{ marginTop: '10%', justifyContent: 'space-around', flexDirection: 'row', marginBottom: '3%' }}>
                        <TouchableOpacity onPress={incrementValue} ><Image source={require('../../assets/images/add.png')} style={{ marginLeft: '42%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleImage} style={{}}><Image source={require('../../assets/images/go.png')} style={{ marginRight: '12%' }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={decrementValue} style={{}}><Image source={require('../../assets/images/sub.png')} style={{ marginRight: '22%', marginBottom: '12%' }} />
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
                <View style={{ backgroundColor: '#2C9FED', height: 190 }}>

                    <ImageBackground   source={imageSource} style={{ height: 170, width: 270, marginTop: '3%', marginLeft: '9%' }}>
                        <Image source={require('../../assets/images/go.png')} style={{ marginTop: '50%', marginLeft: '27%' }} />
                    </ImageBackground>

                </View>

 
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 10, backgroundColor: 'green', width: '100%'
    },
    item: {
        backgroundColor: 'skyblue',
        margin: 5,
        padding: 10,
        width: 98
    },
    card: {
        height: 590,
        width: '90%', backgroundColor: '#fff', alignSelf: 'center', borderRadius: 12, marginTop: '2%'
    }
});

export default Screen2;
