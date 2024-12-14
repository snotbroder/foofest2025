"use client";

import { useSearchParams } from "next/navigation";
import Head from "next/head";

export default function HeadComponent() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const title = search;
  console.log("search:" + title);
  const description = search
    ? `Results for the search: ${search}`
    : "Find your tickets here.";

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Head>
  );
}
