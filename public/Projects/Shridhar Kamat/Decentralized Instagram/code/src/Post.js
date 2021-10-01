import React,{useState,useContext,useEffect} from 'react'
import MetamaskLogo from "./Images/metamask.png"
import {Handlers} from './App'

function Post(props) {
    const context = useContext(Handlers)
    const [isReady, setIsReady] = useState(false)
    const [comment, setComment] = useState("")
    const [commentors, setCommentors] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        async function initialFetch(){
            setComments(await context.contract?.methods.getComments(props.id).call())
            setCommentors(await context.contract?.methods.getCommentors(props.id).call())
            //console.log(await context.contract?.methods.getAccs().call())
        }
        initialFetch();
      
        setIsReady(true);
    }, [comments])

    async function sendComment(){
        await context?.contract?.methods?.comment(props.id,comment,String(context.accounts[0])).send({
            from:context.accounts[0],
            gas:'1000000'
        })
    }


    if(isReady){
    return (
        <div className="container border rounded mb-6">
            <div className="flex justify-between items-center py-3.5 px-3 border-b" style={{background:'#fafafa'}}>
                <div className="flex items-center">
                    <img src={`https://robohash.org/${props.poster}`} className="img-fluid rounded-full mr-2" width="30"/>
                    {(props.poster).slice(0, 15).concat('...') }
                </div>
                <svg aria-label="More Options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6.5" cy="12" r="1.5"></circle><circle cx="17.5" cy="12" r="1.5"></circle></svg>
            </div>
            <div className="bg-white">
                <img src={`https://ipfs.infura.io/ipfs/${props.image}`} className="w-full img-fluid"/>
            </div>
            <div className="py-3 mx-2 flex justify-between">
                <div className="flex">
                    <svg aria-label="Activity Feed" className="_8-yf5 mx-2" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
                    <svg aria-label="Comment" className="_8-yf5 mx-2" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
                    <svg aria-label="Share Post" className="_8-yf5 mx-2" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
                    
                </div>
                <svg aria-label="Save" className="_8-yf5 mx-2" color="#262626" fill="#262626" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
            </div>
            <div className="mx-4 pt-1 pb-3">
                <strong>{(props.poster).slice(0, 15).concat('...') } </strong> :&nbsp; {props.caption}
            </div>
            <div className="mx-4 pb-3">
            
                {
                    commentors.map((commentor,i)=>{
                        let commentTemp = comments[i];
                        return(
                            <div key={i} className="pb-3"><span>{(commentor).slice(0, 15).concat('...') } </span> :&nbsp; {commentTemp}</div>
                        )
                    })
                }
            </div>
            <div className="flex justify-between items-center py-3.5 px-3 border-t" style={{background:'#fafafa'}}>
                <div className="flex items-center">
                    <svg aria-label="Emoji" class="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                    <input className=" bg-transparent ml-3" placeholder="Add a comment" onChange={(e)=>{setComment(e.target.value)}} value={comment}/>
                </div>
                <h4 role="button" onClick={sendComment} className=" font-semibold " style={{color:'#0095f6'}}>Post</h4>
            </div>
        </div>
    )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }
}

export default Post
