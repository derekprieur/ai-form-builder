"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const FormGenerator = () => {
  const [open, setOpen] = useState(false);

  const onFormCreate = () => {
    setOpen(true);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        setOpen(isOpen);
      }}
    >
      <Button onClick={onFormCreate}>Create Form</Button>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New Form</DialogTitle>
        </DialogHeader>
        <form>
          <div className="grid gap-4 py-4">
            <Textarea
              id="description"
              name="description"
              required
              placeholder="Share what your form is about, who is it for, and what information you would like to collect. And AI will do the magic ✧･ﾟ"
            />
          </div>
        </form>
        <DialogFooter>
          <Button variant="link">Create Manually</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FormGenerator;
