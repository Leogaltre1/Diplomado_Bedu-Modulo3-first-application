//import './ExpenseDate.css';
import styles from "./ExpenseDate.module.css";

function ExpenseDate({ date }) {
    //{date} intead of date

    console.log(styles);
    const day = date.toLocaleString("es-MX", { day: "2-digit" });
    const month = date.toLocaleString("es-MX", { month: "long" });
    const year = date.getFullYear();

    return (
        <div className={styles["expense-date"]}>
            <div className={styles["expense-date-month"]}>{month}</div>
            <div className={styles["expense-date-year"]}>{year}</div>
            <div className={styles["expense-date-day"]}>{day}</div>
        </div>
    );
}

export default ExpenseDate;

// import {} from  - NamedImport
