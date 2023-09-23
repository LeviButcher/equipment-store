import React from "react";

type Props = {
  children: React.ReactNode;
  models: React.ReactNode;
};

export default function Layout({ children, models }: Props) {
  return (
    <>
      {children}
      {models}
    </>
  );
}
