import { useState } from "react";
import "./App.css";

function App() {
    const [values, setValues] = useState(
      {
        firstname: "",
        lastname: "",
        email: "",
        contact: "",
        gender: "",
        resume: "", 
        about: "" 
      });

      const handleChange = (e) => {
        setValues({...values, 
          [e.target.name] : [e.target.value]})
          console.log(setValues)
      }

      const handleSubmit = (e) => {
        e.preventDefault();
        
          console.log(values)
      }

    return (
        <div className="container">
            <h1>Form in React</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstname">First Name*</label>
                <input type="text" onChange={(e) => handleChange(e)} placeholder="Enter First Name" name="firstname"   />

                <label htmlFor="lastname">Last Name*</label>
                <input type="text" onChange={(e) => handleChange(e)}   placeholder="Enter Last Name" name="lastname" />

                <label htmlFor="email">Enter Email*</label>
                <input type="email" onChange={(e) => handleChange(e)}  placeholder="Enter Email" name="email" />

                <label htmlFor="contact">Contact*</label>
                <input type="text" onChange={(e) => handleChange(e)}  placeholder="Enter Mobile Number" 
                name="contact" />

                <label htmlFor="gender">Gender</label>
                <input type="radio" onChange={(e) => handleChange(e)}  name="gender" /> Male
                <input type="radio" onChange={(e) => handleChange(e)}  name="gender" /> Female
                <input type="radio" onChange={(e) => handleChange(e)}  name="gender" /> Other

                <div className="subject">
                    <div className="subjets">
                        <label htmlFor="">Your Best Subject</label>
                        <select name="subject" id="">
                            <option value="math" onChange={(e) => handleChange(e)} >Math</option>
                            <option value="physic" onChange={(e) => handleChange(e)} >Physic</option>
                            <option value="ti" onChange={(e) => handleChange(e)} >TI</option>
                            <option value="english" onChange={(e) => handleChange(e)} >English</option>
                        </select>
                    </div>

                    <label htmlFor="resume">Upload Resume*</label>
                    <input type="file" onChange={(e) => handleChange(e)}  name="resume" id="" />

                    <label htmlFor="url">Enter URL*</label>
                    <input type="" onChange={(e) => handleChange(e)}  name="url" id="" placeholder="Enter URL" />

                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols={30}
                        rows={10} onChange={(e) => handleChange(e)} 
                        placeholder="About  Your Self"
                    ></textarea>
                </div>
                <div className="button">
                    <button type="button">Reset</button>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default App;
