import { View, Text, Platform, ImageBackground, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({ layout, genres, flatListLoaded, setFlatListLoaded, item, discover }) => {
   React.useEffect(function () {
      if (flatListLoaded) return;
      setFlatListLoaded(true)
   }, []);

   return (
      <View style={{ minHeight: layout.height }}>
         <ImageBackground
            resizeMode='cover'
            source={{ uri: 'https://image.tmdb.org/t/p/original' + item.poster_path }}
            style={{ width: layout.width, maxHeight: (layout.height / 8) * 12, minHeight: 0 }}
         >
            <LinearGradient
               style={{ height: '100%' }}
               locations={[0.0, 0.2, 0.6, 0.8]}
               colors={[
                  'rgba(0,0,0,0.60)',
                  'rgba(0,0,0,0.40)',
                  'rgba(0,0,0,0.00)',
                  'rgba(0,0,0,1.00)',
               ]}
            />
         </ImageBackground>
         <View style={{ top: Platform.OS === "android" ? -140 : -150, width: layout.width, paddingHorizontal: 20, marginTop: -40 }}>
            <View>
               <Text style={{ color: '#E50914', fontFamily: 'poppins600', letterSpacing: 1.25, textTransform: 'uppercase', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                  {discover === "movie" ? "Movies" : "Tv Shows"}
                  <Text>{Platform.OS === "android" ? " " : "  "}</Text>
                  {
                     genres.map(genre => {
                        return (
                           <React.Fragment key={genre.id}>
                              {
                                 genre.id === item.genre_ids[0] && (
                                    <Text style={{ fontSize: Platform.OS === "android" ? 14 : 8, textAlign: 'center', paddingBottom: 3, fontFamily: 'poppins', color: '#E50914' }}>{'\u2B24'}</Text>
                                 )
                              }
                              {
                                 genre.id === item.genre_ids[0] && (
                                    <Text>{Platform.OS === "android" ? " " : "  "}</Text>
                                 )
                              }
                              <Text>{genre.id === item.genre_ids[0] ? genre.name : ''}</Text>
                           </React.Fragment>
                        );
                     })
                  }
               </Text>
               <Text style={{ color: '#ffffff', fontFamily: 'poppins600', fontSize: 24, top: 0 }}>{item[discover === 'movie' ? 'title' : 'name']}</Text>
               <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: '#E50914', top: (layout.height / 8) * 0.15, padding: 10 }}>
                  <FontAwesomeIcon color='#fff' icon={faPlay} />
                  <Text>  </Text>
                  <Text style={{ color: '#fff', fontFamily: 'poppins' }}>Watch Now</Text>
               </TouchableOpacity>
            </View>
         </View>
      </View>
   )
}

export default MovieDetails