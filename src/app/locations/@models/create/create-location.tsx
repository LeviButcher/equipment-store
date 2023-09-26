"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { createLocationAction } from "./actions";

export default function CreateLocation() {
  const router = useRouter();

  return (
    <Dialog
      open={true}
      onOpenChange={() => {
        return router.back();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Location</DialogTitle>
        </DialogHeader>
        <form
          id="create-location"
          action={createLocationAction}
          className="grid grid-cols-1 gap-2"
        >
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
          <Label htmlFor="address">Address</Label>
          <Input id="address" name="address" required />
        </form>
        <DialogFooter>
          <Button
            form="create-location"
            type="submit"
            variant={"outline"}
            className="bg-green-300"
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
