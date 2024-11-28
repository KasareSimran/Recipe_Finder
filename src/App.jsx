import { useEffect, useState } from "react";
import "./App.css";
import RecipeLogo from './assets/Recipelogo .png'
import RecipeCard from "./components/Recipecard.jsx";
import SearchBar from "./components/SerachBar.jsx";

 const apiUrl="https://www.themealdb.com/api/json/v1/1/search.php?s="
function App(){

  const [isloading,setIsLoading] = useState(false);
  const [query,setQuery]=useState('');
  const [recipes,setRecipes]=useState([]);

  //function to search recipe,fetching data from api
  const searchRecipes= async()=>{
    setIsLoading(true);
    const  url=apiUrl+query;
    const response=await fetch(url);
    const data=await response.json();
    // console.log(data)
    setRecipes(data.meals);
    setIsLoading(false);
  }

  useEffect(()=>{
    searchRecipes();
  },[])

  const handleSubmission=(event)=>{

    event.preventDefault();
    searchRecipes();
  }
 
  
  return(
  <div className="container">
    <h2><img src={RecipeLogo} className="logo"/>Our Recipe App</h2>
    <SearchBar
    handleSubmission={handleSubmission}
    value={query}
    onChange={event=>setQuery(event.target.value)}
    isloading={isloading}
       />
    <div className="recipes">
      {recipes?recipes.map((recipe)=>(
        <RecipeCard 
        key={recipe.idMeal}
        recipe={recipe}
        />
        
      )):"NO Recipe Available!"}

    </div>


  </div>);
}
export default App