import React from "react";
import { Button } from "@mui/material";

export default function ClearSearchBox(params) {

  // handle button click
  const handleButtonClick = (e,) => {
    params.setSearchedFor("")
  };

  return (
    <div>
        <h4>Clear Keyword Search To Enable Filter
</h4>
      {/* <Button 
       size="small"
       fullWidth="true"
       variant="contained"
       aria-label="outlined primary button group"
       onChange={handleButtonClick}>Reset Search</Button> */}
    </div>
  );
}
