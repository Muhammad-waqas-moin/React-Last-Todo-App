import { useState } from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "./Components/Common/customButton";
import { ICONS } from "./assets/Icon";
import "./App.css";
import Header from "./Header";
import AlertDelete from "./Components/AlertDelete";
import MyModal from "./Components/MyModal";
import TodosTable from "./Components/TodosTable";

function App() {
  return (
    <Stack mx={4}>
      <Stack my={2} bgcolor={"lightgray"}>
        <Header />
      </Stack>
      <TodosTable />
    </Stack>
  );
}

export default App;
