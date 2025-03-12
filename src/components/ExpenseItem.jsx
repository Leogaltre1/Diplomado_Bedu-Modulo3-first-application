import './ExpenseItem.css'

function ExpenseItem() {
    const date = new Date(2025, 3, 8);
    const title = "Libros";
    const amount = 250;
    
    return(
        <div className='expense-item'>
            <div>{date.toLocaleDateString()}</div>
            <div className='expense-item-descrition'>
                <h2>{title}</h2>
                <div className='expense-item-price'>${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem //Esto significa que se usara en todos lados