// import { Person } from '@mui/icons-material';
// import axios from 'axios';
// import { useEffect, useState } from "react";

// type Person={
//   _id:string,
//   name:string,
//   email:string,
//   language:string,
//   title:string

// }

// function App() {
//   const [users, setUsers] = useState<Person[]>([]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://10.3.2.113:4000/fetchDevelopers");
//       setUsers(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return (
//     <div>

//       {users.map((user) => {
//         const {_id, name, email, language, title} = user;
//         return (
//           <div key={_id}>
//           <h1>{name}</h1>
//           <h2>{email}</h2>
//           <h3>{language}</h3>
//           <h4>{title}</h4>
//         </div>
//         )
//       }

//       )}
//     </div>
//   );
// }

// export default App;

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type dataType = {
  _id: string;
  name: string;
  email: string;
  language: string;
  title: string;
};

function FetchReq() {
  const [data, setData] = useState<dataType[]>([]);

  useEffect(() => {
    fetchDevelopers();
  }, []);

  const fetchDevelopers = () => {
    axios
      .get("http://10.3.2.133:4000/fetchDevelopers")
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id: string) => {
    axios
      .delete(`http://10.3.2.133:4000/deleteDeveloper/${id}`)
      .then((res) => {
        console.log(res);
        fetchDevelopers();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {data.length > 0 && data.map((item) => {
        return (
          <div key={item._id} style={{ marginBottom: 90, maxWidth: 320 }}>
            <h1>{item.name}</h1>
            <h2>{item.email}</h2>
            <h3>{item.language}</h3>
            <h4>{item.title}</h4>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Link to={`/update/${item._id}`}>
                <Button variant="contained">Update</Button>
              </Link>

              <Button
                onClick={() => handleDelete(item._id)}
                variant="contained"
                color="secondary"
              >
                delete
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FetchReq;
