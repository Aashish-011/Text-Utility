import React from 'react'

export default function About(props) {
  return (
   <>
   <div style={{color: props.mode==='info'?'#363636':'white'}}>
   <h1 style={{textDecoration:'underline'}}>About Text-Utility</h1>
   <ul id="about"> 
    <li>Text-Utility <strong>Speak</strong> feature can read all your text for you so you can hear them as many times you want.</li>
    <li>Text-Utility helps you to <strong>Analyze</strong> your text <strong>Efficiently</strong> by <strong>Word Counter</strong> or <strong>Character Counter</strong> or <strong>Minutes read</strong> features.</li>
    <li>You can quickly analyze number of words or characters you have in text.</li>
    <li>You can even Manipulate your text like converting them in <strong>UpperCase</strong>, converting them in <strong>LowerCase</strong>, <strong>Copy them</strong>, <strong>Remove Extra Spaces</strong> and <strong>Capitalize your text</strong>. </li>
    <li>Text-Utility with all its features is completely <strong>Free</strong> to use by you.</li>
    <li>This Text-Utility website is <strong>Browser Compatible</strong> and also <strong>Device Compatible</strong></li>
   </ul>
   </div>
   <div id="footer" style={{backgroundColor: props.mode==='info'?'#1f365e':'#5e5d5d'}}>
    <div className="txt">
    <p style={{textDecoration:'underline',fontSize:'2rem'}} >Author</p>
    <h3><span id='name'>Aashish Lal</span> is the creater of this Text-Utility website.</h3>
    <p>&copy; Copyright:2023 Text-Utility</p>
   </div>
   </div>
   </>
  )
}

