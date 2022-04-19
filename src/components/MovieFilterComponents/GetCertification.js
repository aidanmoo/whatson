import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";
import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

export default function GetCertification(params) {
  const path = "/3/certification/movie/list?";
  const { data: certificationList, isPending, error } = useFetch(path);

  // handle button toggle
  const handleButtonClick = (e, newCertification) => {
    params.setSelectedCertification(newCertification);
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      size="small"
      fullWidth="true"
      variant="contained"
      aria-label="outlined primary button group"
      value={params.selectedCertification}
      exclusive="true"
      onChange={handleButtonClick}
    >
      {isPending && <div>Loading ...</div>}
      {error && <div>{error}</div>}
      {certificationList &&
        certificationList.certifications.AU.sort(function (a, b) {
          return a.order - b.order;
        }).map((certification) => (
          <ToggleButton
            key={certification.order}
            value={certification.certification}
            className="certification"
          >
            {certification.certification}
          </ToggleButton>
        ))}
    </ToggleButtonGroup>
  );
}
