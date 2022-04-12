import React from 'react'
import { View, Text, Platform } from 'react-native'

const Appbar = (props) => {
   return (
      <View style={{ height: Platform.OS == "ios" ? 44 : 56, backgroundColor: '#1f1f1f', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
         <View>
            <Text style={{ color: '#fffeff', textTransform: 'capitalize', fontSize: 12, marginLeft: 20 }}>Films</Text>   
         </View>         
         <View>
            <Text style={{ color: '#fffeff', textTransform: 'capitalize', fontSize: 12, marginLeft: 20 }}>Tv Shows</Text>   
         </View>         
      </View>
   )
}

export default Appbar