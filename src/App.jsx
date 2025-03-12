import ExpenseItem from './components/ExpenseItem';
import './App.css';

function App() {
  const expenses = [
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
  ];

  return (
    <div>
      <div>Hola Mundo</div>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
      />
    </div> //Solo se puede retornar un solo componente
  )
}

export default App


/*
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ExpenseItem from "./components/ExpenseItem"

function App() {
  const expenses = [
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
  ];
  return (
    <div>
      <div>Hola Mundo</div>
      
    </div>
  )
}

export default App
*/