import React from "react";
import { useNavigate } from "react-router-dom";

export const BackButton = () => {
    const navigate = useNavigate();
    
    const handleBackButton = () => {
        navigate(-1)
    }
    return(
       <div>
        <button onClick={handleBackButton}>Voltar</button>
       </div> 
    )
}