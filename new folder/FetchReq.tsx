import { Person } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from "react";

type Person={
  _id:string,
  name:string,
  email:string,
  language:string,
  title:string
  
}

function App() {
  const [users, setUsers] = useState<Person[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://10.3.112.205:4000/fetchDevelopers");
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
       
      {users.map((user) => {
        const {_id, name, email, language, title} = user;
        return (
          <div key={_id}>
          <h1>{name}</h1>
          <h2>{email}</h2>
          <h3>{language}</h3>
          <h4>{title}</h4>
        </div>
        )
      }

      
      )}
    </div>
  );
}

export default App;



// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))



