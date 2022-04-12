import React from "react";
import { View, Image, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

import ScreenProvider from "../providers/ScreenProvider";
import { useFonts } from "expo-font";
import { useSelector } from "react-redux";

export default function Main() {
   const [loaded] = useFonts({
      poppins: require('../fonts/Poppins/Poppins-Regular.ttf'),
      poppins300: require('../fonts/Poppins/Poppins-Medium.ttf'),
      poppins600: require('../fonts/Poppins/Poppins-SemiBold.ttf')
   });
  
   if (!loaded) return (
      <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
         <Image style={{ transform: [{ scale: 2 }] }} source={require('../assets/loading.gif')} />
      </View>
   );

   return (
      <React.Fragment>
         <StatusBar style="light" />
         {
            loaded &&
            <ScreenProvider />
         }
      </React.Fragment>
   );
}
