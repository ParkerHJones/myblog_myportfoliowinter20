import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { BlogConsumer } from '../../providers/BlogProvider';
import Blogdisplay from './containers/Blogdisplay';

const MyBlog = () => (
  <BlogConsumer>
    { value => (
      <>
        <h1>Blog</h1>
        <BlogForm addBlog={value.addBlog} />
        <BlogList blogs={value.blogs} />
        <Blogdisplay Blogdisplay={value.blogdisplay} />
      </>
    )}
  </BlogConsumer>
)

export default MyBlog;