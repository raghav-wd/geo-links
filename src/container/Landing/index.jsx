import { Box, Button, IconButton, Typography } from "@mui/material";
import styles from "./styles.module.css";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import whySrc from "./assets/why.png";
import statsSrc from "./assets/stats.png";
import growArrowSrc from "./assets/graph-arrow.svg";
import pillarSrc from "./assets/lines.svg";
import dollarSignSrc from "./assets/dollar-sign.svg";
import directStandoutSrc from "./assets/direct-standout.png";
import { ElectricBolt, Instagram, Mail } from "@mui/icons-material";
import openPage from "../../utils/openPage";
import { useNavigate } from "react-router-dom";
import { setHandle } from "../../redux/reducers/app";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Footer from "../../components/Landing/Footer";
import Topbar from "../../components/Landing/Topbar";

const Landing = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  return (
    <Box className={styles["landing-page"]} pt={4}>
      <Topbar />
      {/* <nav>
        <Button
          className={styles.roundButton}
          variant="outlined"
          onClick={() => navigate("/login")}
          style={{
            color: "black",
            margin: "0 8px",
          }}
        >
          Log in
        </Button>
        <Button
          className={styles.roundButton}
          onClick={() => navigate("/signup")}
          style={{
            color: "white",
            backgroundColor: "#1ac0ff",
          }}
        >
          Sign up free
        </Button>
      </nav> */}
      <Box className={styles.headerContainer}>
        <Box className={styles.header} sx={{ width: { xs: "90%", md: "70%" } }}>
          <Typography
            className={styles.heading}
            p={2}
            maxWidth={750}
            sx={{
              textAlign: { xs: "left", md: "center" },
              fontSize: { xs: "200%", md: "240%" },
            }}
          >
            Laugh Louder, Reach Farther The Ultimate Link in Bio for Comedians!
          </Typography>
          <Box my={2}>
            <form className={styles.claimForm}>
              <span>estring.in/</span>
              <input
                type="text"
                placeholder="yourname"
                value={app.handleText}
                onChange={(e) => dispatch(setHandle(e.target.value))}
              />
              <input
                type="button"
                value="Claim"
                onClick={() => navigate("/signup")}
              />
            </form>
          </Box>
          <Typography color="#434b57">
            <ElectricBolt
              style={{ color: "gold", transform: "translateY(25%)" }}
            />
            Creators who organise shows in multiple cities, shouldn't miss out!
          </Typography>
        </Box>
        <Box className={styles.heroImage}></Box>
      </Box>
      <Box className={styles.whyBlock}>
        <Grid container alignItems="center" height={600}>
          <Grid md={6} mb={4} container justifyContent="center">
            <Box width={600}>
              <Typography
                variant="h3"
                fontFamily="Nunito"
                fontWeight={900}
                py={0}
                textAlign="center"
                position="relative"
                zIndex={1}
              >
                Boost your Ticket Sales
              </Typography>
              <Typography
                p={2}
                textAlign="center"
                variant="h6"
                style={{ color: "#488eeb" }}
              >
                We boost the sales of your tickets through link-in-bio
                enhancement using our Geo-location model.
              </Typography>
            </Box>
          </Grid>
          <Grid md={6}>
            <div className={styles.boostContainer}>
              <img className={styles.pillars} src={pillarSrc} />
              <img class={styles.arrow} src={growArrowSrc} />
              <div className={styles.dollarSigns}>
                <img class="image-arrow" src={dollarSignSrc} />
                <img class="image-arrow" src={dollarSignSrc} />
                <img class="image-arrow" src={dollarSignSrc} />
                <img class="image-arrow" src={dollarSignSrc} />
                <img class="image-arrow" src={dollarSignSrc} />
              </div>
            </div>
            {/* <img
              src={whySrc}
              width="100%"
              style={{ border: "1px solid black" }}
            /> */}
          </Grid>
        </Grid>
      </Box>
      <Box my={8}>
        <Grid container alignItems="center">
          <Grid md={6}>
            <img src={statsSrc} width="100%" />
          </Grid>
          <Grid md={6}>
            <Typography
              variant="h3"
              fontFamily="Nunito"
              fontWeight={900}
              p={2}
              textAlign="center"
            >
              Keep track of everything, only for your eyes
            </Typography>
            {/* <Typography p={2} mb={4} textAlign="center">
              Monitor your audience engagement and revenue trends over time.
              <br />
              Implement informed updates on the fly.
            </Typography> */}
          </Grid>
        </Grid>
      </Box>
      <Box my={8}>
        <Grid container alignItems="center">
          <Grid md={6}>
            <Typography
              variant="h3"
              fontFamily="Nunito"
              fontWeight={900}
              p={2}
              textAlign="center"
            >
              Go Limitless!
            </Typography>
            <Typography
              p={2}
              mb={6}
              textAlign="center"
              variant="h6"
              style={{ color: "#488eeb" }}
            >
              Customise to your heart's content!
              <br />
              We match your brand with the link-in-bio design.
            </Typography>
          </Grid>
          <Grid md={6} p={4}>
            <img src={directStandoutSrc} width="100%" />
          </Grid>
        </Grid>
      </Box>
      <Box textAlign="center" my={12}>
        <svg
          width="90%"
          //   style={{ padding: "0 16px" }}
          height="8"
          viewBox="0 0 1101 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5">
            <path
              d="M0 6.96948C5.68452 6.96948 8.57997 5.04827 11.1347 3.35318C13.4413 1.82239 15.2636 0.613239 19.1573 0.613239C23.0507 0.613239 24.8726 1.82239 27.1792 3.3529C29.7336 5.04827 32.629 6.96948 38.3135 6.96948C43.9977 6.96948 46.8927 5.04799 49.4471 3.3529C51.7533 1.82211 53.5748 0.613239 57.4678 0.613239C61.3616 0.613239 63.1834 1.82239 65.49 3.3529C68.0444 5.04827 70.9399 6.96948 76.6244 6.96948C82.3093 6.96948 85.2043 5.04827 87.7591 3.3529C90.0657 1.82239 91.888 0.613239 95.7813 0.613239C99.6755 0.613239 101.497 1.82239 103.804 3.3529C106.359 5.04827 109.254 6.96948 114.939 6.96948C120.624 6.96948 123.519 5.04827 126.074 3.3529C128.381 1.82239 130.203 0.613239 134.096 0.613239C137.991 0.613239 139.813 1.82239 142.121 3.35318C144.675 5.04827 147.571 6.96948 153.256 6.96948"
              stroke="url(#paint0_linear_547_487)"
            ></path>{" "}
            <path
              d="M153.266 6.96973C158.95 6.96973 161.846 5.04851 164.4 3.35342C166.707 1.82263 168.529 0.613483 172.423 0.613483C176.316 0.613483 178.138 1.82263 180.445 3.35314C182.999 5.04851 185.895 6.96973 191.579 6.96973C197.263 6.96973 200.158 5.04823 202.713 3.35314C205.019 1.82235 206.84 0.613483 210.733 0.613483C214.627 0.613483 216.449 1.82263 218.756 3.35314C221.31 5.04851 224.205 6.96973 229.89 6.96973C235.575 6.96973 238.47 5.04851 241.025 3.35314C243.331 1.82263 245.154 0.613483 249.047 0.613483C252.941 0.613483 254.763 1.82263 257.07 3.35314C259.624 5.04851 262.52 6.96973 268.205 6.96973C273.89 6.96973 276.785 5.04851 279.34 3.35314C281.646 1.82263 283.468 0.613483 287.362 0.613483C291.257 0.613483 293.079 1.82263 295.386 3.35342C297.941 5.04851 300.837 6.96973 306.522 6.96973"
              stroke="url(#paint1_linear_547_487)"
            ></path>{" "}
            <path
              d="M306.52 6.96973C312.204 6.96973 315.1 5.04851 317.654 3.35342C319.961 1.82263 321.783 0.613483 325.677 0.613483C329.57 0.613483 331.392 1.82263 333.699 3.35314C336.253 5.04851 339.149 6.96973 344.833 6.96973C350.517 6.96973 353.412 5.04823 355.967 3.35314C358.273 1.82235 360.094 0.613483 363.987 0.613483C367.881 0.613483 369.703 1.82263 372.01 3.35314C374.564 5.04851 377.459 6.96973 383.144 6.96973C388.829 6.96973 391.724 5.04851 394.279 3.35314C396.585 1.82263 398.407 0.613483 402.301 0.613483C406.195 0.613483 408.017 1.82263 410.323 3.35314C412.878 5.04851 415.774 6.96973 421.459 6.96973C427.143 6.96973 430.039 5.04851 432.594 3.35314C434.9 1.82263 436.722 0.613483 440.616 0.613483C444.51 0.613483 446.333 1.82263 448.64 3.35342C451.195 5.04851 454.091 6.96973 459.776 6.96973"
              stroke="url(#paint2_linear_547_487)"
            ></path>{" "}
            <path
              d="M459.781 6.96973C465.466 6.96973 468.361 5.04851 470.916 3.35342C473.223 1.82263 475.045 0.613483 478.939 0.613483C482.832 0.613483 484.654 1.82263 486.96 3.35314C489.515 5.04851 492.41 6.96973 498.095 6.96973C503.779 6.96973 506.674 5.04823 509.228 3.35314C511.535 1.82235 513.356 0.613483 517.249 0.613483C521.143 0.613483 522.965 1.82263 525.271 3.35314C527.826 5.04851 530.721 6.96973 536.406 6.96973C542.091 6.96973 544.986 5.04851 547.54 3.35314C549.847 1.82263 551.669 0.613483 555.563 0.613483C559.457 0.613483 561.279 1.82263 563.585 3.35314C566.14 5.04851 569.035 6.96973 574.72 6.96973C580.405 6.96973 583.301 5.04851 585.855 3.35314C588.162 1.82263 589.984 0.613483 593.878 0.613483C597.772 0.613483 599.594 1.82263 601.902 3.35342C604.457 5.04851 607.352 6.96973 613.038 6.96973"
              stroke="url(#paint3_linear_547_487)"
            ></path>{" "}
            <path
              d="M613.047 6.96973C618.731 6.96973 621.627 5.04851 624.182 3.35342C626.488 1.82263 628.31 0.613483 632.204 0.613483C636.098 0.613483 637.919 1.82263 640.226 3.35314C642.78 5.04851 645.676 6.96973 651.36 6.96973C657.045 6.96973 659.94 5.04823 662.494 3.35314C664.8 1.82235 666.622 0.613483 670.515 0.613483C674.408 0.613483 676.23 1.82263 678.537 3.35314C681.091 5.04851 683.987 6.96973 689.671 6.96973C695.356 6.96973 698.251 5.04851 700.806 3.35314C703.113 1.82263 704.935 0.613483 708.828 0.613483C712.722 0.613483 714.544 1.82263 716.851 3.35314C719.406 5.04851 722.301 6.96973 727.986 6.96973C733.671 6.96973 736.566 5.04851 739.121 3.35314C741.428 1.82263 743.25 0.613483 747.143 0.613483C751.038 0.613483 752.86 1.82263 755.167 3.35342C757.722 5.04851 760.618 6.96973 766.303 6.96973"
              stroke="url(#paint4_linear_547_487)"
            ></path>{" "}
            <path
              d="M766.305 6.96973C771.989 6.96973 774.885 5.04851 777.439 3.35342C779.746 1.82263 781.568 0.613483 785.462 0.613483C789.355 0.613483 791.177 1.82263 793.484 3.35314C796.038 5.04851 798.934 6.96973 804.618 6.96973C810.302 6.96973 813.197 5.04823 815.752 3.35314C818.058 1.82235 819.879 0.613483 823.772 0.613483C827.666 0.613483 829.488 1.82263 831.795 3.35314C834.349 5.04851 837.245 6.96973 842.929 6.96973C848.614 6.96973 851.509 5.04851 854.064 3.35314C856.37 1.82263 858.193 0.613483 862.086 0.613483C865.98 0.613483 867.802 1.82263 870.109 3.35314C872.663 5.04851 875.559 6.96973 881.244 6.96973C886.929 6.96973 889.824 5.04851 892.379 3.35314C894.685 1.82263 896.507 0.613483 900.401 0.613483C904.296 0.613483 906.118 1.82263 908.425 3.35342C910.98 5.04851 913.876 6.96973 919.561 6.96973"
              stroke="url(#paint5_linear_547_487)"
            ></path>{" "}
            <path
              d="M919.557 6.96973C925.241 6.96973 928.137 5.04851 930.691 3.35342C932.998 1.82263 934.82 0.613483 938.714 0.613483C942.607 0.613483 944.429 1.82263 946.736 3.35314C949.29 5.04851 952.186 6.96973 957.87 6.96973C963.554 6.96973 966.449 5.04823 969.004 3.35314C971.31 1.82235 973.131 0.613483 977.024 0.613483C980.918 0.613483 982.74 1.82263 985.047 3.35314C987.601 5.04851 990.497 6.96973 996.181 6.96973C1001.87 6.96973 1004.76 5.04851 1007.32 3.35314C1009.62 1.82263 1011.44 0.613483 1015.34 0.613483C1019.23 0.613483 1021.05 1.82263 1023.36 3.35314C1025.92 5.04851 1028.81 6.96973 1034.5 6.96973C1040.18 6.96973 1043.08 5.04851 1045.63 3.35314C1047.94 1.82263 1049.76 0.613483 1053.65 0.613483C1057.55 0.613483 1059.37 1.82263 1061.68 3.35342C1064.23 5.04851 1067.13 6.96973 1072.81 6.96973"
              stroke="url(#paint6_linear_547_487)"
            ></path>{" "}
            <path
              d="M1072.82 6.96973C1078.5 6.96973 1081.4 5.04851 1083.96 3.35342C1086.26 1.82263 1088.08 0.613483 1091.98 0.613483C1095.87 0.613483 1097.69 1.82263 1100 3.35314"
              stroke="url(#paint7_linear_547_487)"
            ></path>
          </g>{" "}
          <defs>
            <linearGradient
              id="paint0_linear_547_487"
              x1="6.66332"
              y1="3.79136"
              x2="7.12698"
              y2="-4.43997"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint1_linear_547_487"
              x1="159.929"
              y1="3.7916"
              x2="160.393"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint2_linear_547_487"
              x1="313.183"
              y1="3.7916"
              x2="313.647"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint3_linear_547_487"
              x1="466.445"
              y1="3.7916"
              x2="466.908"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint4_linear_547_487"
              x1="619.71"
              y1="3.7916"
              x2="620.174"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint5_linear_547_487"
              x1="772.968"
              y1="3.7916"
              x2="773.432"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint6_linear_547_487"
              x1="926.22"
              y1="3.7916"
              x2="926.684"
              y2="-4.43973"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>{" "}
            <linearGradient
              id="paint7_linear_547_487"
              x1="1074"
              y1="3.7916"
              x2="1076.38"
              y2="-3.70913"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#FF5858"></stop>{" "}
              <stop offset="1" stop-color="#C058FF"></stop>
            </linearGradient>
          </defs>
        </svg>
      </Box>
      <Footer />
    </Box>
  );
};

export default Landing;
