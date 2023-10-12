import CryptoJS from 'crypto-js';
import { useState } from 'react';
import './App.css';



function App() {

  const key = CryptoJS.enc.Utf8.parse('unaclaveultrasecreta');
  const iv = CryptoJS.enc.Utf8.parse('vectordeinicializacion');

  const [first, setfirst] = useState(" 54")
  const [ciphertext, setciphertext] = useState("");
  const [second, setsecond] = useState("")
  const encrypt =()=>{
    const ciphertext = CryptoJS.AES.encrypt(first, key, { iv }).toString();
    setsecond(ciphertext);
  }
  const uncrypt =()=>{
    const bytes = CryptoJS.AES.decrypt(ciphertext, key, { iv });
    const decryptedText = bytes.toString(CryptoJS.enc.Utf8);
    setsecond(decryptedText)
  }
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
          <div className="animate__animated animate__bounceInDown" style={{marginBottom: "10px"}}>
            <label htmlFor="first-input" style={{color: "red"}}>First Input</label>
            <input type="text" className="form-control animate__animated animate__bounceInLeft" name="first-input" id="first-input" onChange={(e)=>{
                let dato = e.target.value;
                setfirst(dato);
            }}/>
          </div>
          <div className="animate__animated animate__bounceInUp" style={{marginBottom: "10px"}}>
            <button className="btn btn-primary animate__animated animate__bounceInRight" id='boton1' onClick={encrypt}>Click Me</button>
          </div>
          <div className="animate__animated animate__bounceInDown" style={{marginBottom: "10px"}}>
            <label htmlFor="second-input" style={{color: "blue"}}>Second Input</label>
            <input type="text" className="form-control animate__animated animate__bounceInLeft" name="second-input" id="second-input" onChange={(e)=>{
                let dato = e.target.value;
                setciphertext(dato);
            }}/>
          </div>
          <div className="animate__animated animate__bounceInUp" style={{marginBottom: "10px"}}>
            <button className="btn btn-primary animate__animated animate__bounceInRight" id='boton2' onClick={uncrypt}>Click Me</button>
          </div>
          <div className="animate__animated animate__bounceInDown" style={{marginBottom: "10px"}}>
            <label htmlFor="output" style={{color: "green"}}>Output</label>
            <h1 className="card-title animate__animated animate__bounceInUp" id="output">{second}</h1>
          </div>
        </div>
      </div>
    </div>

  );

  
}

export default App;
