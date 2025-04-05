import { useState } from "react";
import styled from "styled-components";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
//import './ExpenseForm.css'
//import styles from "./ExpenseForm.module.css";

const FormControls = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1rem;
    text-align: left;
`;

const FormControl = styled.div`
    & label {
        font-weight: bold;
        margin-bottom: 0.5rem;
        display: block;
        outline: none;
        color: ${({ invalid }) => (invalid ? "#ad0000" : "#000")};
    }

    & input {
        font: inherit;
        padding: 0.5rem;
        width: 20rem;
        max-width: 100%;
        border-radius: 6px;
        border: 1px solid ${(props) => (props.invalid ? "#ad0000" : "#ccc")};
    }
`;
/* 
const Button = styled.button`
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border: 1px solid #464646;
    background-color: #464646;
    color: #e5e5e5;
    border-radius: 12px;
    margin-right: 1rem;
    width: 100%;

    &:hover,
    &:active {
        background-color: #afafaf;
        border-color: #afafaf;
        color: black;
    }

    @media (min-width: 768px) {
        width: auto;
    }
`; */

const FormActions = styled.div`
    text-align: right;
`;

const ExpenseForm = ({ onSaveExpense }) => {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [isTitleValid, setIsTitleValid] = useState(true);
    const [isAmountValid, setIsAmountValid] = useState(true);
    const [isDateValid, setIsDateValid] = useState(true);
    const [error, setError] = useState(null);

    // Validar que sus campos no esten vacios y asigna su valor
    const titleInputHandler = (event) => {
        const { value } = event.target;
        if (value.length > 0) setIsTitleValid(true);
        setTitle(value);
    };
    const amountInputHandler = (event) => {
        const { value } = event.target;
        if (value.length > 0) setIsAmountValid(true);
        setAmount(value);
    };
    const dateInputHandler = (event) => {
        const { value } = event.target;
        if (value.length > 0) setIsDateValid(true);

        if (new Date(value) > new Date()) {
            setIsDateValid(false);
            setError({
                title: "Fecha invalida",
                message: `Fecha ingresada es incorrecta, no debe ser mayor a ${new Date().toLocaleDateString()}`,
            });
        }
        setDate(value);
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

        validateFields();
        if (!(isTitleValid && isAmountValid && isDateValid)) return;

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

    // Validar que sus campos no esten vacios
    const validateFields = () => {
        if (title.trim().length === 0) {
            setIsTitleValid(false);
        }

        if (amount.trim().length === 0) {
            setIsAmountValid(false);
        }

        if (date.trim().length === 0) {
            setIsDateValid(false);
        }
    };

    const toggleModal = () => {
        setError(null);
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <FormControls>
                    <FormControl invalid={!isTitleValid}>
                        <label>Description</label>
                        <input
                            value={title}
                            onChange={titleInputHandler}
                            type="text"
                        />
                    </FormControl>
                    <FormControl invalid={!isAmountValid}>
                        <label>Monto</label>
                        <input
                            value={amount}
                            onChange={amountInputHandler}
                            type="number"
                            min="1"
                            step="1"
                        />
                    </FormControl>
                    <FormControl invalid={!isDateValid}>
                        <label>Fecha</label>
                        <input
                            value={date}
                            onChange={dateInputHandler}
                            type="date"
                            min="2023-01-01"
                            max="2030-12-31"
                        />
                    </FormControl>
                </FormControls>
                <FormActions>
                    <Button type="submit">Agregar</Button>
                </FormActions>
            </form>
            {error && (
                <Modal
                    title={error.title}
                    message={error.message}
                    onConfirm={toggleModal}
                />
            )}
        </>
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

Al usar style components
La apariencia que se configuraba directamente sobre la etiqueta con style
Ahora se crea la misma apariencia usando css y o sass dentro del mismo js
o siendo importado desde otro js.

Sustituyendo a la etiqueta de html y siendo nombrada de la manera deseada


<FormActions>
    <button type="submit">Agregar</button>
</FormActions>

<div className={styles["new-expense-actions"]}>
    <button type="submit">Agregar</button>
</div>

>>> Validacion espacio vacio
if (title.trim().length === 0) {
    setIsValid(false);
    return;
}
Si el Input esta vacio envia un false en setIsValid

Condicion en return de ExpenseForm
invalid={!isValid}>
Si !isValid===false entonces es true
Por lo tanto invalid es true

Asi que en
const FormControl = styled.div`...
color: ${({ invalid }) => (invalid ? "#ad0000" : "#000")};`
Si invalid es true aplica #ad0000
*/
