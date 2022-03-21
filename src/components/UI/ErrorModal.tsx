import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props: {title: string; message: string}) => {
    return (
        <div>
            <div className={classes.backdrop}></div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button>OK</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;