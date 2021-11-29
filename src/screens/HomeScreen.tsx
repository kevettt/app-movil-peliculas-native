import React from 'react'
import { ActivityIndicator, Dimensions, FlatList, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

import { MovieBigCard } from '../components/MovieBigCard'
import useMovies from '../hooks/useMovies'

const {width:windowWidth} = Dimensions.get('window')

const HomeScreen = () => {

    const {top} = useSafeAreaInsets();

    const{peliculasEnCine,peliculasPopulares,isLoading} = useMovies()

    // LOADING PARA MOSTRAR MIENTRAS CARGAN LAS PELICULAS
    // Y EVITAR EL UNDEFINED
    if (isLoading) {
        return(
            <View style={{
                    flex: 1,
                    justifyContent:"center",
                    alignItems:"center"
                }}
            >
                <ActivityIndicator
                    color="purple"
                    size={50}
                />
            </View>
        )
    }
    //FIN LOADING

    
    // RETORNAMOS NUESTRA VISTA DEL HOME
    return (
        <View style = {{ marginTop: top + 10}}>

            <View style={{height: 420,}} >

                <Carousel
                    data={peliculasEnCine}
                    renderItem={({item}:any)=> <MovieBigCard movie={item}/>}
                    sliderWidth={windowWidth}
                    itemWidth={300}
                />

            </View>

            <View style={{height:220}}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Populares</Text>
                <FlatList
                    data={peliculasPopulares}
                    renderItem={({item}:any)=>(
                        <MovieBigCard 
                            movie={item}
                            width={110}
                            height={180}
                        />
                    )}
                    keyExtractor={(item)=> item.id.toString()}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            
        </View>
    )
    // FIN DE LA VISTA HOME
}

export default HomeScreen
