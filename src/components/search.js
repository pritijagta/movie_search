import './search.css'
import { useState } from 'react'

export default function Search()
{
    const apikey= "4a525d4d";
    const[text,settext]=useState("")
    
    const[allmovie,setallmovie]=useState([])
    const[movie,setmovie]=useState([])
    function moviesearch()
    {
        fetch(`https://www.omdbapi.com/?s=${text}&apikey=${apikey}`)
        .then((response)=>
        { 
            return response.json();
          
        }).then((result)=>
        {
            if(text==="")
            {
                alert("Enter some movie")
            }
            else
            {
               if (result.Error === "Movie not found!") {
                    alert("Movie not found");
                  } else {
                   setallmovie(result.Search)
                  }
                }

                
            
           
            })
        
}

    function textinput(event)
    {
        settext(event.target.value)
        console.log(text)
    }

    return(
    <div >
        <nav className="navbar bg-body-tertiary  ">
        <div className="container-fluid bg-black search d-flex justify-content-center">
          <form className="d-flex " role="search">
            <input className="form-control me-2" type="search" value={text} onChange={textinput} placeholder="Search" aria-label="Search"/>
            <button className="btn btn-success" type="button" onClick={moviesearch} >Search</button>
          </form>
        </div>
    </nav>
    <div className='container' >
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 ' >
        { allmovie.map((ele)=>(

        <div className='col mb-4' key={ele.imdbID} >
        <div className="card mt-5" style={{width: "18rem"}}>
        <img src={ele.Poster} className="card-img-top" alt="Image"/>
        <div className="card-body">
          <h5 className="card-title"><strong>{ele.Title}</strong> </h5>
          <div className='d-flex justify-content-between'>
          <div className="card-text">Year: {ele.Year}</div>
          <div className="card-text">Type: {ele.Type}</div>
          </div>
         
        </div>
      </div>
  
        </div>
        )

        )
}

    </div>
    </div>
   
        


    </div>
      
    )
}