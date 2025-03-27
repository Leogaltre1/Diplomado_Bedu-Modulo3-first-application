import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

import "./App.css";

function App() {
    const [expenses, setExpenses] = useState([]);

    const addExpenseHandler = (expenses) => {
        setExpenses((prevState) => [expenses, ...prevState]);
    };
    /*   const expenses = [
    {
      id: Math.random(),
      date: new Date(2022, 4, 23),
      title: "Libros",
      amount: 250
    },
    {
      id: Math.random(),
      date: new Date(2022, 2, 20),
      title: "Cafe",
      amount: 50
    },
    {
      id: Math.random(),
      date: new Date(2022, 3, 18),
      title: "Comida",
      amount: 600
    }
  ]; */

    return (
        <div>
            <div>Hola Mundo</div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div> //Solo se puede retornar un solo componente
    );
}

export default App;

/*
Modelo vista controlador
Donde App es el controlador
*/
