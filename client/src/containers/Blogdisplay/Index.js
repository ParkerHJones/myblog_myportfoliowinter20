import React from 'react';
import Card from '../../components/UI/Card';
import BlogList from '../../components/blogs/BlogList';
import BlogForm from '../../components/blogs/BlogForm';
import Blog from '../../components/blogs/Blog';

/**
 * @author
 * @function Blogdisplay
 */


 const Blogdisplay = (props) => {
     return(
         <section className="container">
         <BlogList {...props} />
         <BlogForm {...props} />
         <Blog {...props} />
         </section>
     )
 }

 export default Blogdisplay; 