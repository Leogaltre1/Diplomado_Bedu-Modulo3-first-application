import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

function Modal({ title, message, onConfirm }) {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{title}</h2>
            </header>
            <div className={styles.content}>
                <p>{message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={onConfirm}>Aceptar</Button>
            </footer>
        </Card>
    );
}

export default Modal;
