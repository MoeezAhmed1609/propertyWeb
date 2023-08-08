import React from "react";
import { Button } from "@mui/material";

const StyledButton = ({
  title,
  validation,
  onClick,
  width,
  mode,
  size,
  font,
  type,
  margin,
}) => {
  return (
    <Button
      variant="contained"
      type={type ? type : "button"}
      sx={{
        borderRadius: "4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: size ? "8px" : "12px",
        cursor: "pointer",
        backgroundColor: mode ? "#5081ff" : "white",
        color: mode ? "white" : "black",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.2);",
        "&:hover,& .css-hnghlo-MuiButtonBase-root-MuiButton-root": {
          color: "white",
          backgroundColor: "#5081ff",
        },
        width: width || "100%",
        fontFamily: "Poppins, sans-serif",
        fontSize: font ? font : "13px",
        margin: `${margin ? margin : 0} 0`,
      }}
      className="swiper-btn"
      size={size ? "small" : "medium"}
      disabled={validation}
      onClick={onClick}
    >
      {title}
    </Button>
  );
};

export default StyledButton;
