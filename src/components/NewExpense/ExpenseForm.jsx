import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpense}) => {
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
        const expense = {
            title,
            amount,
            date: new Date(date)
        }
        onSaveExpense(expense);
        //console.log(expense);
        setTitle('');
        setAmount('');
        setDate('');
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

Con ese evento submit se crea un objeto ...

--- data
Es una variable de estado

...data
Mantiene los valores actuales de los campos de entrada del formulario. 
El valor inicial de cada propiedad es una cadena vacía, lo que indica 
que al principio los campos están vacíos


const titleInputHandler = (event) => {
    setData({
        ...data, // Mantiene los valores previos
        title: event.target.value // Actualiza el título con el valor ingresado
    });
};

El uso de ...data en la actualización es una forma de desestructuración 
y asegura que los valores previos de amount y date se mantengan mientras 
solo se actualiza el title

--- prevState
Es una palabra reservada
Para tomar una captura del ultimo estado previo

---¿Por qué se usa "data" en lugar de usar estados separados para 
title, amount, y date?
El uso de un solo objeto data en lugar de manejar múltiples estados 
(title, amount, date) tiene ventajas como:

Simplificación:
Agrupar los datos en un solo estado reduce el número de variables de estado, 
lo que puede ser más fácil de manejar cuando se tienen formularios con 
múltiples campos.

Manejo de un solo objeto:
Al tener un solo estado (data), se facilita el manejo de la información 
cuando se necesita enviar el formulario o hacer algo con los valores de 
todos los campos, ya que están todos en un solo objeto

Eficiencia en la actualizacion del estado
const titleInputHandler = (event) => {
    setData({
        ...data,
        title: event.target.value
    });
};

En este código, se está utilizando directamente el valor actual de data al 
momento de ejecutar la función titleInputHandler. Es decir, el valor de data 
se obtiene en ese momento exacto en que se ejecuta la función, y luego se 
actualiza el estado usando ese valor. Sin embargo, el estado en React es 
asincrónico y las actualizaciones no ocurren de manera inmediata. 

Si se hace una serie de actualizaciones de estado consecutivas en el mismo 
ciclo de ejecución, es posible que data no esté actualizado al momento de 
la siguiente actualización de estado, lo que puede dar lugar a inconsistencias.

const titleInputHandler = (event) => { //Con esto se trabaja de forma funcional
    setData((prevState) => ({
        ...prevState,
        title: event.target.value
    }))
}

En este caso, se está usando una función de actualización 
(setData((prevState) => {...})), donde prevState es el valor más reciente 
del estado, proporcionado automáticamente por React. Este enfoque es más 
seguro, porque garantiza que React usará la versión más actual del estado 
al realizar la actualización. Incluso si varias actualizaciones de estado 
ocurren de manera asincrónica, cada actualización estará basada en el 
estado más actualizado, evitando problemas de sincronización.

Primer código: Utiliza el valor de data en el momento de la ejecución, 
lo que puede llevar a inconsistencias si se actualiza el estado de 
manera asincrónica y las actualizaciones no se sincronizan correctamente.
Segundo código: Utiliza prevState, lo que garantiza que siempre se 
actualiza el estado basado en la versión más reciente, incluso cuando 
las actualizaciones de estado son asincrónicas.

--- Closures?

--- Enviar parametro de Hijo a Padre
A traves de una prop manda una funcion de padre a hijo
Hace que hijo haga algo esa funcion y retorna su valor de hijo a padre
Parent: NewExpense.jsx
Children: ExpenseForm.jsx

const submitHandler = (event) => {
    event.preventDefault();
    const expense = {
        title,
        amount,
        date: new Date(date)
    }
    onSaveExpense(expense);
    //console.log(expense);
    setTitle('');
    setAmount('');
    setDate('');
}

date: new Date(date)
Es necesario declararlo como objeto tipo date

Posterior a haber llenado el formulario
Es necesario limpiarlo y se hace a traves del metodo set de cada Hook
de useState()
*/