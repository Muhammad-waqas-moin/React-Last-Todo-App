import { useState } from "react";
import Stack from "@mui/material/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Button, IconButton } from "@mui/material";
const CustomButton = ({
  icon,
  title,
  isButton,
  onclick,
  variant,
  color,
  btnWidth,
}) => {
  return (
    <Stack width={btnWidth}>
      {isButton ? (
        <Button variant={variant} color={color} onClick={onclick}>
          {title}
        </Button>
      ) : (
        <IconButton color={color} onClick={onclick}>
          {icon}
        </IconButton>
      )}
    </Stack>
  );
};

export default CustomButton;
