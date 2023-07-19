import { useEffect, useState } from "react";
import { Spinner } from "@shopify/polaris";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useAppQuery } from "../../hooks";
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
      const productArray = data.data.filter((item) => item.image != null);
      setTotalPages(() => Math.ceil(productArray.length / itemsPerPage));
      setProductList(() => productArray.slice(startIndex, endIndex));
    }
  }, [data, currentPage]);


  const handlePageEvent = (event, value) => {
    console.log('value',value)
    setCurrentPage(() => value - 1)
    // setProductList(() => productArray.slice(startIndex, endIndex));
  }

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
            padding: "1rem 2rem",
            gap : '0.5rem'
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent:'center',
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
      
          <Stack spacing={2} sx={{ margin: '0.5rem 0'}}>
            <Pagination
              count={totalPages}
              showFirstButton
              showLastButton
              onChange={handlePageEvent}
            />
          </Stack>
        </div>
      )}
    </>
  );
}
