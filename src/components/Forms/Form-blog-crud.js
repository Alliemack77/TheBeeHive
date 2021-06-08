import '../../sass/components/forms.scss';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost, updatePost } from '../../actions/blog';
import '../../sass/components/forms.scss';
import Button from '../Button';

export default function FormBlogCrud({backgroundColor, inputColor, btnText, btnColor,blogId, setBlogId }) {
    const [blogData, setBlogData] = useState({
        title: "",  
        body: "",
    })

    const blog = useSelector((state) => blogId ? state.posts.find((post) => post.id === blogId): null);
    console.log("FORM BLOG", blog)
    const dispatch = useDispatch();

    useEffect(() => {
        if (blog) {
            delete blog.author;
            setBlogData(blog)
        }
    }, [blog])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (blogId) {
            dispatch(updatePost(blogId, blogData))
        } else {
            dispatch(createPost(blogData));
            
        }
        clear()
    } 
    const clear = () => {
        setBlogId(null);
        setBlogData({
            title: "", 
            body: "", 
            author: "",
        })
    } 
    return(
        <form className={`form add ${backgroundColor}`} onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input 
                    className={inputColor}
                    id="title" 
                    name="title" 
                    type="text" 
                    placeholder="title"
                    value={blogData.title}
                    onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                />
            </div>

            <div className="form-group">
                <label htmlFor="body">Text</label>
                <textarea 
                    className="input-textarea" 
                    id="body"
                    name="body" 
                    placeholder="text"
                    value={blogData.body}
                    onChange={(e) => setBlogData({...blogData, body: e.target.value})}
                ></textarea>
            </div>

            <div className="form-group--button">
                    <Button text={btnText} color={btnColor}/>
                    <Link to="/blog">
                        <Button type="text" text="Back to blog" color="outline"/>
                    </Link>
            </div>
        </form>
    )
}  
