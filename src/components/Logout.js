import {  useState, useEffect, } from 'react'


const Logout = () =>{
 

  const [success, setSuccess] = useState(false);

  useEffect(()=> {

  }, [])
  
  const handleSubmit = async (e) => {
      e.preventDefault();
     
      setSuccess(true)
      
      }
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
      </form >
      <p>
        Live, Learn and Laugh <br />
    </p>
    </section>
        )}
        </>
  ) 
}

export default Logout;