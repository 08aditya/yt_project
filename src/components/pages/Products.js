import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "../../App.css"

const Products = () => { 
  const [api, setApi] = useState();
  const [Iserror, setIserror] = useState()
  useEffect(() => {
    axios.get("https://picsum.photos/v2/list")
      .then((res) => {setApi(res.data )
      // console.log("2",  );
    })
      .catch((error) => { setIserror(error.message) })
  }, []);
  console.log(api)
  return (
    <div className='products'>
      <h1 > products </h1>
      {/* api.map((res) =>  {
        
      }) */}
      
    </div>
  )
}

export default Products
