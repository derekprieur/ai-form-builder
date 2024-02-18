import { auth, signOut } from "@/auth";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Sign out</Button>
    </form>
  );
}

const Header = async () => {
  const session = await auth();
  console.log(session);

  return (
    <header className="border bottom-1">
      <nav className="bg-white border-gray-200 px-4 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <h1>AI Form Builder</h1>
          {session?.user ? (
            <div className="flex items-center gap-4">
              {session.user.name && session.user.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              )}
              <SignOut />
            </div>
          ) : (
            <Link href="/api/auth/signin">
              <Button variant="link">Sign in</Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
