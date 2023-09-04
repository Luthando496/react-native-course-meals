import React from 'react'
import {Pressable,StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const IconButton = ({btnPressed,icon,color}) => {
  return (
    <Pressable style={({pressed})=> pressed && styles.pressed} onPress={btnPressed}>
        <Ionicons name={icon} size={30} color={color}/>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    pressed:{
        opacity:0.7
    }
})

export default IconButton