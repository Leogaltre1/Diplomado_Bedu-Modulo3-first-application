import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

function ExpenseItem({date, title='Empty data', amount=0}) {

    return(
        <Card className='expense-item'>
            <ExpenseDate date={date}/>
            <div className='expense-item-descrition'>
                <h2>{title}</h2>
                <div className='expense-item-price'>${amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem //Esto significa que se usara en todos lados