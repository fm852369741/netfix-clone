import * as React from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { useWindowDimensions, View, Platform, StatusBar } from 'react-native';

import Home from '../screens/Home';

const scene = SceneMap({
   home: Home,
});

export default function ScreenProvider() {
   const layout = useWindowDimensions();

   const [index, setIndex] = React.useState(0);
   const [routes] = React.useState([
      { key: 'home', title: 'First' },
   ]);

   return (
      <TabView
         renderScene={scene}
         onIndexChange={setIndex}
         navigationState={{ index, routes }}
         initialLayout={{ width: layout.width }}
         renderTabBar={props => <React.Fragment />}
      />
   );
}