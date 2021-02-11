import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
  console.log('HEADERSSSSSSS', req.headers);

  let PAGE_SIZE = 4;
  let page = Number(req.query.page || '1');
  let total = await PostMessage.countDocuments({});
  let postMessages = await PostMessage.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * (page - 1));

  try {
    // const postMessages = await PostMessage.find();

    res
      .status(200)
      .json({ postMessages, page, pages: Math.ceil(total / PAGE_SIZE) });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.satus(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  try {
    if (!mongoose.Types.ObjectId.isValid(_id)) {
      return res.status(404).json({ message: 'No post with that id.' });
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { ...post, _id },
      {
        new: true, // get the modified document back, by default the unmodified
      }
    );

    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'No post with that id.' });
    }
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'Post deleted succesfully.' });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.status(403).json({ message: 'Unauthenticated.' });
  }

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ message: 'No post with that id.' });
    }

    const post = await PostMessage.findById(id);

    const index = post.likes.findIndex(id => id === String(req.userId));

    if (index === -1) {
      post.likes.push(req.userId);
    } else {
      post.likes = post.likes.filter(id => id !== String(req.userId));
    }

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {
      new: true,
    });

    res.json(updatedPost);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
