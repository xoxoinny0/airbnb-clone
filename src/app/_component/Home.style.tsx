"use client";
import { styled } from "@mui/material/styles";

export const Grid = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(1, minmax(275px, 1fr))",
  [theme.breakpoints.up("xs")]: {
    gridTemplateColumns: "repeat(2, minmax(275px, 1fr))",
  },
  [theme.breakpoints.up("sm")]: {
    gridTemplateColumns: "repeat(3, minmax(275px, 1fr))",
  },
  [theme.breakpoints.up("md")]: {
    gridTemplateColumns: "repeat(4, minmax(275px, 1fr))",
  },
  [theme.breakpoints.up("lg")]: {
    gridTemplateColumns: "repeat(5, minmax(275px, 1fr))",
  },
  [theme.breakpoints.up("xl")]: {
    gridTemplateColumns: "repeat(6, minmax(275px, 1fr))",
  },
  rowGap: "40px",
  columnGap: "24px",
}));
