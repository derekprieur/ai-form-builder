import Header from "@/components/Header";
import FormGenerator from "./form-generator";
import { SessionProvider } from "next-auth/react";
import { db } from "@/db";
import FormsList from "./forms/FormsList";

export default async function Home() {
  const forms = await db.query.forms.findMany();
  console.log(forms);
  return (
    <SessionProvider>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <FormGenerator />
        <FormsList forms={forms} />
      </main>
    </SessionProvider>
  );
}
