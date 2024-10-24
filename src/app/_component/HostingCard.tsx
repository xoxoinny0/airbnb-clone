"use client";
import { Box, Card, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { CardSwiper } from "./HostingCard.style";

type HostingCardProps = {
  slideImages: [string, string, string, string, string];
  hostname: string;
  title: string;
};

export default function HostingCard({
  title,
  hostname,
  slideImages,
}: HostingCardProps) {
  return (
    <Card>
      <CardSwiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {slideImages.map((slideImage, i) => (
          <SwiperSlide key={`hostname_img_${i}`}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: 20 / 19,
                borderRadius: "8px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                alt={`image_${i}`}
                src={slideImage}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          </SwiperSlide>
        ))}
      </CardSwiper>
      <Box>
        <Box>{title}</Box>
        <Box>호스트: {hostname}</Box>
        <Box>
          <Box component="b" sx={{ fontWeight: 500 }}>
            ₩0
          </Box>{" "}
          / 인
        </Box>
      </Box>
    </Card>
  );
}
