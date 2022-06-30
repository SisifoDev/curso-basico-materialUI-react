import React from "react";
import { IconButton, Stack, TextField } from "@mui/material";

const Searcher = () => {
  return (
    <Stack
      direction="row"
      sx={{
        marginTop: "30px",
        width: "80%",
      }}
    >
      <TextField
        id="outlined-basic"
        label="GitHub User"
        placeholder="Search for a user"
        variant="outlined"
        sx={{
          width: "90%",
        }}
      />
      <IconButton></IconButton>
    </Stack>
  );
};

export default Searcher;
