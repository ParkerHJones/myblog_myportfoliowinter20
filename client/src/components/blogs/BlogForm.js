import { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class BlogForm extends Component {
    state = { title: '', complete: false}
 
    componentDidMount () {
      if (this.props.id) {
          const { title, complete} =this.props
          this.setState({title, complete})
      }   
    }


    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = (e) => {
        e.preventDefault ()
        if (this.props.id){
            const {updateBlog, toggleForm, id } = this.props
            updateBlog (id, this.state)
            toggleForm()

        } else {
            this.props.addBlog(this.state)
        }
        this.props.addBlog(this.state)
        this.setState({title: '', date_posted: '', complete: false})
    }

    render() {
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