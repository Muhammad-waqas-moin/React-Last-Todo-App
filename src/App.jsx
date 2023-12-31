import Stack from "@mui/material/Stack";
import "./App.css";
import Header from "./Header";
import TodosTable from "./Components/TodosTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import AlertDelete from "./Components/AlertDelete";

function App() {
  return (
    <Stack mx={4}>
      <Stack my={2} bgcolor={"lightgray"}>
        <Header />
      </Stack>
      <TodosTable />
      {/* <AlertDelete/> */}
    </Stack>
  );
}

export default App;
