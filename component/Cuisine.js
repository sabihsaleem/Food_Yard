import React, {createRef} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import ActionSheet from "react-native-actions-sheet";

export default class Cuisine extends React.Component {

  componentDidMount() {
    const actionSheetRef = createRef();
    <ActionSheet ref={actionSheetRef} />;
    actionSheetRef.current?.hide();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={{height: '7%', justifyContent: 'center',}}>
          <TouchableOpacity style={{marginVertical: 10}} onPress={()=> this.props.navigation.goBack()} >
            <Image style={styles.image} source={require('../back.png')} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{fontSize: 24, fontWeight: 'bold', color: '#172121'}}>
                China
              </Text>
              <Text style={{fontSize: 24, color: '#172121'}}> / Spicy</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 20, alignItems: 'center', justifyContent: 'space-between'}}>
              <View>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#172121'}}>
                  Steamed
                </Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#172121'}}>Chicken with</Text>
                <Text style={{fontSize: 24, fontWeight: 'bold', color: '#172121'}}>Chilly Sauce</Text>
                <Text style={{fontWeight: 'bold', color: '#77C360', marginVertical: 10}}>2.30 EUR</Text>
              </View>
              <View style={{marginRight: 20,}}>
                <Image style={{width: 140, height: 140, borderRadius: 100, borderWidth:5, borderColor: 'black', marginBottom: 10}} source={require('../image1.png')} />
              </View>
            </View>
            <Text style={{fontSize: 16, color: '#172121', marginHorizontal: 10, marginBottom: 10}}>Ingredients (4) / NEEDED</Text>
          </View>
          <View style={{backgroundColor: '#FDFFFC'}}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#172121'}}>
                Chicken Leg
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}> / 2 pieces</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
              <Text style={{fontSize: 18, color: '#172121'}}>
                2.99 EUR / 4 pieces  -
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}>  1.50 EUR</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#172121'}}>
                Chicken Leg
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}> / 2 pieces</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
              <Text style={{fontSize: 18, color: '#172121'}}>
                2.99 EUR / 4 pieces  -
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}>  1.50 EUR</Text>
            </View>
          </View>
          <View style={{backgroundColor: '#FDFFFC'}}>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#172121'}}>
                Chicken Leg
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}> / 2 pieces</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
              <Text style={{fontSize: 18, color: '#172121'}}>
                2.99 EUR / 4 pieces  -
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}>  1.50 EUR</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginVertical: 10}}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: '#172121'}}>
                Chicken Leg
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}> / 2 pieces</Text>
            </View>
            <View style={{flexDirection: 'row', marginHorizontal: 10, marginBottom: 10}}>
              <Text style={{fontSize: 18, color: '#172121'}}>
                2.99 EUR / 4 pieces  -
              </Text>
              <Text style={{fontSize: 16, color: '#77C360'}}>  1.50 EUR</Text>
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
    backgroundColor: '#E4F3DF',
    borderColor: '#707070',
    overflow:"hidden",
  },
  image: {
    height: 20,
    width: 30,
  }
});
