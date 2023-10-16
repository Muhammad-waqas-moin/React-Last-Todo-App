import React from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Box, Typography } from "@mui/material";
import CustomButton from "./Components/Common/customButton";
import { ICONS } from "./assets/Icon";
import MyModal from "./Components/MyModal";

const Header = () => {
  const addtodos = () => {
    alert("add");
  };
  return (
    // <Stack bgcolor={"lightgray"}>
    <Stack p={2} direction="row" justifyContent="space-between">
      <Typography fontFamily={"monospace"} fontSize={"1.5rem"} color={"white"}>
        My
        <span style={{ fontSize: "2rem", fontFamily: "cursive" }}>Todos</span>
      </Typography>

      <MyModal title="Add Todo" />
    </Stack>
    // </Stack>
  );
};

export default Header;
