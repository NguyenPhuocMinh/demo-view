import { container, title } from "../../../supports";

const favoritePlaceStyle = {
  section: {
    padding: "10px 0"
  },
  container,
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
};

export default favoritePlaceStyle;
