import React, { Component } from 'react';
import axios from 'axios';

const PostContext = React.createContext();

export const PostConsumer = PostContext.Consumer;

class PostProvider extends Component {
  state = { posts: [] }

  getAllBlogPost = (blogId) => {
    axios.get(`/api/blogs/${blogId}/posts`)
    .then( res => { 
      this.setState({ posts: res.data })
    })
      .catch( err => {
        console.log(err);
      })
  }

  addPost = (blogId, post) => {
    axios.post(`/api/blogs/${blogId}/posts`, { post })
      .then(res => {
        const { posts } = this.state 
        this.setState({ posts: [...posts, res.data] })
      })
      .catch( err => {
        console.log(err);
      })
  }

  render() {
    return(
      <PostContext.Provider value={{
        ...this.state,
      getAllBlogPost: this.getAllBlogPost,
      addPost: this.addPost,
      // deleteItem: this.deleteItem,
      // updateItem: this.updateItem,
      }}>
        { this.props.children }
      </PostContext.Provider>
    )
  }
}

export default PostProvider;
