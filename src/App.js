import { useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import EditPage from './Components/Edit/EditPage';
import Footer from './Components/Footer/Footer';
import MakePost from './Components/Posts/MakePost';
import PostList from './Components/Posts/PostList';
import { useSelector } from 'react-redux';


function App() {
  const[isEdit,setEdit] = useState(false);
  const[isOpenPost,setOpenPost] = useState(false);
  const pending = useSelector((state)=>state.user.pending);
  const error = useSelector((state)=>state.user.error);
  return (
    <div className="App">
      {isEdit ? <EditPage setEdit={setEdit}/> 
        : !isEdit && !isOpenPost ? (
          <>
            <Header setEdit={setEdit}/>
            <div className="posts-container">
              <PostList/>
            </div>
            <Footer isOpenPost={isOpenPost} setOpenPost={setOpenPost}/>
          </>
        ) : (
          <>
            <Header setEdit={setEdit}/>
            <MakePost setOpenPost={setOpenPost}/>
          </>
        )
      }
      {pending && <p className="loading"> Loading ... </p>}
      {!isEdit && error && (
        <p className="error"> Error when fetching data from server!!! </p>
      )
      }
    </div>
  );
}

export default App;
