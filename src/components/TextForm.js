import React, {useState} from 'react'
export default function TextForm(props) {
    const handleUpClick =()=>{
     let newText = text.toUpperCase();
     setText(newText);
     props.showAlert("Converted To UpperCase","warning");
    }
    const handleLcClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To LowerCase","warning");
    }
    const handleCpClick = () =>{
        let newText = text.split(" ");
        for(let i =0;i<newText.length;i++){
            newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
        }
        setText(newText.join(" "));
        props.showAlert("Fist letter capitalize","warning");
    }
    const speak = () => {
      let msg = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(msg);
      const toogle = document.getElementById('toggle')
      if (toogle.textContent === "Speak") {
          toogle.innerHTML = "Stop"
          props.showAlert("Speaking","secondry");
      }
      else {
          toogle.innerHTML = "Speak"
           window.speechSynthesis.cancel()
           props.showAlert("Stopped","warning");
      }
  }
    const handleClrClick = () =>{
        setText("");    
        props.showAlert("Cleared","warning");
    }
    const handleCopy = () =>{
      navigator.clipboard.writeText(text);
      props.showAlert("Copied","warning");
    }
    const handleSpace = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "))
      props.showAlert("Spaces handled","warning");
    }
    const handleonChange = (event) =>{
        setText(event.target.value)
    }

    const [text,setText] = useState(""); 

  return (
    <>

<div className="mb-3" style={{color: props.mode==='info'?'black':'white'}}>
  <label htmlFor="myBox" className="form-label"><h3>{props.heading}</h3></label>
  <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor: props.mode ==='dark'?'#4a4545':'white',color: props.mode==='info'?'black':'white'}} id="myBox" rows="5" placeholder='Enter your Text Here'></textarea>
</div>
<div className='container'>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleUpClick}>Convert To UpperCase</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleLcClick}>Convert To LowerCase</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleCpClick}>Capitalize First Letter</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleClrClick}>Clear Text</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} id="toggle" onClick={speak}>Speak</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleSpace}>Remove Extra Spaces</button>
<button disabled={text.length===0} className={`btn btn-${props.mode ==='dark'?'dark':'danger'} my-1 mx-1`} onClick={handleCopy}>Copy Text</button>
</div>
    <div className="container my-3" id='show' style={{color: props.mode==='info'?'black':'white'}}>
      <div id='inshow1'>
        <h3 className='my-3' style={{textDecoration:'underline'}}>Your Text Preview</h3>
        <p>{text.length>0?text:"Nothing To Preview."}</p>
        </div>
        <div id='inshow2'>
        <h3 className="my-4" style={{textDecoration:'underline'}}>Your Text Summary</h3>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.replace(/\s+/g, '').length} characters</p>
        <p>{text.length} Characters (Including Spaces)</p>
        <p>{(0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length).toFixed(2)} Minutes Read</p>
        </div>
    </div>
    </>
  )
}
