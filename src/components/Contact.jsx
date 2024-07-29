import React from 'react'

function Contact() {
  return (
    <div className='contact'>
        <main>
            <h1>Contact us</h1>
            <form >
             <div>
             <label>Name</label>
             <input type ="text" required placeholder ="Abc"></input>
             </div>
             <div>
             <label>Email</label>
             <input type ="email" required placeholder ="Abc@gmail.com"></input>
             </div>
             <div>
             <label>Message</label>
             <input type ="text" required placeholder ="Tell us about ur query"></input>
             </div>
             <button type ="submit">Send</button>
            </form>
        </main>
      
    </div>
  )
}

export default Contact
