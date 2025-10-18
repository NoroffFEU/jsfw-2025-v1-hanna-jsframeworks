import { Box, TextField, InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

type SearchBarProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

/**
 * A reusable search iput for filtering products
 *
 * @component
 * @param {Object}
 * @param {string} props.value - The current input value
 * @param {Function} props.onChange - Callback to update the parent component on change
 * @returns {JSX.Element} A tyled text input field
 */
function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <Box sx={{ maxWidth: 200 }}>
      <TextField
        fullWidth
        size="small"
        margin="dense"
        placeholder="Search products…"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        variant="outlined"
        inputProps={{ "aria-label": "Search products" }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <SearchOutlined sx={{ color: "#001f3f" }} fontSize="small" />
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiInputBase-input": { color: "#001f3f" },
          "& .MuiInputBase-input::placeholder": {
            color: "#001f3f",
            opacity: 1,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#001f3f" },
            "&:hover fieldset": { borderColor: "#001f3f" },
            "&.Mui-focused fieldset": { borderColor: "#001f3f" },
          },
        }}
      />
    </Box>
  );
}

export { SearchBar };
