import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";
import MealType from "../../types/MealType";

const AvailableMeals  = () => {
  const [meals, setMeals] = useState<MealType[]>([]);
  /* 
    should not return a promise. only syncronized function.
    DO NOT USE THIS WAY: useEffect(async() => { await fetch().then() },[])
    if you want to return aysnc func then simple create a new func inside which returns promise 
  */
  useEffect(() => {
    const URL = `https://${process.env.REACT_APP_FIREBASE_KEY}.firebaseio.com/meals.json`;

    const fetchMeals = async() => {
      const response = await fetch(URL, {});
      const responseData = await response.json();
      const loadedMals = [];
      for (const key in responseData) {
        loadedMals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
      }
      setMeals(loadedMals);
    }

    fetchMeals();
  },[]);
  
  const mealsList = meals.map((meal: any) => (
    <MealItem 
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />)
  );
  return <section className={classes.meals}>
      <Card>
          <ul>{mealsList}</ul>
      </Card>
  </section>
}

export default AvailableMeals;