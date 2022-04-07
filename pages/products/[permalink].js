import commerce from "../../lib/commerce";
import React from "react";
import Item from './Item'


export async function getStaticProps({ params }) {
  const { permalink } = params;

  const product = await commerce.products.retrieve(permalink, {
    type: 'permalink',
  });

  return {
    props: {
      product,
    },
  };
}

export async function getStaticPaths() {
  const { data: products } = await commerce.products.list();

  return {
    paths: products.map((product) => ({
      params: {
        permalink: product.permalink,
      },
    })),
    fallback: false,
  };
}

export default function ProductPage({ product }) {

    
  return (
    <>
      <h1>{product.name}</h1>
      <Item key={product.id} {...product} />
      <p>{product.price.formatted_with_symbol}</p>
    </>
  );
}