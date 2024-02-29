import { animated, useSpring } from "@react-spring/web";
import Terminal from "./Termial";
import { TerminalContextProvider } from "react-terminal";
import { useEffect, useState } from "react";

const Main = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const slideUp = useSpring({
    transform: isVisible ? "translateY(0)" : "translateY(100dvh)",
    config: { duration: 300 },
  });
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 500 },
  });
  return (
    <animated.div style={fadeIn}>
      <div className="main">
        {isVisible &&
          (
            <animated.div style={{ width: "100%", zIndex: 3, ...slideUp }}>
              <div className="main__term">
                <TerminalContextProvider>
                  <Terminal />
                </TerminalContextProvider>
              </div>
            </animated.div>
          )}
        <div className="main__overlay" />
      </div>
    </animated.div>
  );
};
// <Terminal />
export default Main;
