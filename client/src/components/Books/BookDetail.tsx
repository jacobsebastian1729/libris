import React from "react";
import { AppDispatch, RootState } from "../../redux/store";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchBookDetail } from "../../redux/thunk/bookDetails";
import Rating from "@mui/material/Rating";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./BookDetail.css";
import Paper from "@mui/material/Paper";
import { Grid, CardMedia, CardContent, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";

//console.log(productDetail, "got details");
const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: "0 auto",
    paddingTop: 100,
  },
  cover: {
    height: 300,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
});
export default function BookDetail() {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };
  const classes = useStyles();
  const { bookId } = useParams();
  const bookDetail = useSelector(
    (state: RootState) => state.bookItem.bookDetails
  );
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchBookDetail(bookId));
    console.log(bookId, "got id");
  }, [dispatch, bookId]);
  return (
    <div>
      <div className="main-bookDetails1">
        <Paper
          elevation={6}
          sx={{
            maxWidth: 700,
            height: 700,
            backgroundColor: "aliceblue",
            mt: 10,
            ml: 50,
            mb: 50,
          }}
        >
          <Grid container className={classes.root}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardMedia
                  className={classes.cover}
                  image={bookDetail.thumbnail}
                />
                <Button>comments</Button>
              </Card>
            </Grid>
            <Grid item xs={8} md={0}>
              <CardContent>
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "40px",
                    fontWeight: "bold",
                    fontFamily: "verdana",
                  }}
                >
                  {bookDetail.title}
                </Typography>

                <Typography variant="subtitle1" gutterBottom>
                  by {bookDetail.author}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {bookDetail.genre}
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  {bookDetail.language}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={bookDetail.rating}
                  size="small"
                  precision={0.5}
                  readOnly
                />
                <Typography variant="body1" paragraph>
                  {showFullDescription ? (
                    <p>{bookDetail.description}</p>
                  ) : (
                    `${bookDetail.description.slice(0, 80)}...`
                  )}
                </Typography>
                <Button onClick={toggleDescription} color="info">
                  {showFullDescription ? "Read less" : "Read more"}
                </Button>
              </CardContent>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
}
