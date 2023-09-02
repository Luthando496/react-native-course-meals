import React from 'react'
import { View,Pressable,Text,StyleSheet } from 'react-native'



const CategoryGridTile = ({title,color,navigation,id}) => {
    const onNavigate=()=>{
        console.log('navigate')
        navigation.navigate('MealsOveriew',{
          categoryID:id
        })
      }

  return (
    <View style={[style.gridItem,{backgroundColor:color}]}>
        <Pressable onPress={onNavigate} android_ripple={{color:'#123999'}} style={({pressed})=>[style.btn,pressed ? style.btnPress :null]}>
            <View style={style.innerContainer}>
                <Text style={style.title} >
                {title}
                </Text>
            </View>
        </Pressable>
    </View>
  )
}


const style = StyleSheet.create({
    btnPress:{
        opacity:0.4
    },
    gridItem:{
        flex:1,
        margin:16,
        height:150,
        borderRadius:8,
        backgroundColor:'white',
        elevation:7,
        shadowOpacity:0.25,
        shadowColor:'black',
        shadowOffset:{width:0,height:2},
        shadowRadius:8,
        overflow:'hidden'
    },
    btn:{
        flex:1
    },
    innerContainer:{
        flex:1,
        borderRadius:8,
        padding:16,
        justifyContent:'center',
        alignItems:'center'
    },
    title:{
        fontWeight:'bold',
        fontSize:17
    }
})

export default CategoryGridTile