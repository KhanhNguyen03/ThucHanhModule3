import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

export default function List(){
    let [products,setProducts]=useState([]);

    const getList = ()=>{
        axios.get("http://localhost:3000/products").then((res)=>{
            let data=res.data;
            setProducts(data)
        })

    }
    useEffect(() => {
        getList();
    },[]);

    const remove =(id)=> {
       let isConfirmed=window.confirm("Are you sure");
       if(isConfirmed){
           axios.delete('http://localhost:3000/products/'+id ).then((res) => {
               alert("Successfully deleted");
               getList();
           })
       }

    }

    return (
        <div className="container mt-5">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h4>Danh sách sản phẩm</h4>
                    <Link to="create" className="btn btn-success">Thêm mới</Link>
                </div>
                <div className="card-body">
                    <table className="table table-bordered">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Tên sản phẩm</th>
                            <th>Mô tả</th>
                            <th>Giá</th>
                            <th>Hành động</th>
                        </tr>
                        </thead>
                        <tbody>
                        {products.map((product, index) => (
                            <tr key={product.id}>
                                <td>{index + 1}</td>
                                <td><Link to={`/product/${product.id}`}>{product.title}</Link></td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button className="btn btn-danger mr-2" onClick={() => remove(product.id)}>
                                        Xóa
                                    </button>
                                    <Link to={`/edit/${product.id}`} className="btn btn-primary">
                                        Sửa
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}