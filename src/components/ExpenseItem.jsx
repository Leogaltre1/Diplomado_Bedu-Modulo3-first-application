import './ExpenseItem.css'

function ExpenseItem() {
    const date = new Date(2025, 3, 8);
    const title = Libros;
    const amount = 250;
    
    return(
        <div className='expense-item'>
            <div>Marzo 8 2025</div>
            <div className='expense-item-descrition'>
                <h2>Libros</h2>
                <div className='expense-item-price'>$250</div>
            </div>
        </div>
    );
}

export default ExpenseItem //Esto significa que se usara en todos lados