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
  const [showAddButton, setShowAddButton] = useState(false);
  const [showLoadingButton, setLoadingButton] = useState(false)

  const { addDocument, response } = useFirestore("watchList");

  console.log(documents);

  useEffect(() => {
    if (documents != null) {
      if (!documents.find((e) => e.movieID === movieID)) {
        setShowAddButton(true);
      }
    }
  }, [documents]);

  const handleAdd = () => {
    setShowAddButton(false)
    setLoadingButton(true)
    console.log(movieID, uid);
    addDocument({
      uid,
      movieID,
    });
    setLoadingButton(false)
  };


  useEffect(() => {
    if (response.success) {
      setShowAddButton(false);
      setLoadingButton(false)
    } 
  }, [response.success]);

  return (
    <>
      {showAddButton && (
        <Button onClick={handleAdd} variant="contained">
          Add to Watchlist
        </Button>
      )}
      {showLoadingButton && (
        <Button disabled variant="contained">
          Adding to Watchlist
        </Button>
      )}
    </>
  );
}
