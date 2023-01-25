// export const List=(item)=>{
    
//     return (
//         <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
//             <img src={item.image} class="card-img-top" alt={item.description}/>
//                 <div class="card-body text-center">
//                     <h5 class="card-title">{item.label}</h5>
//                 </div>
// </div>
//             );
// }   
  


function List({ searchResults, searchTerm }) {
    console.log(searchTerm);
    if (searchResults.length === 0){
        console.log('no datafound');
        return <h3 style={{color:'red'}}>No Matching Record Found!</h3>;

    } 
    return (
        <div>
            <div className='div2'>
                    
                <div className="count">Count : {searchResults.length} </div>
            </div>
            {
                searchResults.map((item)=>{
                    return(
                        <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                                     <img src={item.image} class="card-img-top" alt={item.description}/>
                                        <div class="card-body text-center">
                                            <h5 class="card-title">{item.label}</h5>
                                    </div>
                                    </div>
                    )
                })
            }
        </div>
    );
}

export default List;
          
