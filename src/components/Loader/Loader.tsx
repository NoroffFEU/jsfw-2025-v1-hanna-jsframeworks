import { Box, CircularProgress } from "@mui/material";

/**
 * A simple loading spinner centered in a box.
 * Used to indicate loading states in the app.
 *
 * @component
 * @returns {JSX.Element} A CircularProgress spinner
 */
function Loader() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress sx={{ color: "#001f3f" }} />
    </Box>
  );
}

export { Loader };
