import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

/**
 * Renders the footer section with a contact prompt.
 *
 * @component
 * @returns {JSX.Element} The footer UI element.
 */
function Footer() {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#001f3f",
        color: "#ffffff",
        textAlign: "center",
        py: 3,
        mt: 4,
      }}
    >
      <Typography>Have any questions?</Typography>
      <Button
        onClick={() => navigate("/contact")}
        variant="text"
        sx={{
          color: "#ffffff",
          textDecoration: "underline",
          "&:hover": {
            color: "#aad8ff",
          },
        }}
      >
        Contact Us
      </Button>
    </Box>
  );
}

export { Footer };
