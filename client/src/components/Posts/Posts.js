import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
  const posts = useSelector(state => state.posts);
  const classes = useStyles();

  console.log(posts);
  return !posts?.lenght ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container align></Grid>
  );
};

export default Posts;
