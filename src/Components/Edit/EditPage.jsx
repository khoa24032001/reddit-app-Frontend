import "./edit.css"
import { useState } from "react";
import Input from "../InputFields/Input";
import { useSelector, useDispatch } from "react-redux";
// import { update } from "../app/redux/userSlice";
import { updateUser } from "../app/redux/apiRequest";

const EditPage = (props) => {
    const {setEdit} = props;
    const avaUrl = [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGPtuVOh3Fhvp7oC4C5RG-s3TEk_Ca9bzGmQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbGAMLuWQcxug2Gvm-1f1fIZLG-zSVcTTQxQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Gk2GcCUcT-nghPZhrjOplzA12EPnG1BZ2w&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbmUO2643XwG7mLhYkzqD62YUfqtNuZgHtzA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnDggX9YseW-sSYFR2KmDyYMaDljPmU-LNxA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6QasBOJg-Y8NMHbfeg4A2zzEtw2dmqPA3WQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuxYQ8vuu-IsMXVIxnAvOwlXQR5GiZVGP-Ew&usqp=CAU",
        "data:image/png;base64,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",
    ];
    const user = useSelector((state)=>state.user);
    const dispatch = useDispatch();

    const [name,setName] = useState(user.name);
    const [age,setAge] = useState(user.age);
    const [about,setAbout] = useState(user.about);
    const [theme, setTheme] = useState("#ff9051");
    const [url, setUrl] = useState(user.avaUrl);
    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
        const updatedUser = {
            name: name,
            age: age,
            about: about,
            avaUrl: url,
            themeColor: theme,
        }
        updateUser(updatedUser,dispatch);
    }

    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="edit-container">
                    <button className="close"> SAVE </button>
                <div className="edit-profile"> Edit Profile </div>
                <div className="input-container">
                    <Input label="Display name" data={user.name} setData={setName}/>
                    <Input label="Age" data={user.age} setData={setAge}/>
                    <Input label="About" data={user.about} setData={setAbout} inputType="textarea" classStyle="input-about"/>
                <label htmlFor="">Profile Pictures</label>
                <div className="input-image-container">
                    {avaUrl.map((url)=>{
                        return (
                            <>
                                <img src={url} className="input-image" alt="avatar-img" onClick={(e)=>setUrl(e.target.src)} />
                            </>
                        )
                    })

                    }
                </div>
                <div className="theme-container">
                    <label htmlFor="">Theme</label>
                    <input type="color" className="theme-color" onChange={(e)=>setTheme(e.target.value)} />
                </div>
                </div>
                </section>

            </form>
        </>
    );
}
export default EditPage;