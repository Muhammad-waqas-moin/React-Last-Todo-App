import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ICONS } from "../assets/Icon";
import CustomButton from "./Common/customButton";
import { Stack } from "@mui/material";
import InputField from "./InputField";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add, editTodo } from "../tools/Slicer";


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

const MyModal = ({ title, BtnTtile ,Name , Task ,icon , data}) => {
  const {  Todos } = useSelector((e) => e.Slicer);
  const Dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);  
  const [editName , setEditName] = React.useState(data?.Name);
  const [editTask, setEditTask] =  React.useState(data?.Task);
  
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  let [todos, setTodos] = React.useState({});
    const handleChange=(e)=>{
      setTodos({...todos ,[e.target.name]: e.target.value , id: Date.now()})
    }
    
    const handleEditChange=(e)=>{
      e.target.name === "Name" ? setEditName(e.target.value) : setEditTask(e.target.value);
      setTodos({...todos ,[e.target.name]: e.target.value , id : data?.id})
    }

    const handleEdit=(e)=>{
      // console.log()
      Dispatch(editTodo(todos))
      handleClose();
    }

  const handleAddTodos = () =>{
    Dispatch(add(todos));
    handleClose();
  };
 
  return (
    <div>
      <CustomButton
        isButton={false}
        onclick={handleOpen}
        title={title}
        icon={icon}
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
              // value={data ? data.Name:  Name}
              value={editName }
              onchange={(e)=>  BtnTtile == "EDIT" ? handleEditChange(e):  handleChange(e)}
              // onchange={BtnTtile === "EDIT" ? ()=> handleEditChange :   ()=> handleChange}
            />
            <InputField
              label={"Task"}
              type={"text"}
              name={"Task"}
              // value={data ? data.Task : Task}
              value={editTask}
              onchange={(e)=>  BtnTtile == "EDIT" ? handleEditChange(e):  handleChange(e)}
              // onchange={BtnTtile === "ADD" ? ()=> handleEditChange :   ()=> handleChange}
            />
          </Stack>
          <Stack alignItems={"end"} py={2}>
            <CustomButton
              isButton={true}
              title={BtnTtile}
              onclick={(e)=> BtnTtile === "ADD" ? handleAddTodos(e) : handleEdit(e)}
              color={"primary"}
              variant={"contained"}
              btnWidth={"30%"}
              value
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default MyModal;
