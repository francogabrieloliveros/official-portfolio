import { useEffect, useRef, useState } from "react";
import MainPage from "./pages/MainPage";
import Header from "./pages/Header";
import Cursor from "./components/Cursor";
import Frame from "./components/Frame";
import Scrollbar from "smooth-scrollbar";

function App() {
  const scrollRef = useRef(null);
  const [scrollbar, setScrollbar] = useState(null);

  useEffect(() => {
    const scrollbar = Scrollbar.init(scrollRef.current, {
      damping: 0.02,
    });
    setScrollbar(scrollbar);

    return () => scrollbar.destroy();
  }, []);

  return (
    <>
      <Cursor />
      <Frame />
      <Header scrollbar={scrollbar} />
      <div ref={scrollRef} style={{ height: "100vh", overflow: "hidden" }}>
        <MainPage />
      </div>
    </>
  );
}

export default App;
