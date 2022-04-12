import { View, Image, useWindowDimensions } from 'react-native'
import React from 'react'

const Loading = () => {
   const layout = useWindowDimensions();

   return (
      <View style={{ minHeight: layout.height, flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', justifyContent: 'center' }}>
         <Image style={{ transform: [{ scale: 2 }] }} source={require('../assets/loading.gif')} />
      </View>
   )
}

export default Loading