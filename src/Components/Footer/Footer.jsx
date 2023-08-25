import './footer.css'
const Footer = (props) =>{
    const {isOpenPost, setOpenPost} = props;
    return (
        <footer>
            <div className="footer-title" onClick={()=>setOpenPost(!isOpenPost)}>
                {isOpenPost ? 'x' : '+'}
            </div>
        </footer>
    );
}

export default Footer