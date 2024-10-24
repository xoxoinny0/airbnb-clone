import { Avatar, Box } from "@mui/material";
// import AirBnbLogo from "/public/assets/airbnb.svg?react";
import AirBnbLogo from "/public/assets/airbnbtext.svg?react";
import LanguageLogo from "/public/assets/language.svg?react";

import { faker } from "@faker-js/faker";
import MenuIcon from "@mui/icons-material/Menu";
import { SearchTabBtn } from "./Home.style";

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
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          <AirBnbLogo />
        </Box>
        <Box sx={{}}>
          <SearchTabBtn className="active">숙소</SearchTabBtn>
          <SearchTabBtn>체험</SearchTabBtn>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ padding: "13px" }}>당신의 공간을 에어비앤비하세요</Box>
          <Box sx={{ padding: "13px", cursor: "pointer" }}>
            <LanguageLogo />
          </Box>
          <Box>
            <Box
              component="button"
              sx={{
                display: "flex",
                alignItems: "center",
                borderRadius: 9999,
                border: "none",
                padding: "13px",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.1)",
                },
              }}
            >
              <MenuIcon />
              <Avatar alt="my-avartar" src={faker.image.avatar()} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
