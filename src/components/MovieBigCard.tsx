import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Movie } from '../interfaces/movieInterface'

interface Props{
    movie:Movie,
    height?:number,
    width?:number
}

export const MovieBigCard = ({movie,height=410,width=300}:Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    
    return (

        <View style={{
            width,
            height,
            borderRadius:20,
            marginHorizontal: 5
        }}>
            
            <View style={styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={styles.image}
                />
            </View>

        </View>
    )

}


const styles = StyleSheet.create({
    image:{
        flex: 1,
        borderRadius: 20
    },
    imageContainer:{
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity:0.5,
        shadowRadius:7,
        elevation:10
    }
})
