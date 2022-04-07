import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import CategoryList from "../components/CategoryList";

export async function getStaticProps() {
  const { data: products } = await commerce.products.list();
  const { data: categories } = await commerce.categories.list();
  return {
    props: {
      products,
      categories,
    },
  };
}

export default function Shop({ products, categories }) {
  return (
    <>
      <h1>Shop All</h1>
      <CategoryList categories={categories}/>
      <ProductList products={products} />
    </>
  );
}