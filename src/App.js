import React from "react";
import { Grid, styled, CssBaseline } from "@mui/material";
import "./App.css";

//components
import TodoComponent from "./TodoComponent/TodoComponent";

const MainComponent = styled(Grid)`
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  min-height: 100vh !important;
  position: relative;
  background-color: #2b2d42;
`;

function App() {
  return (
    <CssBaseline>
      <MainComponent container>
        <TodoComponent />
      </MainComponent>
    </CssBaseline>
  );
}

export default App;
