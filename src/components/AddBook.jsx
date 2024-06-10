import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddBook = () => {
    const [data,setData]=useState(
        {
            "booktitle":"",
            "author":"",
            "price":"",
            "noofpages":""
        }
    )
    const inputHandler=(event)=>
        {
            setData({...data,[event.target.name]:event.target.value})
        }
    const readValue=()=>
        {
            console.log(data)
            axios.post("",data).then(
                (response)=>
                    {
                        console.log(response.data)
                        if (response.data.status=="success") {
                            alert("Successfully")
                            
                        } else {
                            alert("Error")
                            
                        }
                    }
            ).catch()
        }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <h1>
                            <u>
                                <center>Book Details</center>
                            </u>
                        </h1>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Book Title</label>
                            <input type="text" className="form-control" name='booktitle' value={data.booktitle} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">Price</label>
                            <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <label htmlFor="" className="form-label">No of Pages</label>
                            <input type="text" className="form-control" name='noofpages' value={data.noofpages} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xl6">
                            <button className="btn btn-success" onClick={readValue}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddBook