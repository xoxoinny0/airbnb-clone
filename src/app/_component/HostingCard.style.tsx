import { Box, Card, CardProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import { transform } from "next/dist/build/swc/generated-native";
import { Swiper, SwiperSlide } from "swiper/react";

export const CardContainer = styled(Card)<CardProps>(({ theme }) => ({
  boxShadow: "none",
}));

export const CardSwiper = styled(Swiper)(({ theme }) => ({
  marginBottom: 12,
  position: "relative",

  "& button": {
    opacity: 0,
  },

  "&:hover button": {
    opacity: 1,
  },
}));

export const SliderButton = styled("button")<{
  direction: "prev" | "next";
}>(({ theme, direction }) => ({
  zIndex: 1,
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: "rgba(255, 255, 255, 0.75)",
  color: "white",
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "32px",
  height: "32px",
  // padding: "10px",
  borderRadius: 9999,
  border: "none",
  // cursor: "pointer",
  transition: "transform 0.15s, background-color 0.15s, opacity 0.15s",

  ...(direction === "prev" && {
    left: "10px",
  }),
  ...(direction === "next" && {
    right: "10px",
  }),

  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    transform: "translateY(-50%) scale(1.01)",
  },
}));
