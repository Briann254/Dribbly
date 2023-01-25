import React from 'react';

function Home(props) {

  const [currentPage,setCurrentPage] = useContext(NavigationContext)
  console.log(currentPage)

  return (
  <div>
  <h1>Home page</h1>
  <button onClick={()=>setCurrentPage(<YourProjects/>)}>Go to your projects</button>
  </div>
  );

<<<<<<< HEAD
function Home() {
  return (
    <div>
      <h1>Welcome to Dribbly</h1>
      <p>Hello,</p>
    </div>
  )
}

=======
  }
>>>>>>> 9dde7e7b06b9dfe01d75866497521fcf505df8f0

  export default Home
  


