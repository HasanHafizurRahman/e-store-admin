import Layout from "@/components/Layout";
import Link from "next/link";

const Products = () => {
  return (
    <Layout>
      <Link className="bg-secondary text-primary" href={"/products/new"}>
        Add New Product
      </Link>
    </Layout>
  );
};

export default Products;
