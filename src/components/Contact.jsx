import React from 'react';
import SocialLinks from './SocialLinks.jsx';

const Contact = () => (
  <section id="contact">
    <div className="container">
      <div className="heading-wrapper">
        <div className="heading">
          <h2 className="title">Want to contact me?</h2>
          <div className="separator" />
          <p className="subtitle">
            Please, use the form below or send an email to{' '}
            <span className="mail">
              web<span className="at">@</span>
              yuvanraj<span className="dot">.</span>com
            </span>
            :
          </p>
        </div>
      </div>
      <form
        id="contact-form"
        action="https://formspree.io/f/xvgrdekv"
        method="POST"
        autoComplete="off"
      >
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            required
          />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </section>
);

export default Contact;