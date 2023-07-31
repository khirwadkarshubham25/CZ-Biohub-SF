import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const FibonacciResult = () => {

    const [isValue, setIsValue] = useState(undefined);
    const {state} = useLocation();
    const navigate1 = useNavigate();
    useEffect(() =>{
        setIsValue(state.data)
    });
    return(
        <React.Fragment>
            <div className='header'>Fibonacci Series</div>
            <div className='input-container'>
                <label className='result-label'>Fibonacci Series for {state.number}</label>
                <div className='result-container'>
                    <p className="result">
                        {isValue}
                    </p>
                </div>
                <button className='button' onClick={() => {navigate1('/fibonacci')}}>Back</button>
            </div>
        </React.Fragment>
    );
}

export default FibonacciResult;