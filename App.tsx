import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Navegacion from './src/navigation/Navegacion'



const App = () => {
  return (
    <NavigationContainer>
      <Navegacion/>
    </NavigationContainer>
  )
}

export default App
