import { Image, StyleSheet, View, Text, ScrollView } from "react-native";
import { Icon } from "react-native-elements";
import FontAwesome from "react-native-vector-icons/FontAwesome";
export default function Bitcoin() {

    return (
        <View style={styles.container}>

            <View style={{ alignItems: 'left', marginTop: 20, marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 19, fontFamily:'serif', textAlign:'left' }}>
                    Home
                </Text>

            </View>
            <View style={styles.header}>
                <Icon
                    name="star"
                    type="material"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150, opacity: 0.4 }}
                />
                <Icon
                    name="compare"
                    type="material"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150, opacity: 0.4 }}
                />
                <Icon
                    name="star"
                    type="font-awesome"
                    color="#000"
                    size={25}
                    iconStyle={{ marginRight: 10, padding: 10, borderRadius: 150, opacity: 0.6 }}
                />
            </View>
            <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'serif' }}>Your wallet</Text>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{}}>
                <View style={styles.images}>
                    <View style={{ width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, alignItems: 'center', padding: 10, backgroundColor: '#fff', }}>
                        <View>
                            <Text style={{ color: '#b3b3b3', fontWeight: 'bold', fontSize: 17 }}>
                                Neo
                            </Text>
                            <Text style={{ fontSize: 18 }}>
                                Neo 032145
                            </Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                                $032145
                            </Text>
                        </View>
                        <View>
                            <Icon
                                name="star"
                                type="font-awesome"
                                color="#47b565"
                                size={25}
                                iconStyle={{ opacity: 0.6 }}
                                style={{ backgroundColor: '#c2f2cf', borderRadius: 100, padding: 10 }}
                            />
                            <Text style={{ fontSize: 15, color: '#47b565', fontWeight: 'bold' }}>
                                2.5%
                            </Text>
                        </View>

                    </View>
                    <View style={{ width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, alignItems: 'center', padding: 10, backgroundColor: '#fff', }}>
                        <View>
                            <Text style={{ color: '#b3b3b3', fontWeight: 'bold', fontSize: 17 }}>
                                Neo
                            </Text>
                            <Text style={{ fontSize: 18 }}>
                                Neo 032145
                            </Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                                $032145
                            </Text>
                        </View>
                        <View>
                            <Icon
                                name="star"
                                type="font-awesome"
                                color="#47b565"
                                size={25}
                                iconStyle={{ opacity: 0.6 }}
                                style={{ backgroundColor: '#c2f2cf', borderRadius: 100, padding: 10 }}
                            />
                            <Text style={{ fontSize: 15, color: '#47b565', fontWeight: 'bold' }}>
                                2.5%
                            </Text>
                        </View>

                    </View>
                    <View style={{ width: 200, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderRadius: 20, alignItems: 'center', padding: 10, backgroundColor: '#fff', }}>
                        <View>
                            <Text style={{ color: '#b3b3b3', fontWeight: 'bold', fontSize: 17 }}>
                                Neo
                            </Text>
                            <Text style={{ fontSize: 18 }}>
                                Neo 032145
                                </Text>
                            <Text style={{ fontSize: 25, fontWeight: 'bold' }}>
                                $032145
                            </Text>
                        </View>
                        <View>
                            <Icon
                                name="star"
                                type="font-awesome"
                                color="#47b565"
                                size={25}
                                iconStyle={{ opacity: 0.6 }}
                                style={{ backgroundColor: '#c2f2cf', borderRadius: 100, padding: 10 }}
                            />
                            <Text style={{ fontSize: 15, color: '#47b565', fontWeight: 'bold' }}>
                                2.5%
                            </Text>
                        </View>

                    </View>

                </View>
            </ScrollView>
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 20, fontFamily: 'serif' }}>Trending</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between', alignItems: 'center', height: 100 }}>
                <View style={{ display: 'flex', flexDirection: 'column', width: "20%" }}>
                    <View style={{display:"flex", flexDirection:'column'}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                        <FontAwesome name='bitcoin' size={20} />
                            <Text style={{ fontWeight: 'bold', fontFamily: '17',padding:5 }}>Bitcoin</Text>
                            
                        </View>
                        <Text>BTC</Text>
                    </View>
                    </View>
                    <View style={{ width: "30%" }}>
                        <Text style={{ fontWeight: 'bold', fontFamily: '17' }}>$32,128.80</Text>
                        <Text>2.5%</Text>
                    </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', width: "100%", justifyContent: 'space-between', alignItems: 'center', height: 100 }}>
                <View style={{ display: 'flex', flexDirection: 'column', width: "20%" }}>
                    <View style={{display:"flex", flexDirection:'column'}}>
                        <View style={{display:'flex',flexDirection:'row'}}>
                        <FontAwesome name='bitcoin' size={20} />
                        <Text style={{ fontWeight: 'bold', fontFamily: '17',padding:5 }}>Bytecoin</Text>
                            
                            </View>
                            <Text>TCB</Text>
                        </View>
                        </View>
                    <View style={{ width: "30%" }}>
                        <Text style={{ fontWeight: 'bold', fontFamily: '17' }}>$32,128.80</Text>
                        <Text>2.5%</Text>
                    </View>
                    </View>
            </View>
            // </View>
     
     ) 
   }
   
   const styles = StyleSheet.create({
    header: {
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 50,
        marginLeft: "0%",
        alignItems: 'center',
    },
    images: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 10,
        width: "32%",
        gap: 10,
        height: 120,
    },
    container: {
        // marginTop: 30,
        padding: 17,
        width: "100%",
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#dfe3eb',
        flex: 1,
        backgroundColor:'white'
   
     },
    });
            

            