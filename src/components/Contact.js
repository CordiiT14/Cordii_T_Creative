import key from '../key.js';
import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submit, setSubmit] = useState('Send')

    const form = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail();
        setName('');
        setEmail('');
        setMessage('');
        setSubmit('Message Sent');
    };

    const sendEmail = () => {
        emailjs.sendForm('default_service', 'template_vmxya9h', form.current, key)
        .then((result) => {
            console.log('Success!', result.text);
        }, (error) => {
            console.log('Failed...', error.text);
        });
    }

    const handleName = (event) => {
        let fname = (event.target.value);
        setName(fname);
    }


    const handleEmail = (event) => {
        let email = (event.target.value);
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
                <form ref={form} onSubmit={handleSubmit}>
                    <label>Full Name:* </label>
                        <input onChange={handleName} id="from_name" name="from_name" type="text" value={name} placeholder="Full Name..." required></input>        
                    <label>Email:* </label>
                        <input onChange={handleEmail} id="email" name="reply_to" type="email" value={email}placeholder="Email..." required ></input>
                    <label>Message: </label>
                        <textarea onChange={handleText} id="message" name="message" value={message}></textarea>
                    <input type="submit" value={submit}></input>
                </form>
            </div>
            <div id="social-media">
                <a href="https://www.linkedin.com/in/cordelia-toennies-johnstone-2a1148102" target="_blank">LinkedIn</a>
                <a href="https://github.com/CordiiT14" target="_blank">Github</a>
                <a href="https://www.instagram.com/cordii.t_creative/" target="_blank">Instagram</a>
            </div>
        </section>
    )


};

export default Contact;