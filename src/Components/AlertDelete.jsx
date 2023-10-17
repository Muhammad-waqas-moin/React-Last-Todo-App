import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CustomButton from "./Common/customButton";
import { ICONS } from "../assets/Icon";
import { Stack, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { delTodo } from "../tools/Slicer";

const AlertDelete = ({id}) => {
  const Dispatch = useDispatch();
  
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <CustomButton onclick={handleClickOpen}  icon={<ICONS.DeleteIcon   color="error"/>} />

      <Dialog
        // fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <Stack
          alignItems={"center"}
          textAlign={"center"}
          alignSelf={"center"}
          justifyContent={"center"}
          direction={"row"}
          spacing={2}
          p={2}
        >
          <ICONS.WarningAmberIcon color="error" />
          <Typography fontWeight={600} fontSize={24}>
            Are you sure ?
          </Typography>
        </Stack>
        <DialogActions>
          <CustomButton
            isButton={true}
            onclick={() => Dispatch(delTodo(id))}
            title={"Yes"}
          />
          <CustomButton isButton={true} onclick={handleClose} title={"No"} />
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDelete;
