import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Home extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.main}>
        <ScrollView>
          <View style={{marginVertical: 120,overflow:"hidden"}}>
            <Text style={styles.textUL}>Input Your</Text>

            <Text style={styles.text}>WiseFood</Text>

            <Text style={styles.textUL}>for the next meal</Text>
          </View>

          <View style={{ alignItems: 'center'}}>
            <Text
              style={{
                fontFamily: 'Open Sans',
                color: '#CECCCC',
              }}>
              HISTORY CUISINES
            </Text>
          </View>

          <View style={{width: '90%', alignSelf: 'center',overflow:"hidden",marginVertical:10}}>
            <View style={{flexDirection: 'row',overflow:"hidden",justifyContent:'space-between',}}>
              <View style={{backgroundColor: '#CECCCC',overflow:"hidden" ,width: '48%', height: 150, borderRadius: 15}}>
                <TouchableOpacity
                    style={{backgroundColor: '#CECCCC',overflow:"hidden",width: '100%', height: 120, borderRadius: 15}}
                >
                    
                  <Image
                    style={{overflow:"hidden",width: '100%', height: 100, borderRadius: 15}}
                    source={require('../image2.png')}
                  > 

                  </Image>

                  <Text style={{color:'#FDFFFC',alignSelf:'center'}} > add </Text>

                </TouchableOpacity>
              </View>
              <View style={{backgroundColor: '#CECCCC',overflow:"hidden" ,width: '48%', height: 150, borderRadius: 15}}>
                <TouchableOpacity
                    style={{backgroundColor: '#CECCCC',overflow:"hidden",width: '100%', height: 120, borderRadius: 15}}
                >
                    
                  <Image
                    style={{overflow:"hidden",width: '100%', height: 100, borderRadius: 15}}
                    source={require('../image2.png')}
                  > 

                  </Image>

                  <Text style={{color:'#FDFFFC',alignSelf:'center'}} > add </Text>

                </TouchableOpacity>
              </View>
            </View>
          </View>
        
          <View style={{width: '90%', alignSelf: 'center',overflow:"hidden",marginVertical:10}}>
            <View style={{flexDirection: 'row',overflow:"hidden",justifyContent:'space-between',}}>
              <View style={{backgroundColor: '#CECCCC',overflow:"hidden" ,width: '48%', height: 150, borderRadius: 15}}>
                <TouchableOpacity
                    style={{backgroundColor: '#CECCCC',overflow:"hidden",width: '100%', height: 120, borderRadius: 15}}
                >
                    
                  <Image
                    style={{overflow:"hidden",width: '100%', height: 100, borderRadius: 15}}
                    source={require('../image2.png')}
                  > 

                  </Image>

                  <Text style={{color:'#FDFFFC',alignSelf:'center'}} > add </Text>

                </TouchableOpacity>
              </View>
              <View style={{backgroundColor: '#CECCCC',overflow:"hidden" ,width: '48%', height: 150, borderRadius: 15}}>
                <TouchableOpacity
                    style={{backgroundColor: '#CECCCC',overflow:"hidden",width: '100%', height: 120, borderRadius: 15}}
                >
                    
                  <Image
                    style={{overflow:"hidden",width: '100%', height: 100, borderRadius: 15}}
                    source={require('../image2.png')}
                  > 

                  </Image>

                  <Text style={{color:'#FDFFFC',alignSelf:'center'}} > add </Text>

                </TouchableOpacity>
              </View>
            </View>
          </View>
        
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#FDFFFC',
    borderColor: '#707070',
    // borderWidth: 1,
    overflow:"hidden",
  },
  text: {
    color: '#77C360',
    borderWidth: 2,
    borderColor: '#77C360',
    fontSize: 26,
    textAlign: 'center',
    textAlignVertical: 'center',
    width: 250,
    height: 50,
    borderRadius: 15,
    alignSelf: 'center'
  },
  textUL: {
    fontWeight: 'bold',
    color: '#172121',
    textAlign: 'center',
  },
});
