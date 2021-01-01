import { Component } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import BlogList from './components/blogs/BlogList';
import BlogForm from './components/blogs/BlogForm';

class App extends Component {
  state = { blogs: [] }

  componentDidMount() {
    axios.get('/api/blogs')
    .then( res => {
      // debugger
      this.setState({ blogs: res.data })
    })
    .catch( err => {
      console.log(err);
    })
  }

  addBlog = (blog) => {
    axios.post('/api/blogs', { blog })
    .then(res => {
      const { blogs } = this.state
      this.setState({ blogs: [...blogs, res.data ]})

    })
    .catch( err => {
      console.log(err);
    })

  }

  updateBlog = (id, incomingBlog) => {

  }

  removeBlog = (id) => {

  }

  render () {
    const { blogs } = this.state
    return (
      <Container> 
        <BlogForm addBlog={this.addBlog} />
        <BlogList blogs={blogs} />

      </Container> 
    )
  }
}

export default App;
