import { View, Text, TouchableOpacity, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const Bottoms = () => {
const nav = useNavigation();
    return (
        <View>
            <View style={{ backgroundColor: '#00000030', height: '50%' }} />

            <View style={{ backgroundColor: '#FFF', height: '50%', borderTopRightRadius: 20, borderTopLeftRadius: 20 }}>
                <Image
                    source={require("../assets/MainLogo.png")}
                    style={{ borderRadius: 50, height: 65, width: 65, alignSelf: 'center', marginTop: 23 }}
                />

                <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', alignSelf: 'center' }}>
                    <FontAwesome name="lock" size={24} color="black" />
                    <Text style={{ fontSize: 14, marginLeft: 4, fontWeight: "600" }}>
                        App.GraphLinq.com
                    </Text>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 8, alignItems: 'center', alignSelf: 'center' }}>
                    <View style={{ marginTop: 2 }}>
                        <Octicons name="dot-fill" size={10} color="green" />
                    </View>
                    <Text style={{ fontSize: 10, marginLeft: 4, fontWeight: "400" }}>
                        Ethereum
                    </Text>
                </View>

                <Text style={{ fontSize: 22, fontWeight: "700", alignSelf: 'center', marginTop: "4%" }}>
                    Connect to this site?
                </Text>

                <Text style={{ fontSize: 14, fontWeight: "400", marginHorizontal: "5%", marginTop: 8, textAlign: 'center' }}>
                    By clicking connect, you allow this dapp to view your
                    public address. This is an important security step to protect your data from potential phishing risks.
                </Text>

                <View style={{
                    marginHorizontal: "4%", borderWidth: 1, borderColor: 'gray'
                    , borderRadius: 12, marginTop: 12, flexDirection: 'row',
                    paddingVertical: 12, paddingHorizontal: 14
                }}>
                    <Image
                        style={{ borderRadius: 50, height: 42, width: 42,marginLeft:5 }}
                        source={require("../assets/acc.jpg")}
                    />

                    <View style={{ marginLeft: 14 }}>
                        <Text style={{ fontSize: 14, fontWeight: "800" }}>
                            Account 1 (0x7Ce5...d745)
                        </Text>

                        <Text style={{ fontSize: 12, fontWeight: "400", marginTop: 2 }}>
                            Balance: $0 (0 ETH)
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', alignItems:'center' , justifyContent:'space-evenly', marginTop:'4%'}}>
                    <TouchableOpacity>
                        <View style={{padding:8, borderRadius:45, borderWidth:1, borderColor:'#465fc7', paddingHorizontal:48}}>
                            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 2, color: '#465fc7' }}>
                                Cancel
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => nav.navigate("Home")}
                    >
                        <View style={{padding:8, borderRadius:45, borderWidth:1, borderColor:'#465fc7', paddingHorizontal:48, backgroundColor:"#465fc7"}}>
                            <Text style={{ fontSize: 18, fontWeight: "400", marginTop: 2, color: '#FFF', }}>
                                Connect
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default Bottoms