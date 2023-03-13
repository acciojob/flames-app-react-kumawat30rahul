import React, { useState } from "react";
import './App.css';

function App(){
  const arr = ["Siblings","Friends","Love","Affection","Marriage","Enemy","Please Enter valid input"]

  const [firstPname,setFirstPname] = useState('');
  const [secondPname,setSecondPname] = useState('');

  const [answer,setAnswer] = useState('');

  const love=(event) => {
    
    const charArray1 = firstPname.split('');
    const charArray2 = secondPname.split('');

    const uniqueChars = [];
    for (let i = 0; i < charArray1.length; i++) {
      const char = charArray1[i];
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }

    for (let i = 0; i < charArray2.length; i++) {
      const char = charArray2[i];
      if (!uniqueChars.includes(char)) {
        uniqueChars.push(char);
      }
    }
    let n = uniqueChars.length;
    let answer = n % 6;

    if(answer<6){
      setAnswer(arr[answer]);
    }else{
      setAnswer(arr[6]);
    }
  }

  const clear =()=>{
    setFirstPname('');
    setSecondPname('');
    setAnswer("");
  }
        return(
            <div id="main">
               <input className="name1" data-testid="input1" value={firstPname} onChange={(event)=>{setFirstPname(event.target.value)}}/>
               <input className="name2" data-testid="input2" value={secondPname} onChange={(event)=>{setSecondPname(event.target.value)}}/>
               <button data-testid="calculate_relationship" onClick={love}>Calculate Relationship Future</button>
               <button data-testid="clear" onClick={clear} >Clear</button>
               <h3 data-testid="answer">{answer}</h3>
            </div>
        )
}


export default App;