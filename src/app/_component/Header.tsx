import { Box } from "@mui/material";
import AirBnbLogo from "/public/assets/airbnb.svg?react";

const HEADER_HEIGHT = 80;

export default function Header() {
  return (
    <Box
      component="header"
      sx={{
        height: HEADER_HEIGHT,
        border: "1px solid black",
        display: "flex",
        maxHeight: 1600,
        alignItems: "center",
        paddingLeft: {
          xs: "0px",
          sm: "80px",
        },
        paddingRight: {
          xs: "0px",
          sm: "80px",
        },
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid red",
        }}
      >
        <Box>
          <AirBnbLogo />
        </Box>
        <Box>숙소 체험</Box>
        <Box>사이드바 버튼</Box>
      </Box>
    </Box>
  );
}
