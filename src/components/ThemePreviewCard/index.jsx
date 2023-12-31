import { StarPurple500 } from "@mui/icons-material";
import { Badge, Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";
import { themeType } from "../../constants/themes";
import { useDispatch } from "react-redux";
import { setTheme } from "../../redux/reducers/style";
import customization from "./assets/customization.jpg";
import bgStyle1 from "./assets/bg-style-1.png";
import bgStyle2 from "./assets/bg-style-2.png";
import bgStyle3 from "./assets/bg-style-3.png";
import bgStyle4 from "./assets/bg-style-4.png";
import barAnime from "./assets/templates/barAnime.png";
import starryNight from "./assets/templates/starryNight.png";
import pattern from "./assets/templates/pattern.png";
import clouds from "./assets/templates/clouds.png";

const ThemePreviewCard = ({ title, imageIndex, theme }) => {
  const bgStyle = [
    customization,
    bgStyle1,
    bgStyle2,
    bgStyle3,
    bgStyle4,
    barAnime,
    starryNight,
    pattern,
    clouds,
  ];
  const style = useSelector((state) => state.style);
  const dispatch = useDispatch();
  const ThemePreview = () => {
    return (
      <Box
        sx={{
          background: style.theme == theme ? "rgb(200, 200, 200, 0.5)" : "none",
        }}
        p={1}
      >
        <Card
          style={{
            width: "110px",
            height: "200px",
            backgroundImage: `url(${bgStyle[imageIndex]})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Card>
      </Box>
    );
  };
  return (
    <Grid
      container
      flexDirection="column"
      alignItems="center"
      width={160}
      onClick={() => dispatch(setTheme(theme))}
    >
      {theme.type == themeType.PRO ? (
        <Badge
          className="twinkle"
          badgeContent={<StarPurple500 fontSize="medium" />}
        >
          <ThemePreview />
        </Badge>
      ) : (
        <ThemePreview />
      )}
      <Typography>{title}</Typography>
    </Grid>
  );
};

export default ThemePreviewCard;
