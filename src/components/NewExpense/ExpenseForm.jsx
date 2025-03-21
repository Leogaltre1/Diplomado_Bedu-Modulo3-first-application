import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    const titleInputHandler = (event) => {
        setTitle(event.target.value);
    }
    const amountInputHandler = (event) => {
        setAmount(event.target.value);
    }
    const dateInputHandler = (event) => {
        setDate(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        const expense = {
            title: title,
            amount,
            date
        }
        console.log(expense);
    }
    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Description</label>
                    <input value={title} onChange={titleInputHandler} type="text" />
                </div>
                <div className="new-expense-control">
                    <label>Monto</label>
                    <input value={amount} onChange={amountInputHandler} type="number" min='1' step='1' />
                </div>
                <div className="new-expense-control">
                    <label>Fecha</label>
                    <input value={date} onChange={dateInputHandler} type="date" min='2023-01-01' max='2030-12-31' />
                </div>
            </div>
            <div className="new-expense-actions">
                <button type="submit">Agregar</button>
            </div>
        </form>
    )
}

export default ExpenseForm

/*

--- Maneras de realizar un metodo
--- 1. 
const ExpenseForm = () => { ... }
export default ExpenseForm
--- 2. 
export default function ExpenseForm() { ... }

--- Cuando este se invoca, no es necesario pasar el parametro explicitamente
const submitHandler = (event) => {
--- Invocacion
onSubmit={submitHandler}
--- Invocacion explicita
onSubmit={(event) => submitHandler(event)}

// Evita que se recargue la pagina
event.preventDefault();

El evento onChange
Obtiene los cambios ingresados en output

States vs Props
Estados vs Propiedades

Nota:
Los componentes crean elementos
Y los elementos son renderizados por react
Un componente es una funcion que devuelve un elemento
Y react renderiza este elemento


--- HooK - useState
Voy a crear el estado
Y al estado mismo osea el valor le voy a llamar title
Y a la funcion que setea el valor setTitle

Hook
Envia lo necesario en forma de componente
Un hook es una funcion que te regresa algo
Te regresa un array
const [title, setTitle] = useState('')
- A esto se le llama destructuracion

Te regresa el estado y 
te regresa la funcion con la cual tu puedes modificar el estado

useState('')
Con esto se le indica el valor inicial que tiene el estado
Para este caso es vacio NO nulo

Cuando se crea el
setTitle(event.target.value);
Provoca que ahora se pueda predefinir un valor en el return
<input value={title} onChange={titleInputHandler} type="text" />
<input onChange={titleInputHandler} type="text" />

--- Control dentro de React
Basicamente es
Mi input esta controlado por una funcion llamada setName
Y esa funcion me llama al valor

Inputs controlados y inputs descontrolados

Recordemos que desde el form se estan controlando todos los valores
Simplifica el proceso de diseño

--- Mencion de libreria  antes de 1:26 hrs

--- Creacion de un objeto dentro de submitHandler
const expense = {
    title: title,
    amount: amout,
    date: date
}

Como el key y el value es el mismo
Se obvia su value y solo se incluye su key

Con ese evento submit se crea un objeto
*/