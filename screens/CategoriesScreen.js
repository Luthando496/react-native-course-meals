import React from 'react'
import {Text,View,FlatList} from 'react-native'
import {CATEGORIES} from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'




const CategoriesScreen = ({navigation}) => {

  
   
  return (
    <View>
        <FlatList data={CATEGORIES}  numColumns={2}  keyExtractor={(item)=> item.id}  renderItem={
            (itemData)=> {
                return (
                    <CategoryGridTile navigation={navigation} id={itemData.item.id} title={itemData.item.title} color={itemData.item.color} />
                )
            }
        }
        
        
        
        />


    </View>
  )
}

export default CategoriesScreen