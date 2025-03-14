import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses({items}){
    
    return(
        <Card className="expenses">
            {
                items.map(
                    (expense)=>(
                        <ExpenseItem
                            id={expense.id}
                            date={expense.date}
                            title={expense.title}
                            amount={expense.amount}
                        />
                    )
                )
            }
        </Card>
    );
}//Card es unicamente para darle sombreado

export default Expenses

/*
Retorno implicito
(expense)=>(
    <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
    />
)

Retorno explicito
(expense)=>{
    return <ExpenseItem
        date={expense.date}
        title={expense.title}
        amount={expense.amount}
    />
}
&&
(expense)=>{
    return(
        <ExpenseItem
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
        />
    )
}
*/

/*
const expense = function(expenseItem) {
    return (
        <ExpenseItem
            date={expenseItem.date}
            title={expenseItem.title}
            amount={expenseItem.amount}
        />
    );
}
items.map(expense);

function expense(expenseItem) {
    return (
        <ExpenseItem
            date={expenseItem.date}
            title={expenseItem.title}
            amount={expenseItem.amount}
        />
    );
}
items.map(expense);
*/