"use client";

import { User } from "@/db/schema";
import { startTransition } from "react";
import { deleteUser } from "./deleteUser";

export function UserCard({ id, fullName }: User) {
  return (
    <div className="flex gap-2 p-2 bg-gray-500">
      <b>{fullName}</b>
      <button
        className="py-1 px-2 bg-red-300 rounded"
        onClick={() => {
          startTransition(() => {
            deleteUser(id);
          });
        }}
      >
        Delete
      </button>
    </div>
  );
}
