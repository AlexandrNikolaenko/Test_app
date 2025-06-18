"use client";

import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import { memo } from "react";
import { useCallback } from "react";

export interface ProductProps {
  title?: string | undefined | null;
  imageURL?: string | undefined | null;
  price?: number | string | null;
  origin?: string | undefined | null;
  currency?: string | undefined | null;
}

const MemoCard = memo(function MemoCard({
  title = "Product",
  imageURL = "/default.jpg",
  price = "34900",
  origin = "Russia",
}: ProductProps) {
  console.log({
    title,
    imageURL,
    price,
    origin,
  });
  return (
    <Card sx={{ width: "500px", borderRadius: 5, maxWidth: "100%" }}>
      <CardMedia
        image={String(imageURL)}
        title={String(title)}
        sx={{ height: 300 }}
      />
      <CardContent>
        <Stack spacing={6} className="p-5">
          <Typography variant="h4">{title}</Typography>
          <Stack spacing={2}>
            <Typography variant="h5">{price}</Typography>
            <Typography variant="body1">{origin}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
});

export default function ProductCard({
  price,
  currency,
  origin,
  imageURL,
  title,
}: ProductProps) {
  const getPrice = useCallback(() => {
    const newPrice = new Intl.NumberFormat(origin || "en-US", {
      style: "currency",
      currency: currency || "RUB",
    });
    return newPrice.format(Number(price) || 34900);
  }, [currency, price, origin]);

  return (
    <MemoCard
      price={getPrice()}
      imageURL={imageURL ? imageURL : undefined}
      origin={origin ? origin : undefined}
      title={title ? title : undefined}
    />
  );
}
