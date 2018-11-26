import React from "react";
import posed from "react-pose";

const ButtonContainer = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    userSelect: "none",
    color: "#FFF",
    textTransform: "uppercase",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
    fontWeight: "600",
    width: "32px",
    height: "32px",
    backgroundColor: ({ type }) => (type === "light" ? "#028f70" : "#54565a"),
    filter: "brightness(100%)",
    transition: {
      duration: 120
    }
  },
  hover: {
    filter: "brightness(108%)",
    transition: {
      duration: 150
    }
  },
  press: {
    filter: "brightness(95%)",
    transition: {
      duration: 150
    }
  }
});

const BoxButton = ({ pointerEvents, type, pose, children }) => {
  return (
    <ButtonContainer
      style={{ pointerEvents: pointerEvents ? "all" : "none" }}
      pose={pose}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
};

export default BoxButton;
