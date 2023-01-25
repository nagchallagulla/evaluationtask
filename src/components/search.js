
import { useEffect, useState } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import List from "./lists";


const Autocomplete = () => {
    const [fetchApi, setApi] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchresults] = useState([]);
    
 
    // useEffect(() => {
    //     axios.get('https://run.mocky.io/v3/4b705c6d-e874-4cb5-8214-262416a7118f').
    //         then((Response) => {
    //             setApi(Response.data);
    //          //console.log(Response.data);
    //         },
    //            [] )
    // })
    
    function handleSubmit(e) {
        
        window.alert('print successfull.');
      }

    const searchData = (value) => {
        setSearchTerm(value);
        axios.get('https://run.mocky.io/v3/4b705c6d-e874-4cb5-8214-262416a7118f').
        then((Response) => {
            setApi(Response.data);
        });
    
        if (searchTerm !== '') {
            const filterData = fetchApi.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchresults(filterData);
        }

        
       if(searchResults.length===0){
        console.log('nodata found');
       
       }
        return(
            <List searchdResults={searchResults}></List>
          )
        

           
   
    
    }
    useEffect=(()=>{

     }, [])

    return (
        <>
           <center>
            <h2>Sports Search</h2>
            <div>
              Typehere:<input type="text" onChange={(e) => searchData(e.target.value)} />
             

            </div>

            </center>

            {searchTerm.length > 1 ? (
                <ul>
                    {searchResults.map(item => (
                           <>
                          <div className="col-md-4 mb-4" key={item.id}>
                          <h5 className="card-title">SearchedList:{item.label}</h5>
                                           <div class="card">
                                           
                                             <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                            <p className="description">{item.description}</p>
                                           </div>
                                          </div>
                                    </div>
                                    <div>
                                    <Button variant="primary"   onClick={handleSubmit} type="submit" className='col-lg-02'>print</Button>
                         </div>
                         <div>
                             <div className="count">Count : {searchResults.length} </div>
                         </div>
                         </>
                    ))

                    }
                </ul>
            ) : (
                <ul>
                    {fetchApi.map(item => (
        
                               
                        
                        <div className="col-md-4 mb-4" key={item.id}>
                                           <div class="card">
                                           <h5 className="card-title">{item.label}</h5>
                                             <img src={item.image} className="card-img-top" alt="..." />
                                            <div className="card-body">
                                              
                                              <p className="description">{item.description}</p>
                                           </div>
                    
                                          </div>
                                    </div>

                    ))

                    }
                </ul>
            )
            }

        </>

    );
}
export default Autocomplete;
