import Link from 'next/link'
import { Button } from "../components";

export default function Page() {
  return (
    <>
      <h1>Home Page with Info</h1>
      <Link href="/signup">
        <Button>Sign Up here</Button>
      </Link>
    </>
  );
}
