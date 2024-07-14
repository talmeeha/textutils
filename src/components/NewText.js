import React, {useState} from 'react'

export default function NewText(props) {
    const handleUpClick = () =>{
        console.log("Uppercase was clicked"+ text);
        let newt = text.toUpperCase();
        setText(newt);
        props.showAlert("Converted to UpperCase!", "success");
    }

    const handleLoClick = () =>{
        console.log("Lowercase was clicked"+ text);
        let newt = text.toLowerCase();
        setText(newt);
        props.showAlert("Converted to LowerCase!", "success");
    }
    
    const handleOnChange = (event) =>{
        console.log("Onchange");
        setText(event.target.value);
    }
    const [text, setText] = useState(' ');
  return (
    <>
    <div className="container">
    <div>
      <h1>{props.heading} </h1>
    <div class="mb-3">
    <textarea class="form-control" value = {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-2"onClick={handleUpClick}>convert to uppercase</button>
    <button className="btn btn-primary mx-2"onClick={handleLoClick}>convert to lowercase</button>
    </div>
    </div>
 <div className="container">
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} words and {text.length} charachters</p>
    <p>{0.008*text.split(" ").length} Minutes read </p>
    <h2>Preview</h2>
    <p>{text}</p>
 </div>
    </>
  )
}
