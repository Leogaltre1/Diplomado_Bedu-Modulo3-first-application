import styles from "./Button.module.css";

function Button({ children, type, onClick }) {
    return (
        <button
            className={styles.button}
            type={type || "button"}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
