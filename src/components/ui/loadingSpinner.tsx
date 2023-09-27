import React from "react";
import { Loader2 } from "lucide-react";

export function Spinner() {
  return <Loader2 className="text-blue-500 animate-spin" size={48} />;
}

export function FullSpinner() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Loader2 className="text-blue-500 animate-spin" size={48} />
    </div>
  );
}
