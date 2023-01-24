export const List=(item)=>{
    
            return (
                <div class="card my-5 py-4" key={item.id} style={{width: "18rem"}}>
                    <img src={item.image} class="card-img-top" alt={item.description}/>
                        <div class="card-body text-center">
                            <h5 class="card-title">{item.label}</h5>
                        </div>
    </div>
                    );
        }   
          
