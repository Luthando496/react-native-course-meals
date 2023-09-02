import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {

  const myScreen ={
    headerTintColor: '#fff',
    headerStyle: {
      backgroundColor: '#129980',

    },
    contentStyle:{
      backgroundColor: 'pink'
    }
  }

  
  return (
    <>
    <StatusBar style='light'/>

    <NavigationContainer>
    <Stack.Navigator screenOptions={myScreen} >
        <Stack.Screen name="MealsCategories" options={{
          title:"All Categories",
          
        }} component={CategoriesScreen} />
        <Stack.Screen name="MealsOveriew" component={MealsOverViewScreen} 

        />
        <Stack.Screen  name="MealDetails" component={MealsDetailsScreen} 

        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
