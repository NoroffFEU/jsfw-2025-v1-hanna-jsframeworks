import { Box, TextField } from "@mui/material";

type SearchBarProps = {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
};

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
