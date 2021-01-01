import { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BlogForm extends Component {
    state = { title: '', date_posted: '', complete: false}
    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault ()
        this.props.addBlog(this.state)
        this.setState({title: '', date_posted: '', complete: false})
    }

    return() {
        const { title } = this.state
        return(
            <Form onSubmit={this.handleSumbit}>
                <Form.Input
                name='title'
                value={title}
                onChange={this.handleChange}
                />
                <Button>Submit</Button>
            </Form>
        )
    }
}

export default BlogForm;