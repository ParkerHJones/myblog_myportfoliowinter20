import Blog from './Blog';


const BlogList = ({ blogs }) => (
    <>
    {
        blogs.map( b =>
        <Blog
            key={b.id}
            {...b}
        />
        )
    }
</>
)

export default BlogList;