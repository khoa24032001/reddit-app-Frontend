import './post.css'
import Input from '../InputFields/Input';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from '../app/redux/postSlice';

const MakePost = (props) =>{
    const {setOpenPost} = props;

    const [title, setTitle] = useState("Add a title");
    const [desc, setDesc] = useState("Add some descriptions");
    const [selectedIdx, setSelectedIdx] = useState(0);
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const dispatch = useDispatch();
    const handlePost = () =>{
        setOpenPost(false);
        const newPost = {
            title: title,
            description: desc,
            tag: selectedIdx
        };
        dispatch(createPost(newPost));
    }
    return (
        <section className="makepost-container">
            <div className="makepost-navigation">
                <p className="makepost-save" onClick={handlePost}>
                    Post
                </p>
            </div>
            <Input label="Title" data={title} setData={setTitle} inputType="textarea" classStyle="makepost-title"/>
            <Input label="Description" data={desc} setData={setDesc} inputType="textarea" classStyle="makepost-desc"/>
            <label>Tags</label>
            <div className="makepost-tags">
                {tags.map((tag,idx)=>{
                    return (
                        <button key={idx} 
                            className ={
                                    `${selectedIdx === idx 
                                    ? `makepost-tags-selected` 
                                    : `makepost-tags-${tag}`}`
                                }
                            onClick={()=>setSelectedIdx(idx)}
                        >
                            {tag}
                        </button>
                    )
                })}
            </div>
        </section>
    );
}

export default MakePost