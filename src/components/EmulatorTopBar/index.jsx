import { ArrowOutwardRounded, DoneRounded } from "@mui/icons-material";
import { Box, Button, useMediaQuery } from "@mui/material";
import { updateUserStyles } from "../../services/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const EmulatorTopBar = () => {
  const style = useSelector((state) => state.style.data);
  const navigate = useNavigate();
  const desktop = useMediaQuery("(min-width:600px)");
  const handleUpdateUserStyles = () => {
    updateUserStyles({
      ...style,
      theme: style.theme.name,
      userId: "bbd54f70-2ce7-4db6-8a14-5f9f67ed3470",
    });
  };
  if (desktop)
    return (
      <Box textAlign="center" pb={2}>
        <Box display="inline-block" px={1}>
          <Button
            variant="outlined"
            startIcon={<ArrowOutwardRounded />}
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/" + localStorage.getItem("userId"))}
          >
            Open Estring
          </Button>
        </Box>
        <Box display="inline-block" px={1}>
          <Button
            variant="contained"
            startIcon={<DoneRounded />}
            sx={{ textTransform: "none" }}
            onClick={handleUpdateUserStyles}
          >
            Publish
          </Button>
        </Box>
      </Box>
    );
};

export default EmulatorTopBar;
