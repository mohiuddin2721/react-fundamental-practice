import React from 'react';
import './Blog.css'


// const blogsStyle = {
//     border: '3px solid blueviolet',
//     borderRadius: '20px',
//     backgroundColor: 'aquamarine'
// }
const Blog = () => {
    return (
        <article className='blogs'>
            <h1 className='text-danger'>My first Blog about Bangladesh crickets.</h1>
            <p style={{color: "white",backgroundColor: "red", fontSize: "20px", border: "3px solid black", borderRadius: "50px"}}>Current tour: South Africa</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum ab tempora, et commodi facere impedit obcaecati corrupti fuga! Ex quasi maxime, necessitatibus minus perspiciatis culpa vel nam beatae asperiores veritatis.</p>
        </article>  
    );
};

export default Blog;