import React from 'react';

// import { Container } from './styles';

function Account() {
    const [user, setUser] = useState(null);
  
    useEffect(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setUser(user);
        } else {
          setUser(null);
        }
      });
    }, []);

  return<>
  
  </>;
}

export default dashboard;