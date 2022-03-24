import classes from "./Input.module.css"

const Input = props =>{
    return <div className={classes.input}>
        <label htmlFor={props.input.id} >{props.label}</label>
        {/*the spread operator ensures all the key value pairs are added as props to input  */}
        <input {...props.input}/> 
    </div>
};

export default Input;