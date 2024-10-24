import { Box, Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  boxShadow: "none",
}));

export const CardSwiper = styled(Swiper)(({ theme }) => ({
  marginBottom: 12,
}));
