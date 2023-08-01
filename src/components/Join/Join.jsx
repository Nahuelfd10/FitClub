import React from "react";
import "./Join.css";

const Join = () => {
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">¿Listo</span>
          <span>PARA ALCANZAR</span>
        </div>
        <div>
          <span className="stroke-text">TU MEJOR</span>
          <span>VERSION?</span>
        </div>
      </div>
      {/*  <div className="right-j">
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                <input type="email" name="user_email" placeholder='Enter your Email adress' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div> */}
    </div>
  );
};

export default Join;
