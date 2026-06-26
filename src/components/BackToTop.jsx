import { useEffect, useState } from "react";

function BackToTop() {

  const [show, setShow] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      {show && (
        <button
          onClick={() =>
            window.scrollTo({ top: 0, behavior: "smooth" })
          }
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "none",
            background: "#00E5FF",
            fontSize: "22px",
            cursor: "pointer",
            zIndex: 999
          }}
        >
          ↑
        </button>
      )}
    </>
  );
}

export default BackToTop;