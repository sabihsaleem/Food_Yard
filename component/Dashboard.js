import React, { createRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import ActionSheet from "react-native-actions-sheet";
import Carousel from 'react-native-snap-carousel';

export default class Dashboard extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      datacarousel: dataArray
    }
  }

  // componentDidMount() {
  //   const datacarousel = [
  //     {
  //         "id": 0,
  //         "title": "This is snowman first title",
  //         "imagePath": '../image4.png',
  //     },
  //     {
  //         "id": 1,
  //         "title": "Snowman",
  //         "subtitle": "The guy you want",
  //         "imagePath": "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
  //     },
  //   ];
  //   this.setState({datacarousel})
  // }

  _renderItem = (item) => {
    return (
      <View style={{ backgroundColor: '#172121', borderRadius: 20, marginHorizontal: 20, height: '96%', marginBottom: 30}}>
        <View style={{flexDirection: 'row', marginHorizontal: 20, marginVertical: 10}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: '#FDFFFC'}}>Italy </Text>
          <Text style={{fontSize: 20, color: '#FDFFFC'}}>/ salty</Text>
        </View>
        <Text  style={{fontSize: 20, color: '#FDFFFC', fontWeight: 'bold', marginHorizontal:20}}>{item.item.title}</Text>
        <Text  style={{fontSize: 16, color: '#FDFFFC', marginHorizontal:20, paddingTop: 10}}>6.42 EUR </Text>
        <View style={{flexDirection: "column"}}>
          <View>
            <Text  style={{fontSize: 16, color: '#77C360', marginHorizontal:20, paddingTop: 10, textDecorationLine: 'underline'}}>Ingredients (6) </Text>
            <Text  style={{fontSize: 16, color: '#77C360', marginHorizontal:20, paddingTop: 10, textDecorationLine: 'underline'}}>Recipe </Text>
          </View>
          <View
            style={{borderRadius: 100 , alignItems:"flex-end" ,marginHorizontal: -30, marginTop:-30 }}
          >
            <Image
              style={{width: 140, height: 140,borderRadius: 100,borderWidth:5, borderColor: 'black' }}
              source={require('../image3.png')}
            />
          </View>
        </View>
        <View style={{marginTop: -40}}>
            <Text  style={{fontSize: 16, color: '#77C360', marginHorizontal:20, paddingTop: 10, textDecorationLine: 'underline'}}>Next Choice</Text>
            <Text  style={{fontSize: 16, color: '#77C360', marginHorizontal:20, paddingTop: 10, textDecorationLine: 'underline'}}>on Italy/salty</Text>
        </View>
        <TouchableOpacity>
            <Image
              style={{width: 30, height: 20, marginHorizontal: 20, marginBottom: 10, marginVertical: 10}}
              source={require('../arrow.png')}
            />
        </TouchableOpacity>
          <TouchableOpacity style={{overflow: 'hidden'}}>
              <Image
                style={{ borderRadius: 50,width: 30, height: 30, alignSelf: 'center',}}
                source={require('../cross.png')}
              />
          </TouchableOpacity>
      </View>
    );
  }
  
  render() {
    const actionSheetRef = createRef()
    let actionSheet
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
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, marginVertical: 25}}>
              <Text style={{fontSize: 16, marginHorizontal: 10, fontWeight: 'bold'}}>Cuisine (2)</Text>
              <Text style={{fontSize: 16, marginHorizontal: 10, fontWeight: 'bold', color: '#77C360'}}>DELETE ALL & REDO</Text>
            </View>
            <Carousel
              data={this.state.datacarousel}
              renderItem={(this._renderItem)}
              sliderWidth={350}
              itemWidth={310}
            />
          </ScrollView>
          {/* <Text>
              Dashboard
          </Text>
          <View
            style = {{
                justifyContent: "center",
                flex: 1,
            }}
          >
            <TouchableOpacity
                onPress = {() => {
                    actionSheetRef.current?.setModalVisible()
                }}
            >
                <Text>Open ActionSheet</Text>
            </TouchableOpacity>
            <ActionSheet ref = { actionSheetRef }>
                <View>
                    <Text>YOUR CUSTOM</Text>
                </View>
            </ActionSheet>
          </View> */}
        </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#E4F3DF',
    borderColor: '#707070',
    borderWidth: 1,
    overflow:"hidden",
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  image: {
    height: 50,
    width: 40,
  }
})  

  const dataArray=[
    {
        "id": 0,
        "title": "Seafood Pasta",
        "imagePath": '../image4.png',
    },
    {
        "id": 1,
        "title": "Steamed Chicken with",
        "imagePath": "https://cdn.pixabay.com/photo/2017/12/09/16/41/snow-man-3008179_1280.jpg",
    },
  ]