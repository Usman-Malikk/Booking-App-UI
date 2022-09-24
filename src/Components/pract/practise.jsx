import { isFuture } from "date-fns";

export default (props) =>{

    return(
        <>
        {(props.name != '')?
        <h1>My name is {props.name}</h1>
        :
<h1>My name is not available</h1>
        }
            

    
        </>

    );

}