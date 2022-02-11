import { Button } from "./ui/buttons";

function App() {
  return (
    <>
      <Button bgColor="orangered" color="white" size="11px" padding="0.25rem 0.8rem">
        ui button
      </Button>
      <Button bgColor="gold" color="#333">
        Warning
      </Button>
      <Button bgColor="green" color="white">
        Success
      </Button>
    </>
  );
}

export default App;
