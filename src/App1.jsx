import * as React from 'react';
 
import Form from './pages/Form';
import Login from './pages/Login';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import ImageLooker from './pages/ImageLooker';
function App() {
  <div>
  <Routes>
    <Route  path="/" element={<Form/>}/>
    <Route  path="/register" element={<Register/>}/>
    <Route  path="/login" element={<Login/>}/>
    <Route  path="/looker" element={<ImageLooker/>}/>
  </Routes>

  
  </div>

  // const [user, setUser] = React.useState(null);
  // const [authState, setAuthState] = React.useState(null)

  // React.useEffect(() => {
  //   const unSubscribeAuth = onAuthStateChanged(auth,
  //     async authenticatedUser => {
  //       if(authenticatedUser) {
  //         setUser(authenticatedUser.email)
  //         setAuthState('home');
  //       } else {
  //         setUser(null);
  //         setAuthState('login')
  //       }
  //     })

  //     return unSubscribeAuth;
  // }, [user])

  // if(authState === null) return <div className='font-bold text-center text-5xl'>loading...</div>
  // if(authState === 'login') return <Login setAuthState={setAuthState} setUser={setUser}/>
  // if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser}/> 
  // if(user) return <Home user={user} setAuthState={setAuthState} setUser={setUser}/>
}

export default App;