import commerce from "../lib/commerce";
import ProductList from "../components/ProductList";
import Link from "next/link";

export async function getStaticProps() {
    const { data: categories } = await commerce.categories.list();
    const { data: products } = await commerce.products.list();

    return {
        props: {
            categories,
            products,
        },
    }
}

export default function IndexPage({categories, products}) {
    return (
        <>
       <h3>
        <Link href="/shop">
          <a>Shop all</a>
        </Link>
      </h3>
        </>
    )
}