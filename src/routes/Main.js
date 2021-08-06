import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import NumberFormat from 'react-number-format'
import {Pagination} from '../utils/Pagination';
import { useHistory } from 'react-router-dom';

export default function Main() {
    const [cryptoList,setCryptoList]= useState([]);

      

       // DECLARING THE STATES NEEDED FOR THE PAGINATION
        const [currentPage,setCurrentPage] = useState(1);
        const [postsPerPage,setPostsPerPage] = useState(12);
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = cryptoList.slice(indexOfFirstPost,indexOfLastPost);

        const paginate = (pageNumber)=>{
              setCurrentPage(pageNumber)
        }

    useEffect(()=>{
        //getting the data
        axios.get('https://api.coinlore.net/api/tickers/')
        .then((response)=>{
            setCryptoList(response.data['data'])
            console.log(response.data['data'])
        })
    },[])

    let history = useHistory();
    return (
        <div className="Header container">
            <div className="col-md-12">
               <div className="row d--f jc--c">
                  <h1 className="text-center text-white mt-4">Welcome to Cryptocurrency Website</h1>
               </div>
               <div className="row" style={{paddingLeft:"35px"}}>
                   <div className="ctyptoList row d--f">
                       {
                           // displaying the data
                           currentPosts.map((coin)=>{
                               return (
                                   <div className="card col-md-4 mt-4"
                                   style={{width:"20rem",marginLeft:"15px",marginRight:"15px"}}
                                   onClick={()=>history.push(`/currency/${coin.id}`)}>
                                        
                                        <div className="card-body">
                                            <h5 className="card-title">{coin.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">
                                             
                                             <NumberFormat  value={coin.price_usd} displayType={'text'} 
                                             thousandSeparator={true} prefix={'$'}/>   
                                            </h6>
                                        </div>
                                   </div>
                               );
                           })
                       }
                         <div className="mt-4" style={{marginBottom:"25px"}}></div> 
                       <Pagination postsPerPage ={postsPerPage} totalPosts = {cryptoList.length} 
                        paginate ={paginate} />
                   </div>
               </div>
            </div>
        </div>
    )
}
