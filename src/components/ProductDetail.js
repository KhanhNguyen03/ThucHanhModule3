import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
    const { id } = useParams(); // Lấy `id` từ URL
    const [product, setProduct] = useState(null);
    const params = useParams();


    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra:", error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>; // Hiển thị Loading khi chưa có dữ liệu

    return (
        <div className="container mt-5">
            <h2>Chi tiết sản phẩm</h2>
            <p><strong>Tên sản phẩm:</strong> {product.title}</p>
            <p><strong>Giá:</strong> {product.price} VND</p>
            <p><strong>Mô tả:</strong> {product.description}</p>
        </div>
    );
}
