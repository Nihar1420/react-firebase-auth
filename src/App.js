import { useState } from 'react';
import './App.css';
import { googleSignUp } from './firebase-config';

function App() {
  const [userDetails, setUserDetails] = useState();
  const handleUserDetails = async () => {
    const userdetail1 = await googleSignUp();
    setUserDetails(userdetail1);
  }
  console.log(userDetails);

  return (
    <div className="App">
      <button onClick={() => handleUserDetails()}>Google Sign Up</button>
      <h2>{userDetails?.user?.displayName}</h2>
      <h2>{userDetails?.user?.email}</h2>
      {
        userDetails && <img src={userDetails?.user?.photoURL} alt="demo" height={300} width={300} />
      }
    </div>
  );
}

export default App;
