import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { forms } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import React from "react";

type Form = InferSelectModel<typeof forms>;

type FormsListProps = {
  forms: Form[];
};

const FormsList = ({ forms }: FormsListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 m-5 p-4 gap-4">
      {forms.map((form: Form) => (
        <Card key={form.id} className="max-w-[350px]">
          <CardHeader>
            <CardTitle>{form.name}</CardTitle>
            <CardDescription>{form.description}</CardDescription>
          </CardHeader>
          <CardFooter>
            <Link className="w-full" href={`/forms/edit/${form.id}`}>
              <Button className="w-full">View</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default FormsList;
