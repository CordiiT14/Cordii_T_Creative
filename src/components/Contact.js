
import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const form = useRef();


    const handleSubmit = (event) => {
        event.preventDefault();
        sendEmail();
        setName('');
        setEmail('');
        setMessage('');
    }

    const sendEmail = () => {
        console.log(name, email, message);
        emailjs.sendForm('default_service', 'template_vmxya9h', form.current, 'cvJY15YykIx2Yox-i')
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
                        <input onChange={handleName} id="from_name" name="from_name" type="text" value={name} placeholder="Fullname..." required></input>        
                    <label>Email:* </label>
                        <input onChange={handleEmail} id="email" name="reply_to" type="email" value={email}placeholder="Email..." required ></input>
                    <label>Message: </label>
                        <textarea onChange={handleText} id="message" name="message" value={message}></textarea>
                    <input type="submit" value="Send"></input>
                </form>
            </div>
        </section>
    )


};

export default Contact;