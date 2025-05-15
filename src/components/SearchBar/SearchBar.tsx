import { Box, TextField } from "@mui/material";

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
    <Box sx={{ maxWidth: 200, mb: 4 }}>
      <TextField
        fullWidth
        label="Search..."
        variant="outlined"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#001f3f",
            },
          },
        }}
      />
    </Box>
  );
}

export { SearchBar };
