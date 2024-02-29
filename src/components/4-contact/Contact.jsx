import React from "react";
import './contact.css'
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("moqgdklj");



  return (


    <div className="contan">
      <form onSubmit={handleSubmit} action="">
        <div className="email flex">
          <h4 className="email-1" >
            see my project at once 
           
            <br /> &leave here your 
             e-mail adress
          </h4>
          <div className="sing">
            <input required className="sing-in" type="email" name="email" id="" placeholder="Enter your email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <button type="submit" disabled={state.submitting}  className="btn-sing">
              {state.submitting ? "wait.." : "supmit"}
            </button>
            {state.succeeded && (<h1 className="thanks" > <p></p>has been sent . Good day</h1>)}

          </div>

        </div></form>
    </div>
  )
}
export default Contact;