import React from "react";
import { Typography, Box, styled } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskBox = styled(Box)`
  padding: 1.2rem;
  height: 4rem;
  margin: 2rem;
  display: flex;
  background-color: #edf2f4;
  border-radius: 1rem;
  box-shadow: 5px 4px 15px 9px rgba(0, 0, 0, 0.24);
  justify-content: space-between;
`;

const IconBox = styled(Stack)`
  display: flex;
`;

function List(props) {
  return (
    <Box>
      {props.todo.map((todo) => (
        <TaskBox key={todo.id}>
          <Typography>{todo.task}</Typography>
          <IconBox direction="row" spacing={1}>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon />
            </IconButton>
          </IconBox>
        </TaskBox>
      ))}
      ;
    </Box>
  );
}

export default List;
