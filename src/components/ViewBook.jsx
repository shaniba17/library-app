import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ViewBook = () => {
    const [data, changedata] = useState([])
    const fetchData = () => {
        axios.get("").then(
            (response) => {
                console.log(response.data)
                changedata(response.data)
            }
        ).catch(
            (error) => {
                console.log(error.message)
                alert(error.message)
            }
        ).finally()
    }
    useEffect(() => { fetchData() }, [])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Book Title</th>
                                        <th scope="col">Author</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">No of Pages</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.map(
                                        (value,index) => {
                                            return <tr>
                                            <td>{value.booktitle}</td>
                                            <td>{value.author}</td>
                                            <td>{value.price}</td>
                                            <td>{value.noofpages}</td>
                                        </tr>

                                        }
                                    )

                                    }
                                       </tbody>
                                       </table>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            )
}

            export default ViewBook