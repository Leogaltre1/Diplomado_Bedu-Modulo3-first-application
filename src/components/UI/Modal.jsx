import { createPortal } from "react-dom";
import Card from "./Card";
import Button from "./Button";
import styles from "./Modal.module.css";

function BackDrop(onConfirm) {
    return <div className={styles.backdrop} onClick={onConfirm} />;
}

function ModalOverlay({ title, message, onConfirm }) {
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

function Modal({ title, message, onConfirm }) {
    return (
        <>
            {createPortal(
                <BackDrop onConfirm={onConfirm} />,
                document.getElementById("modal-backdrop")
            )}
            {createPortal(
                <ModalOverlay
                    title={title}
                    message={message}
                    onConfirm={onConfirm}
                />,
                document.getElementById("modal-root")
            )}
        </>
    );
}

export default Modal;

/*
https://es.react.dev/reference/react-dom/createPortal
Portales 
Permite la creacion de modales en la ubicacion que estos se requieran
*/
