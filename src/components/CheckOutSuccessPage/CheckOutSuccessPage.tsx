import { Card, CardContent, Typography, Button, Box } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function CheckOutSuccess() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 4,
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
