import {
  Box,
  Button,
  Fade,
  ImageList,
  ImageListItem,
  Slide,
  Typography,
} from "@mui/material";
import { CloseRounded, Instagram, YouTube } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Link } from "../../../Layers/Link";
import SocialIcons from "../../../Layers/SocialIcons";
import TextLayer from "../../../Layers/TextLayer";
import layerTypes from "../../../../../constants/layerTypes";
import { ProfilePictureCard } from "../../../../../components/Render/ProfilePictureCard";
import { themes } from "../../../../../constants/themes";
import "./style.css";
import dancetoonWalkingSrc from "./assets/dancetoon_2.gif";
import jkSittingSrc from "./assets/jk_sitting.png";
import jkTitanicSrc from "./assets/jk_titanic.png";
import divider from "./assets/divider.png";
import coverSrc from "./assets/cover.mp4";
import soloKpopFestSrc from "./assets/img-7.png";
import groupKpopFestSrc from "./assets/img-10.png";
import { useEffect } from "react";

const Design = () => {
  // useEffect(() => {
  //   const section = document.querySelector(".sk");

  //   let currentPos = window.pageYOffset;

  //   const update = () => {
  //     const newPos = window.pageYOffset;
  //     const diff = newPos - currentPos;
  //     const speed = diff * 0.5;

  //     section.style.transform = `skewY(${speed}deg)`;

  //     currentPos = newPos;

  //     requestAnimationFrame(update);
  //   };

  //   update();
  // }, []);
  const link = useSelector((state) => state.link);
  const renderList = (item) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <Link title={item.name} link={item.link} />;
      case layerTypes.SOCIAL:
        return <SocialIcons />;
      case layerTypes.TEXT:
        return <TextLayer text={item.text} color={item.color} />;
    }
  };
  return (
    <Box>
      <Box px={2} my={4}>
        <Grid container justifyContent="center" alignItems="center">
          <Typography color="white" variant="h4" fontFamily="koulen">
            Anamika <span style={{ opacity: 0.8 }}>Chaurasiya</span>
          </Typography>
          <img src={jkSittingSrc} width="50px" className="dozzing" />
        </Grid>
      </Box>
      <Box position="relative">
        <video
          autoPlay
          playsInline
          muted
          src={coverSrc}
          style={{
            objectFit: "cover",
            backgroundSize: "cover",
            opacity: 0.7,
            width: "100%",
          }}
          loop
          preload="auto"
        >
          <source type="video/mp4" />
        </video>
        <Typography
          color="white"
          fontSize={140}
          fontFamily="Meow Script"
          textAlign="center"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            opacity: 0.8,
            userSelect: "none",
            transform: "translate(-50%, -50%)",
          }}
        >
          Anxie
        </Typography>
        <img
          src={divider}
          width="100%"
          height={32}
          style={{ position: "relative", bottom: "32px" }}
        />
      </Box>
      <Fade in={true} timeout={{ enter: 2000 }}>
        <Typography variant="h5" color="white" px={4} fontFamily="Meow Script">
          I am a dancer living in Lucknow, also studying my art at Bhatkhande
          University. I have worked and trained with numerous dancers locally.
        </Typography>
      </Fade>

      {/* Covers block */}
      <Box style={{ position: "relative" }} my={14}>
        <Box className="hue-anime" />
        <Box p={3} className="covers-overlay">
          <Typography
            variant="h4"
            color="white"
            style={{
              borderBottom: "1px solid white",
            }}
          >
            Covers
          </Typography>
          <ol style={{ color: "white", fontSize: "18px", lineHeight: "36px" }}>
            <li>
              <a href="https://www.instagram.com/reel/Cr5p-BTrffe/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==">
                <Typography color="white" fontSize="18px" lineHeight="36px">
                  Tumhe Jo Maine Dekha Lyrical Video
                </Typography>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/CtJezHbJYm5/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==">
                <Typography color="white" fontSize="18px" lineHeight="36px">
                  LE SSERAFIM (르세라핌)'Eve, Psyche & The Bluebeard's wife.
                </Typography>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/Cv152Jusjqo/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==">
                <Typography color="white" fontSize="18px" lineHeight="36px">
                  Aankhon Me Meri Tera Hi Chehra Dhadakta Rahe.
                </Typography>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/CvwvMF0pv2o/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==">
                <Typography color="white" fontSize="18px" lineHeight="36px">
                  정국 (Jung Kook) 'Seven (feat. Latto)
                </Typography>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/reel/CsQxqsRp9JJ/?utm_source=ig_web_copy_link&igsh=N2ViNmM2MDRjNw==">
                <Typography color="white" fontSize="18px" lineHeight="36px">
                  Under The Moonlight | Dance Break Coachella 2023
                </Typography>
              </a>
            </li>
          </ol>
        </Box>
      </Box>
      {/* Image Gallery */}
      <Box my={8} mx={4} style={{ opacity: 1 }} className="sk">
        <Grid container spacing={4} alignItems="center">
          <Grid xs={6}>
            <img
              src={soloKpopFestSrc}
              width="100%"
              height="300px"
              style={{ objectFit: "cover" }}
            />
          </Grid>
          <Grid xs={6}>
            <Typography color="white">
              “We don’t remember days, we remember moments.”
            </Typography>
            <Typography color="gray" fontSize={12}>
              All India K-pop contest 2023
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          {/* <Grid xs={6}>
              <Typography color="white">Hello World</Typography>
            </Grid> */}
          <Grid xs={12}>
            <img src={groupKpopFestSrc} width="100%" />
          </Grid>
        </Grid>
      </Box>
      {/* footer */}
      <Box style={{ position: "relative" }}>
        <Box className="gungru-img" />
        <Box className="gungru-overlay">
          <Typography
            variant="h4"
            fontStyle="italic"
            color="white"
            textAlign="center"
            style={{ position: "absolute", width: "100vw", top: "50vw" }}
          >
            Dance is the poetry of the foot.
          </Typography>
        </Box>
      </Box>
      <Box textAlign="right" style={{ transform: "translateY(-60px)" }}>
        <img src={dancetoonWalkingSrc} width={200} style={{ opacity: 0.8 }} />
      </Box>
      <Box textAlign="center" py={2} color="white">
        <Grid container flexDirection="column" alignItems="center">
          <Grid container>
            <Box
              p={1}
              onClick={() => {
                window.location.href = "https://www.instagram.com/anxxiiieee/";
              }}
            >
              <Instagram />
            </Box>
            <Box
              p={1}
              onClick={() => {
                window.location.href = "https://www.youtube.com/@anxxiiieee";
              }}
            >
              <YouTube />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Typography
        my={8}
        variant="h6"
        style={{
          textAlign: "center",
          fontWeight: "bold",
          userSelect: "none",
          color: "white",
        }}
      >
        <i>Blossomed by Estring</i>
      </Typography>
    </Box>
  );
};

const Anxie = ({ emulated }) => {
  const navigate = useNavigate();
  const link = useSelector((state) => state.link);
  const style = useSelector((state) => state.style.data);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const renderList = (item) => {
    switch (item.type) {
      case layerTypes.LINK:
        return <Link title={item.name} link={item.link} />;
      case layerTypes.SOCIAL:
        return <SocialIcons />;
      case layerTypes.TEXT:
        return <TextLayer text={item.text} color={item.color} />;
    }
  };
  // return <Design />;
  return (
    <div
      id="estring"
      style={{
        width: "inherit",
        height: emulated ? "100%" : "100vh",
        backgroundColor: "#1A0536",
        overflowX: "hidden",
      }}
    >
      <Button
        onClick={() => navigate(-1)}
        sx={{
          transform: "translateX(-13px)",
          display: { xs: "block", md: "none" },
        }}
      >
        <CloseRounded />
      </Button>
      <Design />
    </div>
  );
};

export default Anxie;
