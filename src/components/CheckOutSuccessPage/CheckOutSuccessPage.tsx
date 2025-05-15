import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

/**
 * Displays a confirmation message after successful checkout, with the option to return to the home page
 *
 * @component
 * @returns {JSX.Element} The checkout success UI.
 */
function CheckOutSuccess() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        m: 4,
      }}
    >
      <Card
        sx={{
          maxWidth: 550,
          textAlign: "center",
          backgroundColor: "#fff",
          boxShadow: 3,
        }}
      >
        <CheckCircleOutline sx={{ color: "#001f3f", fontSize: 100, mt: 4 }} />
        <CardContent>
          <Typography variant="h5">Order Confirmed!</Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Thank you for your purchase. You will soon receive a confirmation
            email with your order details.
          </Typography>
          <Button
            onClick={() => navigate("/")}
            variant="contained"
            color="primary"
            sx={{
              mb: 2,
              backgroundColor: "#001f3f",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            More Shopping
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export { CheckOutSuccess };
