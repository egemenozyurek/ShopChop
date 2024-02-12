import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import Products from './pages/products/Products'
import Detail from './pages/Detail/Detail'

const Stack = createStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='ProductsPage' component={Products}/>
            <Stack.Screen name='DetailPage' component={Detail}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router