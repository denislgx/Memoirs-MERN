import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab/';

import Post from './Post/Post';

import useStyles from './styles';
import { getPosts } from '../../actions/postsActions';

const paginationStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      marginTop: '15px',
    },
    pagination: {
      color: 'red',
    },
  },
}));

const Posts = ({ setCurrentId }) => {
  const posts = useSelector(state => state.postsData.posts);
  const { page, pages } = useSelector(state => state.postsData);
  const dispatch = useDispatch();
  const classes = useStyles();
  const stylesPagination = paginationStyles();

  const changePage = event => {
    const { innerText } = event.target;
    const goToNextOrPrevPage =
      event.currentTarget.getAttribute('aria-label') === 'Go to next page'
        ? true
        : false;

    if (innerText) return dispatch(getPosts(innerText));

    if (goToNextOrPrevPage) {
      dispatch(getPosts(page + 1));
    } else {
      dispatch(getPosts(page - 1));
    }
  };

  return !posts?.length ? (
    <CircularProgress />
  ) : (
    <>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map(post => (
          <Grid key={post._id} item xs={12} sm={6}>
            <Post setCurrentId={setCurrentId} post={post} />
          </Grid>
        ))}
      </Grid>
      <div className={stylesPagination.root}>
        <Pagination
          className={stylesPagination.pagination}
          count={pages}
          variant="outlined"
          // color="standard"
          page={page}
          onChange={event => changePage(event)}
        />
      </div>
    </>
  );
};

export default Posts;
