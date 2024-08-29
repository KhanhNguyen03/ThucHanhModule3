import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Create(){
    let [title,setTitle]=useState("");
    let [price,setPrice]=useState("");
    let [description,setDescription]=useState("");
    let navigate=useNavigate();
    const Submit = (event) => {
        event.preventDefault();

        let products = {
            title: title,
            price: price,
            description: description,
        };

        axios.post("http://localhost:3000/products", products)
            .then(() => {
                alert('Thêm thành công');
                // Điều hướng về trang /products sau khi thêm thành công
                navigate("/products");
            })
            .catch(error => {
                console.error("Có lỗi xảy ra:", error);
            });
    };


    return(
        <>


            <div className="container mt-5">
                <div className="card">
                    <div className="card-header">
                        <h4>Thêm sản phẩm</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={Submit}>
                            <div className="form-group">
                                <label>Tên sản phẩm</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Giá</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label>Mô tả</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary mr-2">
                                Thêm
                            </button>
                            <button type="button" className="btn btn-secondary" onClick={() => navigate("/products")}>
                                Trở lại
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    )
}