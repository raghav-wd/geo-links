import { Card, CardContent, Typography } from "@mui/material";

export const Link = ({ title }) => {
  return (
    <div className="r-link">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="body2">{title}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};
