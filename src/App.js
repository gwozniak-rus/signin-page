import React, { useState } from 'react';
import './App.css';
import UserComponent from '../src/UserComponent';
import axios from "axios";


const App = () => {
  const [data, setData] = useState({
    code: ""
  });
  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      code: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const codeData = {
      ...data,
      code: data.code
    };
    axios.put('http://localhost:8080/api/user/findCode', codeData).then((response) => {
      console.log(response.status, response.data.token);
      alert("You have been signed-in");
    });
  };

  return (
    <div>
      <h1 className="text-center">User Code</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">

          <input
            type="text"
            name="code"
            value={data.code}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};



export default App;
