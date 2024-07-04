
import './index.css';
import { useEffect, useState } from 'react';




function App() {

  const[formData,setFormdata]=useState({
    firstName:"",
    lastName:"",
    email:"",
  })
console.log(formData);
  function changehandler(event){

    setFormdata( prevFormData=>{
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
  });
  }

return (
  <div className='App m-7 text-center'>
    <form>
      <input
      type='text'
      placeholder='first name'
      onChange={changehandler}
      name="firstName"
      value={formData.firstName}

      />
      <br></br> 
      <br></br>
      <input
      type='text'
      placeholder='last name'
      onChange={changehandler}
      name="lastName"
      value={formData.lastName}
      />
      <br/>
      <input
      type='email'
      placeholder='enter your email here'
      onChange={changehandler}
      name="email"
      value={formData.email}

      />
      <br/>
{      //controlled components --maintain state inside component
}
    </form>
    
     </div>
 
  );
}

export default App;
