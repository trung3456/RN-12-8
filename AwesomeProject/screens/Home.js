// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import HeaderTab from '../components/HeaderTab'

// export default function Home() {
//   return (
//     <View><HeaderTab/></View>
//   )
// }

// const styles = StyleSheet.create({})


import { Text, View } from 'react-native'
import React, { Component } from 'react'
import HeaderTab from '../components/HeaderTab'
import UseStateEX from '../components/UseStateEX'
import HeaderImage from '../components/HeaderImage'

class home extends Component {
  render() {
    return (
      <View>
        <HeaderTab/>
        <HeaderImage/>
        <UseStateEX/>
      </View>
    )
  }
}

export default home;