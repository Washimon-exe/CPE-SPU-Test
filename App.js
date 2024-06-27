import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import init from 'react_native_mqtt';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Icon } from 'react-native-elements'

import Option_1 from './Screen/Option_1'
import Option_2 from './Screen/Option_2'
import Option_3 from './Screen/Option_3'

const Tab = createBottomTabNavigator();

const App = () => {

  return (
    <View style={{ flex: 1, margin: 10 }}>
      <NavigationContainer>
        <Tab.Navigator>

          <Tab.Screen
            name="Size"
            component={Option_1}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='local-pizza' />
              )
            }} />
          <Tab.Screen
            name="Meat"
            component={Option_2}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='local-pizza' />
              )
            }} />

          <Tab.Screen
            name="Vegetable"
            component={Option_3}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name='local-pizza' />
              ),
            }} />

        </Tab.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: 350,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 20,
  },
  containner: {
    flex: 1,
    margin: 10,
    top: 20
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 10,
    marginLeft: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%'
  }

})