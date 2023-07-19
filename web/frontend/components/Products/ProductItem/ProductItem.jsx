import React from "react";
import ProductImage from "../ProductImage/ProductImage";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const ProductItem = ({
  title = "NEW ARRIVAL",
  productName,
  productDescription,
  price,
  imageUrl,
  vendor,
}) => {
  return (
      <Card sx={{
        padding: "0.5rem",
        display: "flex",
        flexDirection: "column",
        width: "250px",
        height: "400px",
        background: "#fff",
      }}>
        <CardActionArea sx={{ 
            display: "flex",
            flexDirection: "column",
            alignItems:'flex-start',
            justifyContent: 'flex-start',
            height : '100%', 
            gap: '1rem'}}>
          <CardMedia
            component="img"
            height="150"
            image={imageUrl.src}
            alt={imageUrl.alt}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {productName}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              ${price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActionArea>
            <CardContent>
            <Typography variant="body2" color="text.secondary">
              by {vendor}
            </Typography>
            </CardContent>
        </CardActionArea>
        {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
      </Card>

    // <div style={{ padding: '0.5rem', display: 'flex', flexDirection: 'column', width: '300px', height: '400px', background: '#fff'}}>
    //     <ProductImage
    //         url={imageUrl?.src}
    //         alt={imageUrl?.alt}
    //     />
    //     <Text  variant='headingxl' as='h4'>
    //         {title}
    //     </Text>
    //     <Text as='p' fontWeight='bold'>
    //         {productName}
    //     </Text>
    //     <div style={{ flexGrow: '1'}}>
    //         <Text as='p' fontWeight='medium' >
    //             ${price}
    //         </Text>
    //     </div>
    //     <Text as='p' fontWeight='regular' >
    //             by {vendor}
    //     </Text>
    // </div>
  );
};

export default ProductItem;
