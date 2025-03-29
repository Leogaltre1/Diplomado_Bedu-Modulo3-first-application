import "./Card.css";
// Famous prop children
function Card({ className, children }) {
    const classes = `card ${className}`;

    return (
        <div>
            <div className={classes}>{children}</div>
        </div>
    );
}

export default Card;
