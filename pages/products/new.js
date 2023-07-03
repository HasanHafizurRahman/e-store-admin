import Layout from "@/components/Layout";
import ProductForm from "@/components/ProductForm";

const NewProducts = () => {
  return (
    <Layout>
      <h2 className="text-2xl mb-2">New Product</h2>
      <ProductForm />
    </Layout>
  );
};

export default NewProducts;
