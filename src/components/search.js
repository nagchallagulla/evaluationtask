import { useEffect, useState } from "react";
import axios from "axios";

const Autocomplete = () => {
    const [fetchApi, setApi] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchresults] = useState([]);
    useEffect(() => {
        axios.get('https://run.mocky.io/v3/4b705c6d-e874-4cb5-8214-262416a7118f').
            then((Response) => {
                setApi(Response.data);
                //console.log(Response.data);
            },
                [])
    })
    function handleSubmit(e) {
        e.preventDefault();
        window.alert('print by id.');
      }
    const searchData = (value) => {
        setSearchTerm(value);

        if (searchTerm !== '') {
            const filterData = fetchApi.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase());
            })
            setSearchresults(filterData);
        }
       
       else  if (searchTerm ==''){
        console.log('no data found');

       return <h3 style={{color:'red'}}>No Matching Record Found!</h3>;
       }
        else{
         setSearchresults(fetchApi);
        }
       

    }
    return (
        <>
           <center>
            <div>
              Typehere:<input type="text" onChange={(e) => searchData(e.target.value)} />
            </div>

            </center>

            {searchTerm.length > 1 ? (
                <ul>
                    {searchResults.map(item => (
                        //    <><li>{item.label} <img src={item.image} />
                        //     <div>{item.description}</div></li>
                           <>
                           <div className="template" key={item.id}>
                            <h3>{item.label}</h3>
                            <img src={item.image} alt="" />
                         <p className="description">{item.description}</p>
                         <button onClick={handleSubmit} type="submit">print</button>
                         </div>
                         <div>
                         <div>
                             <div className="searchresult">Search Results for : {searchData}</div>
                             <div className="count">Count : {searchResults.length} </div>
                         </div>
                         </div>
                         </>
                    ))

                    }
                </ul>
            ) : (
                <ul>
                    {fetchApi.map(item => (
                        // <li>{item.label} <img src={item.image} />
                        //     <div>{item.description}</div></li>
                               
                            <div className="template" key={item.id}>
                                <h3>{item.label}</h3>
                            <img src={item.image} alt="" />
                         <p className="description">{item.description}</p>
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