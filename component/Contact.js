import React, { Component } from "react";
import { View, Button, Text, TouchableOpacity, Image } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

export default class Contact extends Component {
  
  action() {
    this.props.navigation.navigate('Cuisine')
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="OPEN BOTTOM SHEET" onPress={() => this.RBSheet.open()} />
        <RBSheet
          ref={ref => {
            this.RBSheet = ref;
          }}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              justifyContent: "center",
              alignItems: "center"
            }
          }}
        >
          <View style={{alignItems: 'center', marginTop: 20}}>
            <Text style={{fontSize: 20, color: '#77C360', textDecorationLine: 'underline', marginBottom: 10}}>Cuisine</Text>
            <TouchableOpacity onPress={()=> this.action()}>
              <Image style={{width: 140, height: 140, borderRadius: 100, borderWidth:5, borderColor: 'black', marginBottom: 10}} source={require('../image1.png')} />
            </TouchableOpacity>
          </View>
          {/* <YourOwnComponent /> */}
        </RBSheet>
      </View>
    );
  }
}