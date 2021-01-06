import Blog from './Blog';


const BlogList = ({ blogs, updateBlog, removeBlog }) => (
    <>
    {
        blogs.map( b =>
        <Blog
            key={b.id}
            {...b}
            updateBlog={updateBlog}
            removeBlog={removeBlog}
        />
        )
    }
</>
)

export default BlogList;