import { useEffect, useState } from "react";
import { Pagination, Spinner } from "@shopify/polaris";
import { useAppQuery, useAuthenticatedFetch } from "../../hooks";
import ProductItem from "./ProductItem/ProductItem";


export function ProductsCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 8;

  const { data } = useAppQuery({
    url: "/api/products/all",
    reactQueryOptions: {
      onSuccess: () => {
        setIsLoading(false);
      },
    },
  });

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  useEffect(() => {
    if (data) {
      console.log('data', data);
      const productArray = data.data.filter((item) => item.image != null);
      setTotalPages(() => Math.ceil(productArray.length / itemsPerPage));
      setProductList(() => productArray.slice(startIndex, endIndex));
    }
  }, [data, currentPage]);

  return (
    <>
      {" "}
      {isLoading || !productList.length ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: 'center',
            height: "100vh",
          }}
        >
          <Spinner accessibilityLabel="Spinner example" size="large" />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem 2rem",
            gap : '0.5rem'
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {productList.map((item) => (
              <ProductItem
                key={item.id}
                imageUrl={item.image}
                productName={item.title}
                productDescription={item.body_html}
                price={item.variants[0].price}
                vendor={item.vendor}
              />
            ))}
          </div>
          <Pagination 
            hasNext={currentPage != totalPages - 1}
            hasPrevious={currentPage != 0}
            onPrevious={() => setCurrentPage(prev => prev - 1)}
            onNext={() => setCurrentPage(prev => prev + 1)}
            label={currentPage.toString()}
          />
        </div>
      )}
    </>
  );
}
