import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeleteProductPage = () => {
  const [product, setProduct] = useState();
  const router = useRouter(); // for navigating
  const { id } = router.query; // for getting the product id

  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [id]);

  const goBack = () => {
    router.push("/products"); // for negative navigation
  };

  const deleteProduct = async () => {
    await axios.delete(`/api/products?id=${id}`);
    alert("Product deleted successfully");
    goBack();
  };
  return (
    <Layout>
      <h2 className="text-2xl text-primary text-center">
        Do you want to delete{" "}
        <span className="font-semibold">"{product?.title}"?</span>
      </h2>
      <div className="flex justify-center gap-7">
        <button className="btn-red" onClick={deleteProduct}>
          Yes
        </button>
        <button className="btn-secondary" onClick={goBack}>
          No
        </button>
      </div>
    </Layout>
  );
};

export default DeleteProductPage;
