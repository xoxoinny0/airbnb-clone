import { Box } from "@mui/material";
import HostingCard from "./_component/HostingCard";
import { faker } from "@faker-js/faker";

export default function Home() {
  return (
    <div>
      <div>home</div>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, minmax(275px, 1fr))",
            sm: "repeat(2, minmax(275px, 1fr))",
            md: "repeat(3, minmax(275px, 1fr))",
            lg: "repeat(4, minmax(275px, 1fr))",
            xl: "repeat(5, minmax(275px, 1fr))",
          },
          rowGap: "40px",
          columnGap: "24px",
        }}
      >
        <HostingCard
          title="비틀쥬스 저택의 지박령이 되어보세요"
          hostname="Delia Deetz"
          slideImages={[
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
          ]}
        />
        <HostingCard
          title="거실에서 펼쳐지는 도자 캣의 단⁠독 공⁠연"
          hostname="Doja Cat"
          slideImages={[
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
          ]}
        />
        <HostingCard
          title="프린스 '퍼플 레인' 하우스에서의 하룻밤"
          hostname="Wendy And Lisa"
          slideImages={[
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
            faker.image.url({ width: 365, height: 346 }),
          ]}
        />
      </Box>
    </div>
  );
}
