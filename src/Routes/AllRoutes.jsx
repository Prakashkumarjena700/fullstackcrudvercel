import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Add from '../Pages/Add'
import Edit from '../Pages/Edit'
import Home from '../Pages/Home'

export default function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/add' element={<Add />} ></Route>
            <Route path='/:_id' element={<Edit />} ></Route>
        </Routes>
    )
}
