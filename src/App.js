import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import {useState} from "react";
import List from "./components/List";
import {Home} from "./components/Home";
import Create from "./components/Create";
import {Update} from "./components/Update";
import ProductDetail from "./components/ProductDetail";

function App() {
    return (

        <>
            <Routes>
                <Route path={'/'} element={<Home/>}>
                    <Route path={'products'} element={<List/>}/>
                    <Route path={'create'} element={<Create/>}/>
                    <Route path={'edit/:id'} element={<Update/>}/>
                    <Route path={'product/:id'} element={<ProductDetail/>}/> {/* Route cho chi tiết sản phẩm */}
                </Route>
            </Routes>

        </>
    );
}

export default App;
