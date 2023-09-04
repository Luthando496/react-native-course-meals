import {createContext,useState} from 'react'



export const FavoritesContext = createContext({
    ids:[],
    addFavorite:(id)=>{

    },
    removeFavorite:(id)=>{

    },
    
})









const FavoritesProvider = ({children}) => {
    const [favoriteId,setFavorites] = useState([])

    const addFavorite =(id)=>{
        setFavorites((prev)=> [...prev,id])
    }

    const removeFavorite =(id)=>{
        setFavorites((prev)=> prev.filter((filterId)=> filterId !== id))
    }

    const value={
        ids:favoriteId,
        addMeal:addFavorite,
        removeMeal:removeFavorite
    }

    return (
        <FavoritesContext.Provider value={value}>
            {children}
        </FavoritesContext.Provider>
    )
}

export default FavoritesProvider

