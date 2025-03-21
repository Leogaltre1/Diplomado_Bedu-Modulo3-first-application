import './ExpenseForm.css'

const ExpenseForm = () => {
    const titleInputHandler = (event) => {
        console.log(`Title: ${event.target.value}`);
    }
    const amountInputHandler = (event) => {
        console.log(`Amount: ${event.target.value}`);
    }
    const dateInputHandler = (event) => {
        console.log(`Date: ${event.target.value}`);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        console.log(event);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense-controls">
                <div className="new-expense-control">
                    <label>Description</label>
                    <input onChange={titleInputHandler} type="text" />
                </div>
                <div className="new-expense-control">
                    <label>Monto</label>
                    <input onChange={amountInputHandler} type="number" min='1' step='1' />
                </div>
                <div className="new-expense-control">
                    <label>Fecha</label>
                    <input onChange={dateInputHandler} type="date" min='2023-01-01' max='2030-12-31' />
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
*/