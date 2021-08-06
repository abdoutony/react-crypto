import React from 'react'
export const   Pagination =({postsPerPage,totalPosts,paginate}) => {
    const pageNumbers = [];
    for(let i =1; i< Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
            <nav aria-label="Page navigation">
              <ul className="pagination justify-content-center">        
                {
                pageNumbers.map((number)=>(

                    <li className="page-item"   key={number}>
                        <a className="page-link" href="#"  
                        onClick={()=>{paginate(number)}}>{number}</a>
                    </li>
                ))
                }
              </ul>
            </nav> 
    )
}