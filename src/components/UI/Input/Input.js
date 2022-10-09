import React,{useRef,useImperativeHandle} from "react";
import classes from "../../Login/Login.module.css";

const Input = React.forwardRef( (props,ref) => {
	const inputRef = useRef();
	const activate = () => {
		inputRef.current.focus();
	}

	useImperativeHandle(ref,()=>{
		return {
			focus:activate,
		};
	});
	return 	<div
			className={`${classes.control} ${
				props.stateCheck === false ? classes.invalid : ''
			}`}>
			<label>{props.label}</label>
			<input
				ref={inputRef}
				type={props.inputType}
				value={props.inputState.value}
				onChange={props.changeHandler}
				onBlur={props.validateHandler}
			/>
		</div>


});

export default Input;