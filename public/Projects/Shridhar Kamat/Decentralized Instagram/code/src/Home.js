import React,{useContext,useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Post from './Post'
import {Handlers} from './App'
const  ipfsClient  = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' })

function Home() {
    const [isReady, setIsReady] = useState(false)
    const [isModal, setIsModal] = useState('none')
    const [accs, setAccs] = useState()
    const [captureText, setCaptureText] = useState("");
    const [posts, setPosts] = useState([])
    const [buffer, setBuffer] = useState();
    const [memeHash, setMemeHash] = useState();

    const context = useContext(Handlers)
    useEffect(() => {
        async function initialFetch(){
            setPosts(await context.contract?.methods.getPosts().call())
            setAccs(await context.contract?.methods.getAccs().call())
            //console.log(await context.contract?.methods.getAccs().call())
        }
        initialFetch();
      
        setIsReady(true);
    }, [posts])

    

    function captureFile(event){
        event.preventDefault() ;
        
        const file = event.target.files[0]
        const reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => {
          setBuffer(Buffer(reader.result))
        }
      }

    async function onPost(e){
        e.preventDefault();
        
        ipfs.add(buffer,async(error, result)=>{
        console.log(result)
        await context?.contract?.methods?.post(result[0].hash,captureText).send({
            from:context.accounts[0],
            gas:'1000000'
        })
        setIsModal('none');
        setCaptureText('');
        if(error){
          console.log(error)
        }
      })
    }

    if(isReady){
    return (
        <div style={{background:'#fafafa',minHeight:'100vh'}}>
            <Navbar />
            
            <div className="container mx-auto grid grid-cols-3 grid-flow-col gap-7 py-10" style={{width:'70%'}}>
                <div className="col-span-2">
                    {
                    
                        posts?.map((post,i)=>{
                            return(
                                <Post key={i} poster={post.poster} image={post.image} caption={post.caption} commentors={post.commentors} comments={post.comments} id={post.id}/>
                            )
                       })
                       

                    }
                    
                </div>
                <div className="col-span-1 relative">
                    <div className="fixed">
                    <div className="flex items-center mt-5">
                        <img src={`https://robohash.org/${context.accounts? context.accounts[0] : 0}`} className="img-fluid border rounded-full" width="70"/>
                        <div>
                            <h2 className="ml-5">{context.accounts? (context.accounts[0]).slice(0, 15).concat('...') : 0}</h2>
                        </div>
                    </div>
                    <div className="mt-5">
                        <div className="mb-2 text-sm flex justify-between items-center">
                            <h6 className=" text-gray-500 font-semibold">Suggestions for you:</h6>
                            <h6>See All</h6>
                        </div>
                        
                        <div>
                            {
                                accs?.map((res,i)=>{
                                    return(
                                        res!== context.accounts[0] ? <div className="flex items-center my-4">
                                            <img src={`https://robohash.org/${res}`} className="img-fluid border rounded-full mr-3" width="40"/>
                                            <h1 key={i}>{(res).slice(0, 15).concat('...')}</h1>
                                        </div>
                                        :
                                        <></>
                                    )
                                })
                            }
                        </div>
                    </div>
                    </div>
                </div>
                <div role="button" onClick={()=>{setIsModal('flex')}} className=" fixed bottom-5 right-5 bg-white shadow-lg border border-black p-2 px-4 rounded-lg">
                    +
                </div>
                <div className="w-full h-full flex justify-center items-center bg-gray-200 fixed top-0 left-0 bg-opacity-70" style={{display:isModal}}>
                    <form onSubmit={onPost} className="p-5 bg-white opacity-100 rounded-md">
                        <input type="text" placeholder="Type here" className="p-2 mx-auto rounded-sm w-4/5 block w-full border-2" onChange={(e)=>{setCaptureText(e.target.value)}} value={captureText} style={{background:'#fafafa'}}/>
                        <input type="file" className="p-5 pl-0" onChange={captureFile}/>
                        <input type="submit" value="Submit" className="px-3 py-1 border border-gray-900 rounded-sm"/>
                    </form>
                </div>
                
            </div>  
        </div>
    )
    }
    else{
        return(
            <h1>Loading</h1>
        )
    }
}

export default Home
