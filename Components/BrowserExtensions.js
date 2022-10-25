import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const BrowserExtensions = () => {


    const WalletCard = (props) => {
        const navigation = useNavigation();
        return (
            <TouchableOpacity
                onPress={() => navigation.navigate("SScreen")}
            >
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: '8%',
                    paddingVertical: '3%',
                    borderColor: '#201b3f',
                    borderWidth: 2,
                    borderRadius: 33,
                    marginHorizontal: '3%',
                    marginBottom: '4%'
                }}>
                    <Text
                        style={{
                            fontSize: 14,
                            color: '#a99fc8',
                            fontWeight: '600',
                            paddingRight: props.pr
                        }}
                    >
                        {props.text}
                    </Text>
                    <Image
                        source={props.uri}
                        style={{
                            height: 20,
                            width: 20
                        }}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>
        )
    }

    const Imgs = {
        MetaMask: { uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEglz2BoyZrSu3X8mvwD-dZ7PtX5LOGynALYmVpujqWvOeCTti-EuvtKdGQAapnsHu_yD-Dq9P6WsJBsRQdN1m7_oHvWI3rmAzDS41EvBTMWv1eWTcjJGz-spN2S9eFlKLEHEthzPd2r-qnkUmYSADqm2wOXVOAFzxDcLB4eMQkGnNDFgmLemuh6sJb7' },

        CoinBase: { uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEipbODqc9lRRB1Ct39PoPmDBrMM2inCCNC-FnIW-Bav7MAc8I0bOW-kgl4U8v8_v_7jd_bD_Bogne4BCrHAfWCHUb9yxgk3fXh0cM-bFs9KcSRU2eXst_fYvf8ZuUNxFDAEEHZKj7hUU_VLTiBMSMyRaP88CIL37d90T7TqlloveU6eo62utjKvfYCg' },

        Fortmatic: { uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEg0EKHwpN0dVnhrOw_66bHAcPY0ecEAPaUSzYa-VjTwHZIol2ilzLXYT7MioZRUaHXuDUxcvUfUJaCj_cBA8g8LnFz9F1Opbsb_bWCZf94N6iM_jVclOpirfa20iQG4mEmDhicYKCoimS_segUt5nLSllzwaJ_JVRsT6v3Oju3_Dp8r8cbBx7k131HD' },

        Portis: { uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEiM39oIo9BOtaSC6XEgQwQtll53DXPQWZRYioZwDMO9zl9A2ZXcyAXUh4NrJy8OeCXYAzVO4IMMhceT9zVlDJBQW_bHSqscfAbPqk8idS9rR6V-_DNMeJ9gqnUotSTUR1Ae4w5LUbXYWtSOnmE-HQApY2M8M2kasyqdM3UFaYJO68okRvpQUjfUvxqR' },

        WalletConnect: { uri: 'https://blogger.googleusercontent.com/img/a/AVvXsEgh0xU2fL3Q-B2OAQ4z9UJJyRqqmYfPHY2J8o8aAKe4CP81sVC-dmKj1Lhvs9BshXNyVXnlCqcifOafRCT0H7HWwKEiW8mlBq2dcsq2bqIHG2do_icExLHangPYAifqwwfR3wuNzXUMn0mF2AAOh-m_1Ve1ewlGZmPoB4uHAAqySrxC659gEdeDE0-7' },




    }


    return (
        <View style={{ paddingHorizontal: '2%', width: '100%', paddingBottom: 7, marginHorizontal: '3%' }}>
            <WalletCard text="Meta Mask" uri={Imgs.MetaMask} pr='59%' />
            <WalletCard text="WalletConnect" uri={Imgs.WalletConnect} />
            <WalletCard text="Coinbase Walet" uri={Imgs.CoinBase} />
            <WalletCard text="Fortmatic" uri={Imgs.Fortmatic} />
            <WalletCard text="Portis" uri={Imgs.Portis} />
        </View>
    )
}

export default BrowserExtensions

const styles = StyleSheet.create({})

