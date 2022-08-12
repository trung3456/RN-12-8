import { StyleSheet, Text, View, SafeAreaView, Image, TextInput } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Image style={styles.img} source={require('./assets/image/anime1.jpg')} />

        {/* body form */}
        <Text style={styles.text_A}>Email or Phone number</Text>
        {/* input form 1 */}
        <View style={styles.V_input}>
          <View style={styles.form_1}>
            <View style={styles.V_icon}>
              <FontAwesome5 style={styles.iconIn} name={'phone'} size={24} />
            </View>
            <TextInput style={styles.input}
              placeholder=" Enter your name or phone number"
            ></TextInput>
          </View>

          <Text style={styles.text_B}>Password</Text>
          {/* input form 2 */}
          <View style={styles.form_2}>
            <View>
              <FontAwesome5 style={styles.iconIn2} name={'lock'} size={24} />
              {/* <FontAwesome5 style={styles.iconIn2}  name={'eye'} size={24} /> */}
            </View>
            <TextInput style={styles.input} placeholder=' Enter your password'></TextInput>
            
          </View>

          <Text style={styles.rsPass}>Reset password</Text>
        </View>

      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6aaff'
  },

  img: {
    width: '100%',
    height: 250,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },

  text_A: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 27,
    marginVertical: 5
  },

  text_B: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 27,
    marginVertical: 5,
    marginRight: 290
  },

  V_input: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconIn: {
    position: 'absolute',
    paddingLeft: 55
  },

  iconIn2:{
    position: 'absolute',
    marginLeft: 18,
    marginTop: 10,
    zIndex: 1
  },

  V_icon: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  input: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 50
  },

  form_1: {
    flexDirection: 'row',
  },

  form_2: {
    flexDirection: 'row',
  },

  rsPass:{
    marginLeft: 250,
    fontSize: 15
  }
})