import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  preflight: (preflight) => ({
    ...preflight,
    h1: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
    h2: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
    h3: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
    h4: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
    h5: {
      fontFamily: "'Poppins', sans-serif",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
  }),
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#e82c75",
        },
      },
      backgroundImage: {
        linear:
          "linear-gradient(90deg, rgba(72,222,212,1) 0%, rgba(160,38,191,1) 20%, rgba(232,44,117,1) 60%, rgba(245,255,0,1) 85%, rgba(72,222,212,1) 96%)",
        storeCardTitle:
          "linear-gradient(90deg, rgba(255,196,14,0.8) 50%, rgba(255,196,14,0.8) 100%)",
      },
    },
  },
} as Options;
