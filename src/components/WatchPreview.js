import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useFetch } from "../hooks/useFetch";
import { Card, CardMedia } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export default function WatchPreview(props) {
  const [open, setOpen] = React.useState(false);
  const movie_id = props.movie_id;
  const movie_title = props.movie_title;
  const [isAvaliable, setIsAvaliable] = useState(false);
  const [whereAvaliable, setWhereAvaliable] = useState([]);
  const path = "/3/movie/" + movie_id + "/videos?";
  const { data: videos, isPending, error } = useFetch(path);
console.log(videos)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (videos) {
      if (videos.results) {
        if (videos.results[0]) {
            setIsAvaliable(true);
            // setWhereAvaliable(WhereToView.results.AU.flatrate); 
          } else {
           console.log("Failure Last Step");
          }
        } else {
          console.log("Failure AU");
        }
      } 
    }
  ,)

  return (
    <div>
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      {isAvaliable && 
      <div><Button variant="outlined" onClick={handleClickOpen}>
        Watch Trailer
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth='lg'
      >
        <DialogTitle id="alert-dialog-title">{"Watch the preview"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Card>
              <CardMedia
                component="iframe"
              
                image={`https://www.youtube.com/embed/${videos.results[0].key}`}
              />
            </Card>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog></div>}
      
    </div>
  );
}
