import React from 'react'
import data from './data.json'
import {motion} from 'framer-motion'
import { NavLink } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useState } from 'react'
export default function ColorList() {
    const [color,setColor]=useState(data)
    function handlereset() {
        window.location.reload();
      }
    function handlesearch(e){
        e.preventDefault()
     var search=document.getElementById("searchbar").value;
    let newdata= data.filter((curr,index)=>{
         
        if(data[index].color.toLowerCase()===search.toLowerCase()||data[index].value.toLowerCase()===search.toLowerCase()){
            
            return data[index]
        }
        
     })

    setColor(newdata)
    document.getElementById('reset').style.display = 'block';
    document.getElementById('reset2').style.display = 'block';
    if(newdata.length===0){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Not found!",
            footer: '<h6>Click on reset button</h6>'
          });

        

    }
     
    }
  return (
    <div className='container'>
        <center>

        <form class='d-flex' role='search' onSubmit={handlesearch} style={{marginTop:"1rem"}} >
          <input class='form-control me-2' type='search' id='searchbar' placeholder='Search' aria-label='Search' />
          <button class='btn btn-outline-success' type='submit'>
            Search
          </button>
        </form>
      <div className='row' style={{marginTop:"1rem"}}>
        {
            color.map((curr,index)=>{
                return <motion.div whileHover={{scale:'1.1'}} className='col-sm-12 col-md-3 col-lg-4' style={{ backgroundColor : color[index].value }}
>
                   <center> <h6 style={{padding:'1rem',margin:'0.5rem',color:color[index].value==="#000"?"white":null}}>{color[index].color}</h6></center>
                   <center> <p style={{padding:'1rem',color:color[index].value==="#000"?"white":null}}>{color[index].value}</p></center>

                    </motion.div>
            })
        
        }
      </div> 
      
       <img id='reset' style={{ display: 'none', marginTop: '1rem', cursor: 'pointer' }} src='reset icon.png' onClick={handlereset} alt='Reset Icon' /> 
      
       <center><h6 id="reset2"  style={{ display: 'none' }}>Click to Reset</h6></center> 
      </center>

    </div>
  )
}
