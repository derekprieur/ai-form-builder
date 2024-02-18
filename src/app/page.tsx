import Header from "@/components/Header";
import FormGenerator from "./form-generator";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <SessionProvider>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <FormGenerator />
      </main>
    </SessionProvider>
  );
}
