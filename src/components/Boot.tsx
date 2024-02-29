import { useEffect, useState } from "react";
const Boot = ({ isFinished }: { isFinished: (arg0: boolean) => void }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState<boolean>(false);
  const [curr_post, setCurrPost] = useState<number>(0);
  const [log, setLog] = useState<string[]>([]);
  useEffect(() => {
    const fetchFile = async () => {
      try {
        const response = await fetch("/assets/boot_log.txt");
        const content = await response.text();
        setLog(content.split("\n"));
      } catch (error) {
        console.error("System boot error", error);
      }
    };
    fetchFile();
  }, []);
  const interval = setInterval(() => {
    setCurrPost(curr_post + 200);
  }, 1000);
  useEffect(() => {
    setLines(log.slice(curr_post, curr_post + 200));
    if (curr_post >= 600) {
      setDone(true);
      clearInterval(interval);
    }
  }, [curr_post]);
  useEffect(() => {
    isFinished(done);
  }, [done]);
  return (
    <div id="boot" style={{ display: done ? "none" : "block" }}>
      {lines.map((line, index) => {
        return <p className="boot__log" key={index}>{line}</p>;
      })}
    </div>
  );
};
export default Boot;
