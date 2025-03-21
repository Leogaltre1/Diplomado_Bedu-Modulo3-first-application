//import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense'
import Expenses from './components/Expenses/Expenses';
import './App.css';
import './components/Expenses/Expenses.css';


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
      <NewExpense />
      <Expenses items={expenses}/>
      
    </div> //Solo se puede retornar un solo componente
  )
}

export default App