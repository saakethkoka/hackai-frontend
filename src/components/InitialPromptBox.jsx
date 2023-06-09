import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export const InitialPromptBox = ({ onTextSubmit }) => {
  const [inputText, setInputText] = useState("");
  const [isImmutable, setIsImmutable] = useState(false);

  const handleInputChange = (event) => {
    if (!isImmutable) {
      setInputText(event.target.value);
    }
  };

  const handleSubmit = () => {
    onTextSubmit(inputText);
    setIsImmutable(true);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13 && !isImmutable) {
      handleSubmit();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "30%", // Change width here
        margin: "auto",
      }}
    >
      <TextField
        label="Enter text"
        value={inputText}
        onChange={handleInputChange}
        fullWidth
        disabled={isImmutable}
        onKeyDown={handleKeyDown}
      />
      {isImmutable === false && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ ml: 2 }}
          disabled={isImmutable}
        >
          Submit
        </Button>
      )}
    </Box>
  );
};
