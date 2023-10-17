import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CustomButton from "./Common/customButton";
import { ICONS } from "../assets/Icon";
import { Stack } from "@mui/material";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { delTodo } from "../tools/Slicer";
import AlertDelete from "./AlertDelete";
import MyModal from "./MyModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TodosTable = () => {
  const { Todos } = useSelector((e) => e.Slicer);
  const Dispatch = useDispatch();

  // console.log(Todos);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Task</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Todos.length > 0 &&
            Todos.map((row , index) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.Name}
                </StyledTableCell>
                <StyledTableCell width={100} align="left">
                  {row.Task}
                </StyledTableCell>
                <StyledTableCell>
                  <Stack justifyContent={"flex-end"} direction={"row"}>
                  <MyModal data={row} BtnTtile={"EDIT"} title="Edit Todos" icon={<ICONS.EditIcon/>} />
                    {/* <CustomButton
                      color="success"
                      isButton={false}
                      onclick={() => console.log(row.id)}
                      icon={<ICONS.EditIcon />}
                    /> */}
                    {/* <CustomButton
                      color="error"
                      isButton={false}
                      onclick={() => Dispatch(delTodo(row.id))}
                      icon={<ICONS.DeleteIcon />}
                    /> */}
                    <AlertDelete id={row.id}/>
                  </Stack>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TodosTable;
