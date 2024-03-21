import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let obj = {
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    streetad: "",
    city: "",
    state:""
  }
  const [formdata, setformdata] = useState(obj)
  function changehandler(event) {
    let { name, type, value, checked } = event.target;
    setformdata((prevdata) => {
      return {
        ...prevdata,
        [name]: type === "checkbox" ? checked : value
      }
    })
  }

  function submithandler(event) {
    event.preventDefault();
    console.log(formdata);
  }

  return (
    <div>
      <form onSubmit={submithandler} action="" className=" flex flex-col justify-center items-center">
        <label htmlFor="firstname">First Name</label>
        <input type="text" placeholder='Dhuruv' name="firstname"
          onChange={changehandler}
          value={formdata.firstname}
          className=' border-2 border-black'
        />

        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='Kumar' name="lastname"
          onChange={changehandler}
          value={formdata.lastname}
          className=' border-2 border-black'
        />

        <label htmlFor="email">Email Adress</label>
        <input type="email" placeholder='dhruvdk02@gmial.com'
          onChange={changehandler}
          name='email'
          value={formdata.email}
          className=' border-2 border-black'
        />

        <label htmlFor="country">Country</label>
        <select name="country" onChange={changehandler} className=' border-2 border-black' id="">
          <option value="India">India</option>
          <option value="UK">UK</option>
          <option value="USA">USA</option>
        </select>

        <label htmlFor="street">street Adress</label>
        <input type="text" placeholder='114 O block'
          onChange={changehandler}
          name='streetad'
          value={formdata.streetad}
          className=' border-2 border-black'
        />

        <label htmlFor="city">City</label>
        <input type="text"
          placeholder='Noida'
          name='city'
          onChange={changehandler}
          value={formdata.city}
          className=' border-2 border-black'
        />

        <label htmlFor="state">State</label>
        <input type="text"
          placeholder='Uttar Pradesh'
          name='state'
          onChange={changehandler}
          value={formdata.state}
          className=' border-2 border-black'
        />

        <br />
        <button>Click Me😊</button>
      </form>


    </div>
  )
}

export default App
