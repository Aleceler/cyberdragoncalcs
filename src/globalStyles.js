import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}

.error{
  color: red;
  font-size: 12px;
  height: 15px;
  margin: 5px 0
}

.errorHidden{
  height: 15px;
  margin: 5px 0
}

p, h2, h3, h4, h5 {
  font-size: 14px;
  
  @media (max-width: 900px) {
    font-size: 12px;
  }
}
`;

export const theme = () => {
  return {
    colors: {
      primary: "#191A1C",
      secondary: "#F45052",
      card: "#2F304F",
      text: "#CCD4DF",
    },
  };
};
