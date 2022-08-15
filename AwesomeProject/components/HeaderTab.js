import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

export default function HeaderTab() {

  const [activeTab, setActiveTab] = useState('Delivery')

  return (
    <View style={styles.header}>
      <HeaderButton text="Delivery" btnColor="#ffffff" textColor="#181818" activeTab={setActiveTab} setActiveTab={setActiveTab} />
      <HeaderButton text="Pickup" btnColor="#181818" textColor="#ffffff" activeTab={setActiveTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButton = (props) => {
  return (
    <TouchableOpacity style={{
      backgroundColor: props.activeTab === props.text ? '#ffffff' : '#181818',
      borderRadius: 30,
    }}
      onPress={() => props.setActiveTab(props.text)}
    >
      <Text style={{
        color: props.activeTab === props.text ? '#181818' : '#ffffff',
        margin: 5,
        paddingHorizontal: 12,
        fontSize: 15,
        fontWeight: 'bold'
      }}>{props.text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 10,
  },

})