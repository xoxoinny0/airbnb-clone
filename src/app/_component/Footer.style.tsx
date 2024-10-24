"use client";
import { styled } from "@mui/material";

export const FooterSection = styled("section")(({ theme }) => ({
  paddingBlock: "24px",
}));

export const StackItem = styled("li")(({ theme }) => ({
  cursor: "pointer",
  "&:hover": {
    textDecoration: "underline",
  },
}));
