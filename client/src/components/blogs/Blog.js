import { Component } from 'react'; 
import BlogForm from './BlogForm';
import BlogList from './BlogList';

class Blog extends Component {
    state = {showBlogForm: false}
    toggleForm = () => {      
    const { showBlogForm } = this.state
    this.setState({showBlogForm: !showBlogForm })
}

    render() {
        const {title, complete, id, removeBlog} = this.props
        const { showBlogForm } = this.state
        const { showBlogList } = this.state
        return(
            
            <>
            
            <h1>{title} complete:{complete ? "true" : "false"}</h1>
            {
                showBlogForm ? <BlogForm {...this.props } toggleForm={this.toggleForm} /> :
                showBlogList ? <BlogList {...this.props } toggleForm={this.toggleForm} /> :
            
            <button onClick={() => this.toggleForm()}>Edit</button>}
            <button onClick={() => removeBlog(id)}>Delete</button>
            </>
            
        )
    }
}

export default Blog;