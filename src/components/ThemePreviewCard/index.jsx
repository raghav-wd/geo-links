import { StarPurple500 } from "@mui/icons-material";
import { Badge, Box, Card, CardContent, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";
import { themeType } from "../../constants/themes";

const ThemePreviewCard = ({ title, image, theme }) => {
  const style = useSelector((state) => state.style);
  const ThemePreview = () => {
    return (
      <Box
        sx={{
          background:
            style.theme.name == theme.name ? "rgb(200, 200, 200, 0.5)" : "none",
        }}
        p={1}
      >
        <Card
          style={{
            width: "120px",
            height: "200px",
            backgroundImage: `url(${image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></Card>
      </Box>
    );
  };
  return (
    <Grid container flexDirection="column" alignItems="center" width={160}>
      {style.theme.type == theme.type ? (
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
