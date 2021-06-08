import '../sass/components/buttons.scss';

function Button({text, color, type, onClick}) {
    return <button className={`btn ${color}`} type={type} onClick={onClick}> {text}</button>
}
export default Button;

// Usage of the button
// 1) import it - import Button from 'path';
// 2) Use the component <Button text="content"/>, were "content" is the text you want on your button (Ex: content="Login")
    // For a blue button:
        // <Button text="content"/>
    // For a white button with a blue border:
        //<Button text="content" color="outline"/>