import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverViewScreen from './screens/MealsOverViewScreen';
import MealsDetailsScreen from './screens/MealsDetailsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavouritesScreen';
import { AntDesign,Ionicons } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const DrawerNavigation=()=>{


  return (
    <Drawer.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#129980',
  
      },
      sceneContainerStyle:{
        backgroundColor: 'pink'
      },
      drawerActiveBackgroundColor:"blue"
    }}>
      <Drawer.Screen name="Categories" options={
        {
          title: 'All Categories',
          drawerIcon: ({ color, size }) => (
            <AntDesign name="bars" size={size} color={color} />
          ),
        }
      } component={CategoriesScreen} />
      <Drawer.Screen options={
        {
          drawerIcon: ({ color, size }) => (
            <Ionicons name="md-star-outline" size={size} color={color} />
          ),
        }
      } name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  ) 
}

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
          headerShown: false,
          
        }} component={DrawerNavigation} />


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
