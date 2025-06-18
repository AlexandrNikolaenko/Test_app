"use client";

import ProductCard from "@/components/card";
import { Grid } from "@mui/material";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const params = useSearchParams();

  return (
    <main className="flex flex-col min-h-screen w-screen justify-center items-center p-5">
      <Grid container spacing={2} sx={{ maxWidth: "100%" }}>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProductCard
            title={params.get("title") && params.get("title")}
            imageURL={params.get("imageurl") && params.get("imageurl")}
            price={params.get("price") && Number(params.get("price"))}
            origin={params.get("origin") && params.get("origin")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProductCard
            title={params.get("title") && params.get("title")}
            imageURL={params.get("imageurl") && params.get("imageurl")}
            price={params.get("price") && Number(params.get("price"))}
            origin={params.get("origin") && params.get("origin")}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
          <ProductCard
            title={params.get("title") && params.get("title")}
            imageURL={params.get("imageurl") && params.get("imageurl")}
            price={params.get("price") && Number(params.get("price"))}
            origin={params.get("origin") && params.get("origin")}
          />
        </Grid>
      </Grid>
    </main>
  );
}
