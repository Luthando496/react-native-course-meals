import React,{useLayoutEffect} from 'react'
import { View,Text ,Image, ScrollView,Button} from 'react-native'
import { MEALS } from '../data/dummy-data'
import IconButton from '../components/IconButton'


const MealsDetailsScreen = ({navigation,route}) => {
    const id = route.params.itemId

    const HEADER = MEALS.find((meal)=> meal.id === id)

    const btnPressed = () => {
        console.log('hello luthando')
    }
  
    useLayoutEffect(()=>{
    
      navigation.setOptions({
          headerRight:()=>{
            return(
              <IconButton icon={'star'} color={'white'} btnPressed={btnPressed} />
            )
          }
      })
  
    },[navigation])


  return (
    <ScrollView className='' >
        <View>
            <View>
                <Image source={{uri:HEADER.imageUrl}} style={{width:'100%', height:185}} />
            </View>
            <View>
                <Text className='text-center my-5 text-xl text-white font-bold'>{HEADER.title}</Text>
            </View>
            <View className='flex justify-center flex-row gap-8'>
                <View ClassName=''>
                    <Text className='  text-base text-white font-bold'>{HEADER.duration}m</Text>
                </View>
                <View ClassName=''>
                    <Text className='  text-base text-white font-bold'>{HEADER.complexity.toUpperCase()}</Text>
                </View>
                <View ClassName=''>
                    <Text className='  text-base text-white font-bold'>{HEADER.affordability.toUpperCase()}</Text>
                </View>
            </View>
            <View  className='px-16 mt-6'>
                <Text className='text-center border-b-2 pb-2 border-b-white my-5 text-xl text-white font-bold'>Ingredients</Text>

                {HEADER.ingredients.map((ing,index)=>(
                    <View key={index} className='rounded-lg py-2 bg-white mb-5'>
                        <Text className='text-center text-orange-400 font-thin text-xl'>{ing}</Text>
                    </View>
                ))}
            </View>

            <View className='px-16 mt-6'>
                <Text className='text-center border-b-2 pb-2 border-b-white my-5 text-xl text-white font-bold'>Steps</Text>

                {HEADER.steps.map((ing,index)=>(
                    <View key={index} className='rounded-lg py-2 bg-white mb-5'>
                        <Text className='text-center text-orange-400 font-thin text-xl'>{ing}</Text>
                    </View>
                ))}
            </View>

        </View>

    </ScrollView>
  )
}

export default MealsDetailsScreen;