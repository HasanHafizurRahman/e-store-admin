import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function EditProductPage() {
  const [productInfo, setProductInfo] = useState(null);
  const router = useRouter();
  // console.log({ router });
  const { id } = router.query;
  useEffect(() => {
    if (!id) {
      return;
    }
    axios.get(`/api/products?id=${id}`).then((res) => {
      setProductInfo(res.data);
    });
  }, [id]);
  return (
    <Layout>
      <h2 className="text-2xl text-primary mb-2">Edit this product</h2>
      {productInfo && <ProductForm {...productInfo} />}
    </Layout>
  );
}

export default EditProductPage;
