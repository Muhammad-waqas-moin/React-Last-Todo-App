import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import "./App.css";
import Header from "./Header";
import TodosTable from "./Components/TodosTable";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { add } from "./tools/Slicer";

function App() {
  const { Name, Todos } = useSelector((e) => e.Slicer);
  const Dispatch = useDispatch();

  console.log(Todos);
  return (
    <Stack mx={4}>
      <Stack my={2} bgcolor={"lightgray"}>
        <Header />
      </Stack>
      <TodosTable />

      <Button
        onClick={() => Dispatch(add(10))}
        variant="contained"
        color="error"
        sx={{ marginTop: 20, width: "20%" }}
      >
        CLICKEd
      </Button>
    </Stack>
  );
}

export default App;
