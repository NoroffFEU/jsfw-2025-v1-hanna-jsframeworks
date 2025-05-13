import { ContactFormInputs } from "../../types/contact";
import { useForm } from "react-hook-form";
import { Box, Typography, TextField, Button, Card } from "@mui/material";
import { toast } from "react-toastify";

export function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormInputs>();

  const onSubmit = async (data: ContactFormInputs) => {
    try {
      console.log("Sending message:", data);
      toast.success("Message sent successfully!");
      reset();
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      toast.error("Failed to send message.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#f5f5f5",
        mt: 4,
      }}
    >
      <Card
        sx={{
          maxWidth: 550,
          boxShadow: 3,
          backgroundColor: "#fff",
          p: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" color="#001f3f">
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Full Name"
            fullWidth
            margin="normal"
            {...register("fullName", {
              required: "Full name is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters",
              },
            })}
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
          />
          <TextField
            label="Subject"
            fullWidth
            margin="normal"
            {...register("subject", {
              required: "Subject is required",
              minLength: {
                value: 3,
                message: "Must be at least 3 characters",
              },
            })}
            error={!!errors.subject}
            helperText={errors.subject?.message}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            label="Message"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Must be at least 10 characters",
              },
            })}
            error={!!errors.message}
            helperText={errors.message?.message}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              mb: 2,
              backgroundColor: "#001f3f",
              "&:hover": {
                backgroundColor: "#003366",
              },
            }}
          >
            Send
          </Button>
        </form>
      </Card>
    </Box>
  );
}
