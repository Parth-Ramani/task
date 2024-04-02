import { Image, StyleSheet, Text, View, FlatList, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { Coin, Swipe } from '../../assets/Svg';
import Carousel from 'react-native-reanimated-carousel';


const Screen1 = () => {

    const data = [
        { id: '1', text: 'Item 1' },
        { id: '2', text: 'Item 2' },
        { id: '3', text: 'Item 3' },
    ];

    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <Text>{item.text}</Text>
        </View>
    );


    return (
        <View style={{}}>
            <View style={styles.appbar}>
                <Image source={require('../../assets/images/avtar.png')} style={{ marginLeft: '3%', marginTop: '1%' }} />
                <Image source={require('../../assets/images/text.png')} style={{ marginRight: '3%', marginTop: '3%' }} />
                <Image source={require('../../assets/images/bar.png')} style={{ marginRight: '3%', marginTop: '3%' }} />

            </View>

            <View style={styles.container}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    horizontal
                />
            </View>
            <View style={{ backgroundColor: '#FFFBD8', height: 600 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>A product specially for you</Text>
                <View>

                </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',flex:1}}>
                <View style={styles.card}>
                    <ImageBackground borderRadius={12} source={require('../../assets/images/cover.png')} style={{ width: '97%', height: 300, marginTop: '3%', alignSelf: 'center', marginLeft: 10 }} >
                        <Image source={require('../../assets/images/coat.png')} style={{ marginRight: '3%', marginTop: '3%', height: 234, width: 200, alignSelf: 'center' }} />

                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginLeft: 7 }}>Boys Jacket</Text>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginLeft: 75 }}> 300+</Text>
                        <Text style={{ color: 'black', fontSize: 14, marginRight: 28 }}>  kids bought it</Text>
                    </View>
                    <Text style={{ color: 'black', fontSize: 14, marginRight: 28, marginLeft: 12 }} >
                        Lorem ipsum dolor sit
                    </Text>
                    <Text style={{ color: 'black', fontSize: 14, marginRight: 28, marginLeft: 12 }}>
                        amet,consectetur ad..see more
                    </Text>

                    <View style={{ backgroundColor: '#FFECB9', height: 90, width: '100%',marginTop:'3%' }}>
                        <View>
                            <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4 }}>You have <Text style={{ fontSize: 16, fontWeight: '700' }}>200</Text> McCoins  </Text> 
                            <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4,fontWeight:'800' }}>Use McCoins to save money for your parent</Text>
                        </View>


                    </View>
                    <View style={{alignItems:'center',marginTop:'5%',width:'100%'}}>
                    <Swipe/>

                    </View>
                    
                </View>

                <View style={styles.card}>
                    <ImageBackground borderRadius={12} source={require('../../assets/images/cover.png')} style={{ width: '97%', height: 300, marginTop: '3%', alignSelf: 'center', marginLeft: 10 }} >
                        <Image source={require('../../assets/images/coat.png')} style={{ marginRight: '3%', marginTop: '3%', height: 234, width: 200, alignSelf: 'center' }} />

                    </ImageBackground>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                        <Text style={{ color: 'black', fontSize: 22, fontWeight: 'bold', marginLeft: 7 }}>Boys Jacket</Text>
                        <Text style={{ color: 'black', fontSize: 16, fontWeight: '600', marginLeft: 75 }}> 300+</Text>
                        <Text style={{ color: 'black', fontSize: 14, marginRight: 28 }}>  kids bought it</Text>
                    </View>
                    <Text style={{ color: 'black', fontSize: 14, marginRight: 28, marginLeft: 12 }} >
                        Lorem ipsum dolor sit
                    </Text>
                    <Text style={{ color: 'black', fontSize: 14, marginRight: 28, marginLeft: 12 }}>
                        amet,consectetur ad..see more
                    </Text>

                    <View style={{ backgroundColor: '#FFECB9', height: 90, width: '100%',marginTop:'3%' }}>
                        <View>
                            <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4 }}>You have <Text style={{ fontSize: 16, fontWeight: '700' }}>200</Text> McCoins  </Text> 
                            <Text style={{ color: 'black', textAlign: 'center', paddingTop: 4,fontWeight:'800' }}>Use McCoins to save money for your parent</Text>
                        </View>


                    </View>
                    <View style={{alignItems:'center',marginTop:'5%',width:'100%'}}>
                    <Swipe/>

                    </View>
                    
                </View>
              
            </View>
            </View>

        </View>
    )
}

export default Screen1

const styles = StyleSheet.create({
    appbar: {
        backgroundColor: '#58CBF5', height: 50, width: '100%', flexDirection: 'row', justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: 'green',
    },
    item: {
        backgroundColor: 'blue',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        width: 150,
        height: 90
    },
    card: {
        height: 590,
        width: '90%', backgroundColor: '#fff', alignSelf: 'center', borderRadius: 12, marginTop: '2%'
    }
})