import Button from "@/ui/button";
import Input from "@/ui/input";

export default function LoginForm() {
  return (
    <>
      <Input
        margin="normal"
        required
        fullWidth
        id="email"
        name="email"
        autoComplete="email"
        autoFocus
        placeholder="email"
      />
      <Input
        margin="normal"
        required
        fullWidth
        name="password"
        type="password"
        id="password"
        placeholder="password"
        autoComplete="current-password"
      />
      <Button fullWidth>Submit</Button>
    </>
  );
}
