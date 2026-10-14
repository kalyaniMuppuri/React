import {useEffect, useState} from 'react';

function LikeButton(){
    const [isLiked,setIsLiked]=useState(false);

    function handleLike(){
        setIsLiked(!isLiked);
    }
    useEffect(()=>{
        console.log("hello useEffect!")
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data)=>data.json())
        .then((resp)=>console.log(resp))
        .catch(err=>console.log(err))
    },[isLiked])
    return(
        <div>
            <button onClick={handleLike}>
                {isLiked ?"💚":"❤️"}
            </button>
        </div>
    )
}

export default LikeButton;