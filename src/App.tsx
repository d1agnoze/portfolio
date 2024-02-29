import { useState } from "react";
import Boot from "./components/Boot";
import Main from "./components/Main";

function App() {
  const [booted, setBooted] = useState<boolean>(false);
  const HandleBoot = (arg: boolean) => {
    setBooted(arg);
  };
  return (
    <>
      {booted ? <Main /> : <Boot isFinished={HandleBoot} />}
    </>
  );
}

export default App;
