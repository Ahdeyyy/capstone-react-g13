import React from "react";
import img from '../assets/contact.jpg'

const Contact = () => {
    return ( 
        <div className="contacts">
            <div className="contactus">
                <h1>Contact Us</h1>
            </div>
            <div className="bottom-container">
                <div className="bottom1">  
                    <h2>How to Find Us</h2>
                    <p>If you have any questions just 
                        fill in the contact form and we will 
                        answer you shortly. <br/>

                        Telephone: 08057398547<br/>
                        E-mail: izakaya@gmail.com<br/>
                        
                    </p>
                    
                    
                </div>
                <div className="bottom2">
                    <h2>Get in Touch</h2>
                    <form>
                        <input placeholder="Name"></input><br/><br/>
                        <input placeholder="Email"></input>
                        <br/>
                        <br/>
                        <label for='message'>Enter Message:</label>
                        <textarea  name="message" id="message" cols="20" rows="10"></textarea>
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;