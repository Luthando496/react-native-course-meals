import React from 'react'
import { Text,View ,Pressable, Image,StyleSheet} from 'react-native'
import { useNavigation } from '@react-navigation/native';



const MealItem = ({title,imageUrl,duration,complexity,affordability,itemId}) => {
  const navigation = useNavigation();

  const onNavigate=()=>{
    navigation.navigate('MealDetails',{itemId:itemId})
  }


  return (
    <View className='border border-gray-200 mb-10 bg-white rounded-2xl shadow-2xl overflow-hidden ' >
      <Pressable onPress={onNavigate} style={({pressed})=> (pressed ? style.pressedBtn :null)} android_ripple={{color:'#ccc'}}>
        <View>
        <Image source={{uri:imageUrl}} className='w-full rounded-t-2xl h-[200px]' />
        <Text className='text-center py-2 tracking-[2px] leading-[1.9] text-2xl font-semibold'>{title}</Text>
        </View>

        <View className='px-4 flex-row gap-4'>
          <Text className=' tracking-[2px]  py-1 text-base font-semibold'>{duration}m</Text>
          <Text className=' tracking-[2px]  py-1 text-base font-semibold'>{complexity.toUpperCase()}</Text>
          <Text className=' tracking-[2px]  py-1 text-base font-semibold'>{affordability.toUpperCase()}</Text>
        </View>

      </Pressable>
    </View>
  )
}


const style=StyleSheet.create({
  pressedBtn:{
    opacity:0.8,
  }
})

export default MealItem