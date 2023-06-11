"use client";

import { Box } from "@mui/material";
import { Inter } from "next/font/google";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body className={inter.className}>
        <CssBaseline />
        <Box
          component="main"
          sx={{ height: "100vh", backgroundColor: grey[300] }}
        >
          {children}
        </Box>
      </body>
    </html>
  );
}
