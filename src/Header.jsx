import React from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import MyModal from "./Components/MyModal";
import { ICONS } from "./assets/Icon";


const Header = () => {
  const addtodos = () => {
    alert("add");
  };
  return (
    <Stack p={2} direction="row" justifyContent="space-between">
      <Typography fontFamily={"monospace"} fontSize={"1.5rem"} color={"white"}>
        My
        <span style={{ fontSize: "2rem", fontFamily: "cursive" }}>Todos</span>
      </Typography>
      <MyModal BtnTtile={"ADD"} title="Add Todo" icon={<ICONS.AddIcon/>} />
    </Stack>
  );
};

export default Header;
