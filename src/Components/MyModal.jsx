import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ICONS } from "../assets/Icon";
import CustomButton from "./Common/customButton";
import { Stack } from "@mui/material";
import InputField from "./InputField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "../tools/Slicer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyModal = ({ title, Btn }) => {
  const { Name, Todos } = useSelector((e) => e.Slicer);
  const Dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = React.useState("");
  const [task, setTask] = React.useState("");
  let [todos, setTodos] = React.useState({});

  const handleChange = (e) => {
    e.target.name === "Name"
      ? setName(e.target.value)
      : setTask(e.target.value);

    setTodos({ Name: name, task: task });
  };
  const handleAddTodos = () => {
    Dispatch(add(todos));
    handleClose();
  };

  // console.log(todos);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>{" "} */}
      <CustomButton
        isButton={false}
        onclick={handleOpen}
        title={"Add"}
        icon={<ICONS.AddIcon />}
      />
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction={"row"} justifyContent={"space-between"}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {title}
            </Typography>
            <CustomButton
              onclick={handleClose}
              isButton={false}
              icon={<ICONS.ClearIcon />}
            />
          </Stack>
          <Stack>
            <InputField
              label={"Name"}
              type={"text"}
              name={"Name"}
              // value={name}
              onchange={handleChange}
            />
            <InputField
              label={"Task"}
              type={"text"}
              name={"Task"}
              // onchange={handleChange}
              // value={task}
              onchange={(e) => handleChange(e)}
            />
          </Stack>
          <Stack alignItems={"end"} py={2}>
            <CustomButton
              isButton={true}
              title={"ADD"}
              onclick={handleAddTodos}
              color={"primary"}
              variant={"contained"}
              btnWidth={"30%"}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
