import { TProduct } from "../../types/products";
import { Box, Typography } from "@mui/material";

type Props = {
  product: TProduct;
};

function ProductInfo({ product }: Props) {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {product.title}
      </Typography>
      <img
        src={product.image.url}
        alt={product.image.alt}
        style={{ width: "100%", maxWidth: "500px", marginBottom: "1rem" }}
      />
      <Typography variant="body1" paragraph>
        {product.description}
      </Typography>
      <Typography variant="h6" gutterBottom>
        Price:{" "}
        {product.discountedPrice < product.price ? (
          <>
            <s>${product.price}</s>{" "}
            <span style={{ color: "#00796b" }}>${product.discountedPrice}</span>
          </>
        ) : (
          <span>${product.price}</span>
        )}
      </Typography>

      {product.tags.length > 0 && (
        <Box mt={2}>
          <Typography variant="subtitle1">Tags:</Typography>
          <Typography variant="body2">{product.tags.join(", ")}</Typography>
        </Box>
      )}

      {product.reviews.length > 0 && (
        <Box mt={3}>
          <Typography variant="subtitle1">Reviews:</Typography>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id}>
                <strong>{review.username}</strong> ({review.rating}/5):{" "}
                {review.description}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
}

export { ProductInfo };
