
import Link from "next/link";
import { Button } from "./button";

export default function LoginButton() {
  return (
    <Link href="/login">
      <Button className="mt-4 w-full">Log in</Button>
    </Link>
  );
}
