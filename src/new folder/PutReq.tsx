// updatedevelopers file:
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function PutReq() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [language, setLanguage] = useState('')
    const [title, setTitle] = useState('')
    const { id } = useParams();



const handleSubmit = () => {
    axios.put(`http://10.3.112.205:4000/updateDeveloper/${id}`, {
        name: username,
        email: email,
        language: language,
        title: title,
    })
    .then(res => console.log(res))
    .catch(err => console.log(err))
}

useEffect(() => {
    axios.get(`http://10.3.2.133:4000/fetchSingleDeveloper/${id}`)
    .then(res => {
        setUsername(res.data.name)
        setEmail(res.data.email)
        setLanguage(res.data.language)
        setTitle(res.data.title)
    })
}, [id])

    
  return (
    <div>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField value={username} onChange={(e) => setUsername(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} id="outlined-basic" label="Email" variant="outlined" />
      <TextField value={language} onChange={(e) => setLanguage(e.target.value)} id="outlined-basic" label="language" variant="outlined" />
      <TextField value={title} onChange={(e) => setTitle(e.target.value)} id="outlined-basic" label="title" variant="outlined" />
    </Box>

    <Button onClick={handleSubmit} variant="outlined">
        Submit
    </Button>
    </div>
  )
}

export default PutReq;