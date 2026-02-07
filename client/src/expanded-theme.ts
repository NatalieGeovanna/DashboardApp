// import "@mui/material/styles";


// declare module "@mui/material/styles"{
//     interface PaletteColor {
//         [key: number]: string;
//     }

//     interface Palette {
//         tertiary: PaletteColor;
//     }
// }

import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface TypeBackground {
    light: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
  }
}
