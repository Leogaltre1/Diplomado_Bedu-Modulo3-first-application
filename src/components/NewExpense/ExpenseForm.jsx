import { useState } from "react";
//import './ExpenseForm.css'
import styles from "./ExpenseForm.module.css";

const ExpenseForm = ({ onSaveExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isValid, setIsValid] = useState(true);

    const titleInputHandler = (event) => {
        setTitle(event.target.value);
    };
    const amountInputHandler = (event) => {
        setAmount(event.target.value);
    };
    const dateInputHandler = (event) => {
        setDate(event.target.value);
    };

    /*     const [data, setData] = useState({
        title: '',
        amount: '',
        date: ''
    })

    const titleInputHandler = (event) => {
        setData((prevState) => ({
            ...prevState,
            title: event.target.value
        }))
    }

    const amountInputHandler = (event) => {
        setData((prevState) => ({
            ...prevState,
            amount: event.target.value
        }))
    }

    const dateInputHandler = (event) => {
        setData((prevState) => ({
            ...prevState,
            date: event.target.value
        }))
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: data.title,
            amount: data.amount,
            date: data.date
        }
        console.log(expense);
    } */

    const submitHandler = (event) => {
        event.preventDefault();

        /*Validar que los campos no esten vacios*/
        if (title.trim().length === 0) {
            setIsValid(false);
            return;
        }
        const expense = {
            title,
            amount,
            date: new Date(date),
        };
        onSaveExpense(expense);
        //console.log(expense);
        setTitle("");
        setAmount("");
        setDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={styles["new-expense-controls"]}>
                <div
                    className={`${styles["new-expense-control"]} ${
                        !isValid && styles.invalid
                    }`}
                >
                    <label>Description</label>
                    <input
                        value={title}
                        onChange={titleInputHandler}
                        type="text"
                    />
                </div>
                <div className={styles["new-expense-control"]}>
                    <label>Monto</label>
                    <input
                        value={amount}
                        onChange={amountInputHandler}
                        type="number"
                        min="1"
                        step="1"
                    />
                </div>
                <div className={styles["new-expense-control"]}>
                    <label>Fecha</label>
                    <input
                        value={date}
                        onChange={dateInputHandler}
                        type="date"
                        min="2023-01-01"
                        max="2030-12-31"
                    />
                </div>
            </div>
            <div className={styles["new-expense-actions"]}>
                <button type="submit">Agregar</button>
            </div>
        </form>
    );
};

export default ExpenseForm;

/*
Clase 3
Borra espacios adelante y atras
trim()

Al usar styles de esta forma
Lo que estamos haciendo es pasar de un css
a una clase que contiene esos estilos de css
console.log(styles);
object {
    invalid: "_invalid_uiifs_55",
    new-expense-actions: "_new-expense-actions_blabla"
    new-expense-control: "_new-expense-control_blabla"
    new-expense-controls:" _new-expense-controls_blabla"
}
*/
