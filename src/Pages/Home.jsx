import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Home() {
    const baseurl = process.env.REACT_APP_BASE_URL

    console.log(baseurl)

    const [posts, setPosts] = useState([])

    const getData = () => {
        fetch(`${baseurl}data`)
            .then(res => res.json())
            .then(res => setPosts(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])
    console.log(posts)

    const deleteFN = (id) => {
        fetch(`${baseurl}data/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .then(res => getData())
        alert("Product has been removed")
    }
    return (
        <div>
            <h1>Welcome</h1>
            <Link className='add' to='/add' >Add</Link>
            <div className='productsContainer' >
                {
                    posts && posts.map((ele) => <div key={ele._id} >
                        <img width='100px' src={ele.img} alt="" />
                        <p>Name : {ele.name}</p>
                        <p>Brand : {ele.brand}</p>
                        <p>Price : ₹{ele.price}</p>
                        <div>
                            <button onClick={() => deleteFN(ele._id)} >Remove</button>
                            <Link to={`/${ele._id}`} >Edit</Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    )
}
