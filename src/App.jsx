import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const obj = {
    firstname: "",
    lastname: "",
    email: "",
    country: "India",
    streetad: "",
    city: "",
    state: "",
    postal: "",
    comments: false,
    candidates: false,
    offers: false,
    pushnotification: ""
  }
  const [formdata, setformdata] = useState(obj)
  function changehandler(event) {
    let { name, type, value, checked } = event.target;
    setformdata((prevdata) => ({
      ...prevdata,
      [name]: type === "checkbox" ? checked : value
    })
    )
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

        <label htmlFor="streetad">street Adress</label>
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

        <label htmlFor="postal">Postal Code</label>
        <input type="text"
          placeholder='123456'
          onChange={changehandler}
          name='postal'
          value={formdata.postal}
          className=' border-2 border-black'
        />

        <fieldset>
          <legend>By Email</legend>

          <div className="">
            <input type="checkbox" name='comments' id='comments' onChange={changehandler} checked={formdata.comments} />
            <label htmlFor="comments"> Comments</label>
            <p className=' ml-4'>Get notified when someone posts a comment on posting</p>
          </div>


          <div className="">
            <input type="checkbox" name='candidates' id='candidates' onChange={changehandler} checked={formdata.candidates} />
            <label htmlFor="candidates"> Candidates</label>
            <p className=' ml-4'>Get notified when someone posts a comment on posting</p>
          </div>


          <div className="">
            <input type="checkbox" name='offers' id='offers' onChange={changehandler} checked={formdata.offers} />
            <label htmlFor="offers"> Offers</label>
            <p className=' ml-4'>Get notified when someone posts a comment on posting</p>
          </div>

        </fieldset>
        <br />

        <fieldset className='relative right-9'>
          <legend>Push Notification</legend>
          <p>These are delivered via sms to your mobile phone</p>

          <div className="flex flex-col">
            <div className="">
              <input type="radio" 
              name="pushnotification" 
              id='pushEverything'
              value="everything"
              onChange={changehandler} />
              <label htmlFor="pushEverything">  EveryThing</label>
            </div>

            <div className="">
              <input type="radio" 
              onChange={changehandler}
              name="pushnotification"
              value="same as email"
               id='sameemail' />
              <label htmlFor="sameemail"> Same As Email</label>
            </div>

            <div className="">
              <input type="radio"
               name="pushnotification" 
               onChange={changehandler}
               value="nopush"
               id='nopush' />
              <label htmlFor="nopush"> No Push Notifications</label>
            </div>
          </div>
        </fieldset>

        <br />

        <button className='rounded-md bg-blue-600 p-2 font-bold text-white'>Click Me😊</button>

      </form>

    </div>
  );
}

export default App
