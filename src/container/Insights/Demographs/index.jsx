import { Box, Card, Typography, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { LineChart } from "@mui/x-charts/LineChart";
import { useEffect } from "react";

const Demographs = () => {
  const desktop = useMediaQuery("(min-width:600px)");
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.google.com/jsapi";
    script.id = "googlegeomap";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    document.getElementById("googlegeomap").addEventListener("load", () => {
      const mapWidth = [1000, 360];
      /*global google*/
      google.load("visualization", "1", { packages: ["geochart"] });
      google.setOnLoadCallback(drawVisualization);

      function drawVisualization() {
        var data = google.visualization.arrayToDataTable([
          ["State Code", "State", "Views"],
          ["IN-UP", "Uttar Pradesh", 33],
          ["IN-MH", "Maharashtra", 32],
          ["IN-BR", "Bihar", 31],
          ["IN-WB", "West Bengal", 32],
          ["IN-MP", "Madhya Pradesh", 30],
          ["IN-TN", "Tamil Nadu", 33],
          ["IN-RJ", "Rajasthan", 33],
          ["IN-KA", "Karnataka", 29],
          ["IN-GJ", "Gujarat", 34],
          ["IN-AP", "Andhra Pradesh", 32],
          ["IN-OR", "Orissa", 33],
          ["IN-TG", "Telangana", 33],
          ["IN-KL", "Kerala", 31],
          ["IN-JH", "Jharkhand", 29],
          ["IN-AS", "Assam", 28],
          ["IN-PB", "Punjab", 30],
          ["IN-CT", "Chhattisgarh", 33],
          ["IN-HR", "Haryana", 30],
          ["IN-JK", "Jammu and Kashmir", 20],
          ["IN-UT", "Uttarakhand", 28],
          ["IN-HP", "Himachal Pradesh", 17],
          ["IN-TR", "Tripura", 31],
          ["IN-ML", "Meghalaya", 21],
          ["IN-MN", "Manipur", 22],
          ["IN-NL", "Nagaland", 22],
          ["IN-GA", "Goa", 32],
          ["IN-AR", "Arunachal Pradesh", 33],
          ["IN-MZ", "Mizoram", 23],
          ["IN-SK", "Sikkim", 24],
          ["IN-DL", "Delhi", 31],
          ["IN-PY", "Puducherry", 33],
          ["IN-CH", "Chandigarh", 30],
          ["IN-AN", "Andaman and Nicobar Islands", 30],
          ["IN-DN", "Dadra and Nagar Haveli", 30],
          ["IN-DD", "Daman and Diu", 29],
          ["IN-LD", "Lakshadweep", 31],
        ]);

        var opts = {
          region: "IN",
          domain: "IN",
          displayMode: "regions",
          colorAxis: { colors: ["#e5ef88", "#d4b114", "#e85a03"] },
          resolution: "provinces",
          backgroundColor: "white",
          datalessRegionColor: "white",
          defaultColor: "#f5f5f5",
          width: desktop ? mapWidth[0] : mapWidth[1],
        };
        var geochart = new google.visualization.GeoChart(
          document.getElementById("visualization")
        );
        geochart.draw(data, opts);
      }
    });
  }, []);
  return (
    <Box>
      <Typography py={2} variant="h6">
        Demographs
      </Typography>
      <Typography color="gray">
        See how your Estring is performing in India
      </Typography>
      <script
        type="text/javascript"
        src="https://www.google.com/jsapi"
      ></script>

      <Box py={4}>
        <div align="center">
          <div id="visualization"> </div>
        </div>
      </Box>
    </Box>
  );
};

export default Demographs;
