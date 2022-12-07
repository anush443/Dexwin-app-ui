import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import PostCard from "src/component/PostCard";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const postData = [
  {
    img: "images/User1.png",
    image: "images/Post1.png",
    name: "Sophia Valentine",
    time: "2h. Public",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. UltricesLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. Ultrices...",
  },
  {
    img: "images/User1.png",
    image: "images/Post2.png",
    name: "Sophia Valentine",
    time: "2h. Public",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. UltricesLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. Ultrices...",
  },
  {
    img: "images/User1.png",
    image: "images/Post3.png",
    name: "Sophia Valentine",
    time: "2h. Public",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. UltricesLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. Ultrices...",
  },
  {
    img: "images/User1.png",
    image: "images/Post1.png",
    name: "Sophia Valentine",
    time: "2h. Public",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt  sed egestas. UltricesLorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing tincidunt ac sed egestas. Ultrices...",
  },
];
function Posts() {
  const classes = useStyles();
  return (
    <>
      <Grid container direction={"column"} spacing={2}>
        {postData.map((data, i) => {
          return (
            <Grid item>
              <PostCard data={data} type="card" key={i} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}
export default Posts;
