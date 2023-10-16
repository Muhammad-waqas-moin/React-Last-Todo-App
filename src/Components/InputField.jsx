import { Stack, TextField } from "@mui/material";
import React from "react";

const InputField = ({ label, type, name, onchange, value }) => {
  return (
    <Stack py={2}>
      <TextField
        type={type}
        name={name}
        onChange={onchange}
        value={value}
        id="outlined-basic"
        label={label}
        variant="outlined"
        placeholder="name"
      />
    </Stack>
  );
};

export default InputField;
