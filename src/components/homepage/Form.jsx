import React from "react";
import "../../components/Components.css";


const Form = () => {
  return (
    <div>
      <form name="contact" netlify>
        <div className="mb-5">
          <input
            type="text"
            className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
            name="name"
            placeholder="Name"
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="mb-5">
          <textarea
            className="form-control bg-transparent border-top-0 border-start-0 border-end-0 rounded-0 border-muted text-white"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mb-5 d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
