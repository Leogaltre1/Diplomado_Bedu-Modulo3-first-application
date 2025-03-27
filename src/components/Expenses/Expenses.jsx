import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses({ items }) {
    const [year, setYear] = useState("2025");

    const changeFilterHandler = (selectedYear) => {
        setYear(selectedYear);
    };

    const filteredExpenses = items.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selectedYear={year}
                onChangeFilter={changeFilterHandler}
            />
            {filteredExpenses.length === 0 ? (
                <h3>No se encontraron gastos</h3>
            ) : (
                filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        date={expense.date}
                        title={expense.title}
                        amount={expense.amount}
                    />
                ))
            )}
        </Card>
    );
} //Card es unicamente para darle sombreado

export default Expenses;

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
