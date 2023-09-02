
import { Children } from "react";
import "./Button.css";
function Button(props){

return <div className="Div">
    <button type={props.type} id={props.id}>
         {props.data}
         {props.children}
    </button>
</div>

}
export default Button;