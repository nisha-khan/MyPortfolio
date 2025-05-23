import React from 'react';
import { useInView } from 'react-intersection-observer';
import '../Contact/Contact.css';
import location from '../../../assets/images/location.png';
import mail from '../../../assets/images/mail.png';
import phone from '../../../assets/images/call.png';

const Contact = () => {
    const { ref: sectionRef, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

    const handleInput = (e) => {
        e.target.style.height = '40px';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            message: e.target.message.value
        };

        try {
            const response = await fetch('http://localhost:5000/api/contact/contactus', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error('Failed to send message');

            alert('Message sent successfully!');
            e.target.reset();
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message');
        }
    };

    return (
        <section ref={sectionRef} className="contact-section">

            <div className={`contact-left ${inView ? 'fade-in delay-2' : ''}`}>
                <div className={`heading-text ${inView ? 'fade-in delay-3' : ''}`}>
                    <p>
                        Have a Question or Just Want to Say Hi ? <br /> Get in Touch and Let’s talk!
                    </p>
                </div>

                <div className={`contact-info ${inView ? 'fade-in delay-4' : ''}`}>
                    <h4><img src={location} alt="Address" className="icon" /> Address</h4>
                    <p>Lahore, Pakistan</p>

                    <h4><img src={phone} alt="Phone" className="icon" /> Phone</h4>
                    <p>+92 336 5588 336</p>

                    <h4><img src={mail} alt="Email" className="icon" /> E-mail</h4>
                    <p>nishakhan.work@gmail.com</p>
                </div>
            </div>

            <div className={`contact-right ${inView ? 'fade-in delay-1' : ''}`}>
                <h2>CONTACT FORM</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Your name <span className="required">*</span></label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Your phone #</label>
                        <input type="text" id="phone" name="phone" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your e-mail <span className="required">*</span></label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message <span className="required">*</span></label>
                        <textarea id="message" name="message" onInput={handleInput} required />
                    </div>

                    <button type="submit">SEND MESSAGE</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;