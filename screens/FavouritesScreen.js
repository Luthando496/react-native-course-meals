import React,{useContext} from 'react'
import { View, FlatList } from'react-native'
import {FavoritesContext} from '../store/favoriteContext'
import { MEALS } from '../data/dummy-data'
import MealItem from '../components/MealItem'


const FavoritesScreen = () => {
    const mealsContext = useContext(FavoritesContext)
    const data = MEALS.filter(meal => mealsContext.ids.includes(meal.id))
  return (
    <View className='flex-1 p-3'>
        <FlatList data={data} keyExtractor={(item)=> item.id} renderItem={(itemData)=>{
        return (
            <MealItem meal={itemData.item} duration={itemData.item.duration}
            complexity={itemData.item.complexity} itemId={itemData.item.id} 
            affordability={itemData.item.affordability} imageUrl={itemData.item.imageUrl} title={itemData.item.title}  />
        )
      }} />
    </View>
  )
}

export default FavoritesScreen