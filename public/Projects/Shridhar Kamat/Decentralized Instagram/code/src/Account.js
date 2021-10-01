import React,{useContext,useEffect, useState} from 'react'
import Navbar from './components/Navbar'
import {Handlers} from './App'

function Account() {
    const [isReady, setIsReady] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        async function initialData(){
            if(data === undefined || data.length === 0){
           // console.log(context.accounts[0])
                setData(await context.contract?.methods.getImageData(context.accounts[0]).call())
            }
        }
        initialData();
        setIsReady(true);
    
    }, [data])

    const context = useContext(Handlers)
    if(isReady){
    return (
        <div style={{background:'#fafafa',minHeight:'110vh'}}>
            {console.log(data)}
            <Navbar />
            <div className="container mx-auto py-8 grid grid-cols-3 grid-flow-col" style={{width:'70%'}}>
                <div className="col-span-1">
                    <img src={`https://robohash.org/${context.accounts? context.accounts[0] : 0}`} className="img-fluid border rounded-full ml-auto mr-20" width="170" />
                </div>
                <div className="col-span-2 py-5">
                    <h1 className="text-2xl">{context.accounts[0]}</h1>
                    <br />
                    {data?.length} posts
                </div>
                
            </div>
            <hr width="70%" className="mx-auto"/>
            <div className="container my-12 mx-auto grid  grid-cols-3 grid-flow-row gap-10" style={{width:'70%'}}>
                {
                    data?.map((imgUrl, i)=>{
                        return(
                            <div key={i}>
                                <img src={`https://ipfs.infura.io/ipfs/${imgUrl}`} className="img-fluid border  mx-auto mr-20" width="100%" />
                            </div>
                        )
                    })
                }
    
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

export default Account
