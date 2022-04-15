
import React, {useState} from 'react';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const handleSubmit = (event) => {
        event.preventdefault()
    }

    const handleName = (event) => {
        let fname = (event.target.value).trim;
        setName(fname);
    }


    const handleEmail = (event) => {
        let email = (event.target.value).trim;
        setEmail(email);
    }

    const handleText = (event) => {
        let text = event.target.value;
        setMessage(text);
    }

    return(
        <section id='contact-container'>
            <div className="contact-form">
                <h3>Get in touch: </h3>
                <form onSubmit={handleSubmit}>
                    <label>Full Name:* </label>
                        <input onChange={handleName} id="name" name="name" type="text" value={name} placeholder="Fullname..." required></input>        
                    <label>Email:* </label>
                        <input onChange={handleEmail} id="email" name="email" type="email" value={email}placeholder="Email..." required ></input>
                    <label>Message: </label>
                        <textarea onChange={handleText} id="message" value={message}></textarea>
                    <input type="submit" value="send"></input>
                </form>
            </div>
        </section>
    )


};

export default Contact;