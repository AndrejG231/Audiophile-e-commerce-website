const colors = {
  brown: "#D87D4A",
  lightBrown: "#FBAF85",
  black: "#000",
  lightBlack: "#101010",
  gray: "#F1F1F1",
  lightGray: "#FAFAFA",
  error: "#CD2C2C",
  grayLine: "#979797",
  white: "#FFF",
};

// Main layout optimized at min-width: 350px;
const query = {
  md: "@media screen and (min-width: 570px)", // tablet
};

const fonts = {
  manrope: "font-family: 'Manrope', sans-serif;",
  h1: `
      font-family: 'Manrope', sans-serif;
      font-size: 3.5rem;
      text-transform: uppercase;
      line-height: 3.625rem;
      letter-spacing: 2px;
      font-weight: 700;
      color: ${colors.black};
    `,
  h2: `
      font-family: 'Manrope', sans-serif;
      font-size: 2.5rem;
      text-transform: uppercase;
      line-height: 2.75rem;
      letter-spacing: 1.5px;
      font-weight: 700;
      color: ${colors.black};
    `,
  h3: `
      font-family: 'Manrope', sans-serif;
      font-size: 2rem;
      text-transform: uppercase;
      line-height: 2.25rem;
      letter-spacing: 1.15px;
      font-weight: 700;
      color: ${colors.black};
    `,
  h4: `
      font-family: 'Manrope', sans-serif;
      font-size: 1.75rem;
      text-transform: uppercase;
      line-height: 2.375rem;
      letter-spacing: 2px;
      font-weight: 700;
      color: ${colors.black};
    `,
  h5: `
      font-family: 'Manrope', sans-serif;
      font-size: 1.5rem;
      text-transform: uppercase;
      line-height: 2.0625rem;
      letter-spacing: 1.7px;
      font-weight: 700;
      color: ${colors.black};
    `,
  h6: `
      font-family: 'Manrope', sans-serif;
      font-size: 1.125rem;
      text-transform: uppercase;
      line-height: 1.5rem;
      letter-spacing: 1.7px;
      font-weight: 700;
      color: ${colors.black};
    `,
  overline: `
      font-family: 'Manrope', sans-serif;
      font-size: 0.875rem;
      text-transform: uppercase;
      line-height: 1.1875rem;
      letter-spacing: 10px;
      font-weight: 400;
      color: ${colors.brown};
  `,
  subtitle: `
      font-family: 'Manrope', sans-serif;
      font-size: 0.8125rem;
      text-transform: uppercase;
      line-height: 1.5625rem;
      letter-spacing: 1px;
      font-weight: 700;
      color: ${colors.brown};
  `,
  body: `
      font-family: 'Manrope', sans-serif;
      font-size: 15px;
      line-height: 25px;
      font-weight: 500;
      color: ${colors.brown};
  `,
};

const theme = { colors, fonts, query };

export default theme;
