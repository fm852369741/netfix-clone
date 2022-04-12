import React from 'react'
import { ScrollView, View, Image, TouchableOpacity, Text, useWindowDimensions, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { setAppLoaded } from '../redux/slices/AppSlice';
import { getGenres, getMovies } from '../helpers/func';
import Loading from '../components/Loading';
import MovieDetails from '../components/MovieDetails';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faTemperatureDown } from '@fortawesome/free-solid-svg-icons';
import { setDiscoverType } from '../redux/slices/AppSlice';


const Home = () => {
  const layout = useWindowDimensions();
  const dispach = useDispatch();

  const discover = useSelector(state => state.app.discoverType)
  const [results, setResults] = React.useState([]);
  const [genres, setGenres] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const flatlist = React.useRef();
  const [flatListLoaded, setFlatListLoaded] = React.useState(false);
  const loading = useSelector((state) => state.app.loading);

  React.useEffect(function () {
    getMovies(discover).then(data => setResults(data))
    getGenres(discover).then(data => setGenres(data))
  }, [discover]);

  React.useEffect(function () {
    if (loading || flatlist.current == undefined || !flatListLoaded) return;
    else {
      const changeIdx = function () {
        let idx = index;

        if (idx + 1 == results.length) setIndex(1)
        else setIndex(idx + 1)
      }

      clearTimeout(changeIdx)
      setTimeout(changeIdx, 3000)
    }
  }, [loading, flatlist, flatListLoaded, index]);

  React.useEffect(function () {
    if (loading || flatlist.current == undefined || !flatListLoaded) return;

    if (index === 0 || !flatListLoaded) return;
    else {
      setTimeout(function () {
        flatlist.current.scrollToIndex({
          animated: true,
          index: index 
        })
      }, 3000)
    }
  }, [index]);

  React.useEffect(function () {
    if (results.length > 0 && genres.length > 0) setTimeout(() => dispach(setAppLoaded()), 1500);
  }, [results, genres]);

  return (
    <ScrollView style={{ minHeight: layout.height, backgroundColor: '#000000' }}>
      {
        loading ?
          <Loading /> : (
            <View>
              <View style={{ position: 'absolute', zIndex: 2, marginTop: 60, width: layout.width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                <View style={{ marginHorizontal: 20 }}>
                  <Image source={require('../assets/images/logo.png')} style={{ width: Platform.OS === "android" ? 50 : 45, height: Platform.OS === "android" ? 50 : 45 }} />
                </View>
                <TouchableOpacity onPress={() => dispach(setDiscoverType('movie'))} style={{ marginHorizontal: 20 }}>
                  <Text style={{ color: '#ffffff', fontFamily: 'poppins', fontSize: 15 }}>Movies</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => dispach(setDiscoverType('tv'))} style={{ marginHorizontal: 20 }}>
                  <Text style={{ color: '#ffffff', fontFamily: 'poppins', fontSize: 15 }}>Tv Shows</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginHorizontal: Platform.OS === "android" ? 23 : 20, marginRight: Platform.OS === "android" ? 26 : 29 }}>
                  <FontAwesomeIcon icon={faSearch} color="#ffffff" size={24} />
                </TouchableOpacity>
              </View>
              <FlatList
                ref={flatlist}
                style={{
                  height: layout.height
                }}
                horizontal
                pagingEnabled
                data={results}
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.backdrop_path}
                renderItem={props => <MovieDetails layout={layout} flatListLoaded={flatListLoaded} setFlatListLoaded={setFlatListLoaded} discover={discover} genres={genres} {...props} />}
              />
            </View>
          )
      }
    </ScrollView>
  )
}

export default Home