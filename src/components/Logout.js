import { useState, useEffect } from "react";

const Logout = () => {
  // setting the state to false 
  const [success, setSuccess] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(true);
  };
  return (
    <>
      {success ? (
        <section>
          <h1>You are successfully logged out</h1>
          <br />
        </section>
      ) : (
        <section>
          <h1> Log Out</h1>
          <form onSubmit={handleSubmit}>
            <button>Log Out</button>
          </form>
        </section>
      )}
    </>
  );
};

export default Logout;
