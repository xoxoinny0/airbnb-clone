"use client";
import { Box } from "@mui/material";
import { SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import * as S from "./HostingCard.style";
import { useState } from "react";
import Swiper from "swiper";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  const [swiperIdx, setSwiperIdx] = useState(0);
  const [swiperInstance, setSwiperInstance] = useState<Swiper | null>(null);

  const nextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const prevSlide = () => {
    if (swiperInstance) {
      swiperInstance.slidePrev();
    }
  };

  return (
    <S.CardContainer>
      <S.CardSwiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        // loop={true}
        onActiveIndexChange={(swiper) => setSwiperIdx(swiper.activeIndex)}
        // onSlideChange={(swiper) => setSwiperIdx(swiper.activeIndex)}
        onSwiper={setSwiperInstance}
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
        {swiperIdx !== 0 && (
          <S.SliderButton direction="prev" onClick={prevSlide}>
            <ChevronLeftIcon htmlColor="#000000" />
          </S.SliderButton>
        )}
        {swiperIdx !== slideImages.length && (
          <S.SliderButton direction="next" onClick={nextSlide}>
            <ChevronRightIcon htmlColor="#000000" />
          </S.SliderButton>
        )}
      </S.CardSwiper>
      <Box>
        <Box>{title}</Box>
        <Box>호스트: {hostname}</Box>
        <Box>
          <Box component="b" sx={{ fontWeight: 500 }}>
            ₩0&nbsp;
          </Box>
          / 인
        </Box>
      </Box>
    </S.CardContainer>
  );
}
