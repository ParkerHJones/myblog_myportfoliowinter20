import { Component } from 'react'; 

class Blog extends Component {
    state = {showBlogForm: false}

    render() {
        const {title, date_posted, complete, id} = this.props
        return(
            <>
            <h1>{title} complete:{complete ? "true" : "false"}</h1>
            <button>Edit</button>
            <button>Delete</button>
            </>
        )
    }
}

export default Blog;