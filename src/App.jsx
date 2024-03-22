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
    <div className=' h-[100vh] w-[100vw]'>
      <h1 className='my-3 text-center font-bold text-3xl '>My Form</h1>
      <form onSubmit={submithandler} action="" className="w-[70%] mx-auto">
        <div className=' flex flex-col justify-center items-center gap-3'>
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder='Dhuruv' name="firstname"
            onChange={changehandler}
            value={formdata.firstname}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder='Kumar' name="lastname"
            onChange={changehandler}
            value={formdata.lastname}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="email">Email Adress</label>
          <input type="email" placeholder='dhruvdk02@gmial.com'
            onChange={changehandler}
            name='email'
            value={formdata.email}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="country">Country</label>
          <select name="country" onChange={changehandler} className='w-[70vw] border-2 rounded-full p-1 border-blue-300 align-sub' id="">
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
          </select>

          <label htmlFor="streetad">street Adress</label>
          <input type="text" placeholder='114 O block'
            onChange={changehandler}
            name='streetad'
            value={formdata.streetad}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="city">City</label>
          <input type="text"
            placeholder='Noida'
            name='city'
            onChange={changehandler}
            value={formdata.city}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="state">State</label>
          <input type="text"
            placeholder='Uttar Pradesh'
            name='state'
            onChange={changehandler}
            value={formdata.state}
            className='w-[70vw] border-2 border-blue-300'
          />

          <label htmlFor="postal">Postal Code</label>
          <input type="text"
            placeholder='123456'
            onChange={changehandler}
            name='postal'
            value={formdata.postal}
            className='w-[70vw] border-2 border-blue-300'
          />
        </div>
        <br /><br />


        <fieldset className=' flex flex-col justify-center items-start '>
          <legend>By Email</legend>


          <div className="">
            <input className=" " type="checkbox" name='comments' id='comments' onChange={changehandler} checked={formdata.comments} />
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

        <fieldset className='flex flex-col '>
          <legend>Push Notification</legend>
          <p className=''>These are delivered via sms to your mobile phone</p>

          <div className="">
            <div className=" ">
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
            </div></div>



        </fieldset>

        <br />

        <div className="w-0 mx-auto">
        <button className='w-[8rem] rounded-md bg-blue-600 p-2 font-bold text-white'>Click Me😊</button>
        </div>



      </form >

    </div >
  );
}

export default App
