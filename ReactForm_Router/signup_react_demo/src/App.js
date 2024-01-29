import "./App.css";
import React, {useState} from "react";
export default function App(){
  const [form, setForm] = useState({});
  function handleChange(event){
    setForm({
      ...form,
      [event.target.name]: event.target.value
    });
  }
  function handleSubmit(){
    const isValid =
        form.username && form.email && form.password && form.confirmPassword;
    alert(isValid ? "Sign in Success!!!" : "Please fill out all the fields!!!");
  }
  return(
      <div>
        <h1>Sign Up</h1>
        <form>
          <div className="input">
            <label>Name: </label>
            <input name="username" value={form.username||""} onChange={handleChange}/>
          </div>
          <div className="input">
            <label>Email: </label>
            <input name="email" value={form.email||""} onChange={handleChange}/>
          </div>
          <div className="input">
            <label>Password: </label>
            <input name="password" type="password" value={form.password||""} onChange={handleChange}/>
          </div>
          <div className="input">
            <label>Confirm Password: </label>
            <input name="confirmPassword" type="password" value={form.confirmPassword||""} onChange={handleChange}/>
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
  )
}
