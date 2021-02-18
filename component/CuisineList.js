import React, { createRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

export default class CuisineList extends React.Component {
  
  render() {
    return (
        <View style={styles.main}>
          <View style={{height: '7%', alignItems: 'center', backgroundColor: '#FDFFFC'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 10}}>Wise Meal</Text>
          </View>
          <ScrollView>
            <View style={{backgroundColor: '#FDFFFC', height: 175}}>
              <View style={{flexDirection: 'row', marginHorizontal: 10}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>9.12 </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#CECCCC'}}>Euro</Text>
              </View>
              <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 20}}>
                <Text style={{fontSize: 20, fontWeight: 'bold',}}>REWE </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#CECCCC'}}>(550m)</Text>
              </View>
              <Text style={{fontSize: 16, marginHorizontal: 10}}>Theaterplatz 2A, 99423 Weimar</Text>
              <Text style={{fontSize: 16, marginHorizontal: 10}}>Mon-Fri 07:00-22:00, Sat 07:00-20:00</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View
                    style={{ 
                        backgroundColor: '#172121', 
                        borderRadius: 20, 
                        marginHorizontal: 20, 
                        height: '64%', 
                        // marginBottom: 30, 
                        marginVertical: 20, 
                        width: '40%',
                        alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FDFFFC'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#FDFFFC'}}>/ salty</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#77C360'}}>/ salty</Text>
                    <TouchableOpacity style={{overflow: 'hidden'}}>
                        <Image
                            style={{ borderRadius: 50,width: 30, height: 30, alignSelf: 'center',marginVertical:20}}
                            source={require('../cross.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                style={{ 
                    backgroundColor: '#172121', 
                    borderRadius: 20, 
                    marginHorizontal: 20, 
                    height: '64%', 
                    // marginBottom: 30, 
                    marginVertical: 20, 
                    width: '40%',
                    alignItems: 'center',
                }}>
                    <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FDFFFC'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#FDFFFC'}}>/ salty</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#77C360'}}>/ salty</Text>
                    <TouchableOpacity style={{overflow: 'hidden'}}>
                        <Image
                            style={{ borderRadius: 50,width: 30, height: 30, alignSelf: 'center',marginVertical:20}}
                            source={require('../cross.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{flexDirection: 'row'}}>
                <View
                    style={{ 
                        backgroundColor: '#172121', 
                        borderRadius: 20, 
                        marginHorizontal: 20, 
                        height: '64%', 
                        // marginBottom: 30, 
                        marginVertical: 20, 
                        width: '40%',
                        alignItems: 'center',
                    }}>
                    <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 10}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FDFFFC'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#FDFFFC'}}>/ salty</Text>
                    </View>
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>Italy </Text>
                        <Text style={{fontSize: 20, color: '#77C360'}}>/ salty</Text>
                    <TouchableOpacity style={{overflow: 'hidden'}}>
                        <Image
                            style={{ borderRadius: 50,width: 30, height: 30, alignSelf: 'center',marginVertical:20}}
                            source={require('../cross.png')}
                        />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{  
                        borderRadius: 20, 
                        marginHorizontal: 20, 
                        height: '64%',  
                        marginVertical: 20, 
                        width: '40%',
                        borderColor: '#77C360',
                        borderWidth: 2
                    }}
                >
                    <View
                    >
                        <View style={{marginHorizontal: 20, marginVertical: 10,}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>add + </Text>
                        </View>
                        <View style={{marginHorizontal: 20, marginVertical: 10,}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>new </Text>
                        </View>
                        <View style={{marginHorizontal: 20, marginVertical: 10,}}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#77C360'}}>Cuisine </Text>
                        </View>
                </View>
                </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E4F3DF',
    borderColor: '#707070',
    overflow:"hidden",
  },
  image: {
    height: 50,
    width: 40,
  }
})