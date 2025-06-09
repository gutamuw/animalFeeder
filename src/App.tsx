import "./App.css";
import { RouterProvider } from "react-router";
import Router from "./routes/Routes";
import { AnimalsContext } from "./contexts/AnimalsContext";
import { useEffect, useState } from "react";
import { getAnimals } from "./services/animalsService";
import type { IAnimal } from "./models/IAnimal";

function App() {
  const [animals, setAnimals] = useState<IAnimal[]>([]); //Should be repalced with reducer later

  useEffect(() => {
    const getData = async () => {
      const data = await getAnimals();
      console.log("Fetched animals:", data);
      setAnimals(data);
    };
    getData();
  }, []);

  return (
    <AnimalsContext.Provider value={{ animals }}>
      <RouterProvider router={Router} />
    </AnimalsContext.Provider>
  );
}

export default App;
