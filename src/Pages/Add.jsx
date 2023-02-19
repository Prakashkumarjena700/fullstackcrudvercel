import React, { useState } from 'react'

export default function Add() {
    const [name, setname] = useState('')
    const [brand, setbrand] = useState('')
    const [price, setprice] = useState('')
    const [img, setimg] = useState('')

    const addproduct = () => {
        let payload = {
            name,
            brand,
            price,
            img
        }
        const baseurl = process.env.REACT_APP_BASE_URL

        fetch(`${baseurl}data`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))

        alert("Product has been added")


    }

    return (
        <div className='addContainer' >
            <input type="text" placeholder='Name' onChange={(e) => setname(e.target.value)} value={name} />
            <input type="text" placeholder='Brand' onChange={(e) => setbrand(e.target.value)} value={brand} />
            <input type="number" placeholder='Price' onChange={(e) => setprice(e.target.value)} value={price} />
            <input type="text" placeholder='Image' onChange={(e) => setimg(e.target.value)} value={img} />
            <button onClick={addproduct} >Add</button>
        </div>
    )
}
