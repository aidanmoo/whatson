import React, { useState, useEffect } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useFirestore } from "../hooks/useFirestore";
import { Button } from "@mui/material";
import { useCollection } from "../hooks/useCollection";

export default function AddtoWatchList({ movieID }) {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("watchList", [
    "uid",
    "==",
    user.uid,
  ]);
  const uid = user.uid;
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [showLoadingButton, setLoadingButton] = useState(false)
  const { deleteDocument, response } = useFirestore("watchList");

  console.log(documents);

  useEffect(() => {
    if (documents != null) {
      if (documents.find((e) => e.movieID === movieID) ) {
         setShowRemoveButton(true);
      }
    }
  }, [documents]);

  
  const handleRemove = () => {
    setShowRemoveButton(false)
    setLoadingButton(true)
    let toDelete = documents.find((e) => e.movieID === movieID)
    console.log(toDelete)
    deleteDocument(toDelete.id)
    setLoadingButton(false)
  };

  useEffect(() => {
    if (response.success) {
      setLoadingButton(false)
      setShowRemoveButton(false);

    }

  }, [response.success]);

  
  return (
    <>
      {showRemoveButton && (
        <Button onClick={handleRemove} variant="contained" color="error">
          Remove from Watchlist
        </Button>
      )}
      {showLoadingButton && (
        <Button disabled variant="contained" color="error">
          Removing from Watchlist
        </Button>
      )}
    </>
  );
}
