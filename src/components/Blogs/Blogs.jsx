import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <section className="w-2/3">
            <h3>Blogs: {blogs.length}</h3>  
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
            }      
        </section>
    );
};

export default Blogs;