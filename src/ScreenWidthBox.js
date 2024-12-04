import React, { useState, useEffect } from "react";

const ScreenWidthBox = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Adicionar o listener para redimensionamento
    window.addEventListener("resize", handleResize);

    // Remover o listener na desmontagem do componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "20px",
      textAlign: "center",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      fontSize: "1.5em",
    }}>
      Largura da tela: {width}px
    </div>
  );
};

export default ScreenWidthBox;
