import './App.css';
import data from './data'
import {useState} from 'react';
function App() {
  const [btnst,setBtnst] = useState(1);
  const [accst,setAccst] = useState(data.map((elem)=>{return -1}));

  const handleSelect = (ind,btnst)=>{
      let temp = [...accst];
      temp[ind] *= -1;
      if(btnst<0)for(let i=0;i<temp.length;i++)if(i!==ind)temp[i]=-1;
      setAccst(temp);
  }
  return (
    <div className="acc-wrapper">
      <button onClick={()=>setBtnst(btnst*-1)}>
        {(btnst===1)? "Disable Multi Selection":"Enable Multi Selection"}
      </button>
      <div className="accordian">
        {data.map((elem,key)=>{
          return(
            <div className="item">
              <h2>{elem.question}</h2>
              <button onClick={()=>handleSelect(key,btnst)}>+</button>
              <p style={(accst[key]<0)?{display:"none"}:{display:"block"}}>{elem.answer}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default App;
