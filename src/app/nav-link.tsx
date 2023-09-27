"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export type NavLinkProps = {
  children: ReactNode;
  href: string;
};

const linkVariants = cva("text-lg rounded hover:bg-blue-200", {
  variants: {
    variant: {
      passive: "bg-blue-200",
      active: "bg-blue-500",
    },
  },
  defaultVariants: {
    variant: "passive",
  },
});

export const NavLink = (props: NavLinkProps) => {
  const pathname = usePathname();
  const variant = pathname.startsWith(props.href) ? "active" : "passive";

  return (
    <Link className={cn(linkVariants({ variant }))} href={props.href}>
      {props.children}
    </Link>
  );
};
