import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, styled, Button, FormControl, FormGroup, Input, InputLabel } from "@mui/material";

import List from "../TodoComponent/TodoList";

const Header = styled(Box)`
  text-align: center;
  background-color: #8d99ae;
  box-shadow: 5px 4px 15px 9px rgba(0, 0, 0, 0.24);
  border-radius: 2rem;
  height: fit-content;
  width: 50rem;
  margin: 2rem;
`;

const HeaderText = styled(Typography)`
  color: #212529;
  margin: 2rem;
`;

const InputDiv = styled(Box)`
  padding: 1.3rem;
  height: 4rem;
  margin: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ColorButton = styled(Button)({
  backgroundColor: "#495057",
  "&:hover": {
    backgroundColor: "#adb5bd",
  },
});

const CustomFormControl = styled(FormControl)({
  width: "50%",
  backgroundColor: "transparent",
  marginBottom: "20px",

  "& .MuiFormLabel-root": {
    color: "#212529 !important",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "grey",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#212529",
  },
  "& .MuiFormHelperText-root": {
    color: "green",
  },
  "& .Mui-error": {
    "& .MuiFormHelperText-root": {
      color: "red",
    },
  },
});

function TodoComponent() {
  const [InputData, setInputData] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function getItem() {
      try {
        const response = await axios.get("http://localhost:8000");
        console.log(response.data.tasks);
        setTodo(response.data.tasks);
      } catch (error) {
        console.log(error);
      }
    }
    getItem();
  }, []);

  const onInputChange = (e) => {
    setInputData(e.target.value);
  };

  return (
    <Header>
      <Box xs={12} sm={6} lg={4}>
        <HeaderText variant="h3">Todo List</HeaderText>
      </Box>
      <InputDiv xs={12} sm={6} lg={4}>
        <CustomFormControl>
          <FormGroup>
            <InputLabel>Add Todo</InputLabel>
            <Input onChange={onInputChange} placeholder="Todo" />
          </FormGroup>
        </CustomFormControl>
        <ColorButton variant="contained">ADD</ColorButton>
      </InputDiv>
      <List todo={todo} />
    </Header>
  );
}

export default TodoComponent;
