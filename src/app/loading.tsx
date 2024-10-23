import { Box } from "@mui/material";

export default function Loading() {
  // 로딩중은 전체화면이 흰화면으로
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: "#FFFFFF",
      }}
    />
  );
}
