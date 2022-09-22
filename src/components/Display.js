import React, { useState } from "react";
import FormTemplates from "./PopUpSetter";
import Preview from "./VideoPlayer";

const Form = () => {
  const [text, setText] = useState("");
  const [page, setPage] = useState(0);

  
  const handleName = (val) => {
    setText(val.target.value);
  };
 
  if (page===0) {
    return(
        <>
        
        <FormTemplates
          setPage={setPage}
          page={page}
          text={text}
          setText={handleName}
          
          />
        </>
    )
  }
  return (
    <>
          <Preview/>
    </>
  );
};

export default Form;
