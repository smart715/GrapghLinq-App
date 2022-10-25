import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaViewScreen } from '../Constants/SafeAreaViewScreen'
import BrowserExtensions from '../Components/BrowserExtensions';

const Daseboard = () => {
    const [first, setfirst] = useState(true);
    const [Second, setSecond] = useState(false);
    const [three, setThree] = useState(false);
    return (
        <SafeAreaViewScreen bg="#201f33" >
            <View style={{ flex: 1, backgroundColor: "#0c0a17" }}>
                <Image
                    source={require('../assets/LOGO.png')}
                    style={{
                        height: 33,
                        width: '50%',
                        alignSelf: 'center',
                        marginTop: '23%'
                    }}
                    resizeMode='contain'
                />

                <View style={{ marginTop: '8%', marginHorizontal: '3%', backgroundColor: '#201c40', alignItems: 'center', borderRadius: 16 }}>

                    <View style={{ paddingVertical: '6%' }}>
                        <Text style={{
                            fontSize: 22, fontWeight: '600', color: '#FFF', alignSelf: 'center'
                        }}>
                            Dashboard Access
                        </Text>

                        <Text style={{
                            fontSize: 12, fontWeight: '300', color: '#9088ae', marginTop: '1.5%'
                        }}>
                            Connect your wallet to access your dashboard.
                        </Text>
                    </View>

                    <View style={{ flexDirection: 'row', paddingTop: '3%', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{
                            marginRight: '0%',
                            paddingBottom: '2%',
                            borderBottomWidth: first ? 2 : null,
                            borderBottomColor: '#184bff',
                            elevation: 20,
                            shadowColor: first ? '#184bff' : '#201c40',
                            shadowOpacity: 0.2
                        }}
                            onPress={() => { setfirst(true), setSecond(false), setThree(false) }}
                        >
                            <TopButtons title="Browser Extensions" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            marginHorizontal: '3%',
                            paddingBottom: '2%',
                            borderBottomWidth: Second ? 2 : null,
                            borderBottomColor: '#184bff',
                            elevation: 20,
                            shadowColor: Second ? '#184bff' : '#201c40',
                            shadowOpacity: 0.2
                        }}
                            onPress={() => { setfirst(false), setSecond(true), setThree(false) }}
                        >
                            <TopButtons title="Wallet Direct" />
                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            marginHorizontal: '3%',
                            paddingBottom: '2%',
                            borderBottomWidth: three ? 2 : null,
                            borderBottomColor: '#184bff',
                            elevation: 20,
                            shadowColor: three ? '#184bff' : '#201c40',
                            shadowOpacity: 0.2
                        }}
                            onPress={() => { setfirst(false), setSecond(false), setThree(true) }}
                        >
                            <TopButtons title="Ledger USB" />
                        </TouchableOpacity>
                    </View>

                    {/* calling by using states */}
                    <View style={{ backgroundColor: '#110d23' , paddingTop: '6%', borderBottomLeftRadius:16, borderBottomRightRadius:16,}}>
                        {first ? <BrowserExtensions /> : null}
                    </View>

                </View>


                <Text style={{
                    fontSize: 12, fontWeight: '300', color: '#9088ae', marginTop: '6%', alignSelf: 'center'
                }}>
                    New to GraphLinq Wallet ?Learn more
                </Text>

            </View>
        </SafeAreaViewScreen>
    )
}

export default Daseboard

const TopButtons = ({ title }) => {
    return (
        <View>
            <Text style={{
                fontSize: 10, fontWeight: '400', color: '#FFF', paddingHorizontal: '3.5%'
            }}>
                {title}
            </Text>
        </View>
    )
}