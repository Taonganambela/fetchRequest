// adds new developer
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import axios from "axios";

function PostReq() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = () => {
    axios
      .post("http://10.3.112.205:4000/createDeveloper", {
        name: username,
        email: email,
        language: language,
        title: title,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id="outlined-basic"
          label="Name"
          variant="outlined"
        />
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          id="outlined-basic"
          label="language"
          variant="outlined"
        />
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          id="outlined-basic"
          label="title"
          variant="outlined"
        />
      </Box>

      <Button onClick={handleSubmit} variant="outlined">
        Submit
      </Button>
    </div>
  );
}

export default PostReq;
