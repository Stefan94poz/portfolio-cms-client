"use client";
import Button from "@/ui/button";
import Input from "@/ui/input";
import { FormControl, IconButton, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { ZodIssue, z } from "zod";
import { signIn } from "next-auth/react";
import errorMap from "zod/locales/en.js";

const schema = z.object({
  email: z.string().email(),
  // password: z.string().min(6),
});

export default function SignUpForm() {
  const [errors, setErrors] = useState([]);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  const handleChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    try {
      schema.parse(formData);

      e.preventDefault();
      const data = new FormData(e.currentTarget);
      const email = data.get("email");
      const password = data.get("password");

      signIn("credentials", {
        email: email,
        password: password,
        redirect: true,
        callbackUrl: `/user`,
      }).then((response) => {
        if (response?.error) {
          setErrors([response?.error]);
        } else {
          // redirect to destination page
        }
      });
    } catch (err: any) {
      const formatErrors = err?.flatten((issue: ZodIssue) => issue.message);
      console.log("formatErrors ", formatErrors);

      setErrors(formatErrors.fieldErrors);
    }
  };

  // TODO: Create this input with validation just send zod chema to it  and thats it
  return (
    <>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <FormControl sx={{ marginBottom: "12px" }}>
          <Input
            inputlabel="Company name"
            error={!!errors?.email}
            required
            fullWidth
            id="email"
            name="email"
            autoFocus
            placeholder="Company name"
            value={formData.email}
            onChange={handleChange}
            helpertext={(errors?.email || []).join(", ")}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "12px" }}>
          <Input
            inputlabel="Company website"
            error={!!errors?.email}
            required
            fullWidth
            id="email"
            name="email"
            autoFocus
            placeholder="Company website"
            value={formData.email}
            onChange={handleChange}
            helpertext={(errors?.email || []).join(", ")}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "12px" }}>
          <Input
            inputlabel="How many employees does your company have?"
            error={!!errors?.email}
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="How many employees does your company have?"
            value={formData.email}
            onChange={handleChange}
            helpertext={(errors?.email || []).join(", ")}
          />
        </FormControl>
        <FormControl sx={{ marginBottom: "12px" }}>
          <Input
            inputlabel="Industry"
            error={!!errors?.email}
            required
            fullWidth
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Industry"
            value={formData.email}
            onChange={handleChange}
            helpertext={(errors?.email || []).join(", ")}
          />
        </FormControl>
        <Button fullWidth type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
