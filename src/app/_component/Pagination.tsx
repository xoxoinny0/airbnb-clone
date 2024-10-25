import { Box, Container } from "@mui/material";

interface PaginationProps {
  index: number;
  imageLength: number;
}

export default function Pagination({ index, imageLength }: PaginationProps) {
  return (
    <Box
      sx={{
        width: "80px",
        paddingBottom: "12px",
        maxWidth: "55px",
        margin: "0 auto",
      }}
    >
      {[...Array(imageLength)].map((_, i) => (
        <Box
          key={`bullet_${i}`}
          component="span"
          sx={{
            display: "inline-block",
            width: "6px",
            minWidth: "6px",
            height: "6px",
            marginRight: "2.5px",
            borderRadius: "50%",
            // backgroundColor: "rgba(255,255,255,1)",
            backgroundColor: i === index ? "red" : "blue",
          }}
        />
      ))}
    </Box>
  );
}
