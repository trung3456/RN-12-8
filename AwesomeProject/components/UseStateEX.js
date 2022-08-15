import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

export default function UseStateEX() {

    const [count, setCount] = React.useState(0)

    const increment = () => {
        setCount(count + 1)
    }

  return (
    <View>
      <Text style={styles.text}>{count}</Text>
      <Button title ='Increament' onPress={increment} /> 
    </View>
  )
}

const styles = StyleSheet.create({
  text:{
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})