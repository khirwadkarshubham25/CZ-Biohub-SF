import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import '.././App.css';
import { json } from "react-router-dom";


const Fibonacci = () =>{

    const [isError, setIsError] = useState(undefined);
    const inputRef = useRef(undefined);
    const navigate = useNavigate();
    // Get data from the API
    const callApi = (number) => {
        return fetch(
            `http://localhost:8000/fibonacci_series?number=${number}`
        )
    }

    // On success navigate to the result page to display series or show error for the invalid inputs.
    const clickSubmit = () => {
        console.log(inputRef.current.value);
        if(inputRef.current){
            let val = inputRef.current.value;
            if(!val){
                setIsError("Invalid input number.")
            }
            callApi(val)
            .then((response) => response.json())
            .then((jsonData) => {

                if(jsonData['message']){
                    setIsError(jsonData['message'])
                }else{
                    let input = document.getElementsByClassName('input');
                    input.value = "";
                    navigate('/fibonacci-result', {
                        state:{
                            data: jsonData['data'],
                            number: inputRef.current.value
                        }
                    })
                }
            })
        }
    }

    return(
        <React.Fragment>
            <div className='header'>Fibonacci Series</div>
            <div className='input-container'>
                <label>Enter a number to generate fibonacci series</label>
                <input className='input' ref={inputRef} type="text"></input>
                {
                    isError &&
                    <label className='error-text'>{isError}</label>
                }
                <button className="button" onClick={clickSubmit}>Submit</button>
            </div>
        </React.Fragment>
    )
}

export default Fibonacci;