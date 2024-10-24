import { Box } from "@mui/material";
import HostingCard from "./HostingCard";
import { faker } from "@faker-js/faker";
import { EXPIRED_HOST, RECENT_HOST } from "../_const/data";
import { Grid } from "./Home.style";

export default function Home() {
  return (
    <Box>
      <Grid>
        {RECENT_HOST.map((host, i) => (
          <HostingCard
            key={[host.hostname, i].join("_")}
            title={host.title}
            hostname={host.hostname}
            slideImages={[
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
            ]}
          />
        ))}
      </Grid>
      <Box>이전 경험</Box>
      <Grid>
        {EXPIRED_HOST.map((host, i) => (
          <HostingCard
            key={[host.hostname, i].join("_")}
            title={host.title}
            hostname={host.hostname}
            slideImages={[
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
              faker.image.url({ width: 365, height: 346 }),
            ]}
          />
        ))}
      </Grid>
    </Box>
  );
}
