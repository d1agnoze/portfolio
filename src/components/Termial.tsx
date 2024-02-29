import { ReactTerminal } from "react-terminal";
import { commands, welcome } from "../Terminal/Commands";
import { useEffect, useState } from "react";

const Terminal = () => {
  const [welcomeMessage, setWelcomeMessage] = useState<JSX.Element | string>(
    welcome,
  );
  useEffect(() => {
    const handleEnter = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        setWelcomeMessage("");
        document.removeEventListener("keydown", handleEnter);
      }
    };
    document.addEventListener("keydown", handleEnter, true);
    return () => { document.removeEventListener("keydown", handleEnter); };
  }, []);
  return (
    <ReactTerminal
      themes={{
        custom: {
          themeBGColor: "rgba(31, 32, 36, 0.95)",
          themeToolbarColor: "transparent",
          themeColor: "white",
          themePromptColor: "#39FF14",
        },
      }}
      prompt="visitor@VdacHub:~/$"
      theme="custom"
      welcomeMessage={welcomeMessage}
      showControlBar={false}
      commands={commands}
      defaultHandler={(command: string) => {
        return `Unknown command: ${command}, use 'help' for a list of available commands.`;
      }}
    />
  );
};
export default Terminal;
