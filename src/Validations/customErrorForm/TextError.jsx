//Creating the texterror to show text error on create flashcard when user enters some invalid values
 import React from "react";

 const TextError = (props) => {
   return <div className="text-sm text-red-500">{props.children}</div>;
 };
 
 export default TextError;