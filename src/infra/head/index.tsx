import React from "react";
import NextHead from "next/head";

interface TitleHead {
  title: string;
}

const Head = ({ title }: TitleHead) => {
  return (
    <NextHead>
      <title>{title}</title>
    </NextHead>
  );
};

export default Head;
