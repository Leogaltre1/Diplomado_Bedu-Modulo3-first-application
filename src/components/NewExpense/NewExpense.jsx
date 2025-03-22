import Card from "../UI/Card"
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'

const NewExpense = ({onAddExpense}) => {
    const saveExpense = (expense) => {
        const newExpense = {
            ...expense,
            id: Math.random().toString()
        }
        //console.log('Print since NewExpense.jsx ',newExpense);
        onAddExpense(newExpense);
    }

    return (
        <Card className="new-expense">
            <ExpenseForm onSaveExpense={saveExpense} />
        </Card>
    )
}

export default NewExpense

/*
Tiene que hacerte saber a App.jsx ciertos valores
El objetivo es crear una funcion donde adentro vamos 
a crear un objeto donde vamos a enviar la informacion
<NewExpense />

*/