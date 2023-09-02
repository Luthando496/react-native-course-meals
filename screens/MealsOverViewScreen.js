import {View,FlatList,StyleSheet} from 'react-native'
import {MEALS,CATEGORIES} from '../data/dummy-data'
import MealItem from '../components/MealItem'
import { useEffect, useLayoutEffect } from 'react'



const MealsOverViewScreen = ({navigation,route}) => {
  const id = route.params.categoryID

  
  useLayoutEffect(()=>{
    const HEADER = CATEGORIES.find((meal)=> meal.id === id)
  
    navigation.setOptions({
        title:HEADER.title,
    })

  },[])


  const displayedMeals = MEALS.filter(meal =>{
    return meal.categoryIds.indexOf(id) >= 0
  })
  return (
    <View style={style.container}>
      <FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={(itemData)=>{
        return (
            <MealItem meal={itemData.item} duration={itemData.item.duration}
            complexity={itemData.item.complexity} itemId={itemData.item.id} 
            affordability={itemData.item.affordability} imageUrl={itemData.item.imageUrl} title={itemData.item.title} navigation={navigation} />
        )
      }} />
    </View>
  )
}




const style = StyleSheet.create({
    container:{
        flex:1,
        padding:20
    }
})

export default MealsOverViewScreen