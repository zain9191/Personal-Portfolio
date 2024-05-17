import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xkndyvnb");

  if (state.succeeded) {
    return <p>Thanks for contacting me!</p>;
  }

  return (
    <section id="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me for any inquiries or just to say hello!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type="submit" disabled={state.submitting}>
            Send
          </button>
        </form>
        {state.succeeded && <p>Thanks for contacting me!</p>}
      </div>
    </section>
  );
};

export default Contact;
