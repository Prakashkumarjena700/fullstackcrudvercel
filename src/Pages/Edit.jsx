import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Edit() {
    const baseurl = process.env.REACT_APP_BASE_URL

    const [obj, setObj] = useState({})

    const { _id } = useParams()


    const getData = () => {
        fetch(`${baseurl}data/${_id}`)
            .then(res => res.json())
            .then(res => setObj(res))
            .catch(err => console.log(err))
    }
    useEffect(() => {
        getData()
    }, [])

    const [name, setname] = useState('')
    const [brand, setbrand] = useState('')
    const [price, setprice] = useState('')
    const [img, setimg] = useState('')

    const UpdateProduct = () => {
        let payload = {
            name: name || obj.name,
            brand: brand || obj.brand,
            price: Number(price) || obj.price,
            img: img || obj.img
        }

        fetch(`${baseurl}data/${_id}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(res => console.log(res))
            .then(res => getData())
            .catch(err => console.log(err))
            alert("Product has been updated")
    }

    return (
        <div className='editcontainer'>
            <div>
                <p>Name : {obj && obj.name}</p>
                <p>Brand : {obj && obj.brand}</p>
                <p>Price : ₹{obj && obj.price}</p>
                <img width='150px' src={obj && obj.img} alt="" />
            </div>
            <div>
                <input type="text" placeholder={obj.name || 'Name'} onChange={(e) => setname(e.target.value)} value={name} />
                <input type="text" placeholder={obj.brand || 'Brand'} onChange={(e) => setbrand(e.target.value)} value={brand} />
                <input type="number" placeholder={obj.price || 'Price'} onChange={(e) => setprice(e.target.value)} value={price} />
                <input type="text" placeholder={obj.img || 'Image'} onChange={(e) => setimg(e.target.value)} value={img} />
                <button onClick={UpdateProduct} >Add</button>
            </div>
        </div>
    )
}
