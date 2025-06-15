import { RouterProvider } from "react-router";
import Router from "./routes/Routes";
import { AnimalsContext } from "./contexts/AnimalsContext";
import { useEffect, useReducer } from "react";
import { getAnimals } from "./services/animalsService";
import { ActionTypes, AnimalReducer } from "./reducers/animalReducer";

function App() {
  const [animals, dispatch] = useReducer(AnimalReducer, []);

  useEffect(() => {
    const getData = async () => {
      const data = await getAnimals();
      dispatch({
        type: ActionTypes.LOADED,
        payload: JSON.stringify(data),
      });
    };
    getData();
  }, []);

  return (
    <AnimalsContext.Provider value={{ animals, dispatch }}>
      <RouterProvider router={Router} />
    </AnimalsContext.Provider>
  );
}

export default App;
