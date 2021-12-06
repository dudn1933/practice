import { useEffect, useState } from 'react';
import AppRouter from 'components/Router';
import { authService } from 'firebase';
import { Auth } from '@firebase/auth';

function App() {
  ;const [init, setInit] = useState(false);
  const [ isLoggedIn, setIsLoggedIn ] = useState<any>(false);
  
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      console.log(user)
      if(user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  },[]);

  return (
    <>
    {init ? <AppRouter isLoggedIn={ isLoggedIn }/> : 'wait....'}
    <footer>&copy; Twitter { new Date().getFullYear() }</footer>
    </>
  );
}

export default App;
