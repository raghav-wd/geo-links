import * as React from "react";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
  Add,
  CloseRounded,
  ColorizeRounded,
  Delete,
  Email,
  Facebook,
  FormatAlignCenterRounded,
  Instagram,
  NavigateNextRounded,
  Pinterest,
  YouTube,
} from "@mui/icons-material";
import {
  Box,
  DialogActions,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnUnderline,
  HtmlButton,
  BtnStyles,
  Separator,
  Toolbar,
  createButton,
  EditorProvider,
  Editor,
} from "react-simple-wysiwyg";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addText } from "../../../redux/reducers/link";
import { useState } from "react";
import ColorPicker from "material-ui-color-picker";
import { setSnackbar } from "../../../redux/reducers/app";

const AddQuote = ({ handleClose }) => {
  const link = useSelector((state) => state.link);
  const [field, setField] = useState("");
  const dispatch = useDispatch();
  const [value, setValue] = useState("simple text");

  function onChange(e) {
    setField(e.target.value);
  }
  const BtnAlignCenter = createButton(
    "Align center",
    <FormatAlignCenterRounded fontSize="small" />,
    "justifyCenter"
  );

  const [textColor, setTextColor] = useState();

  return (
    <>
      <DialogTitle
        style={{ borderBottom: "1px solid #515151" }}
        mx={1}
        sx={{ minWidth: { lg: "400px" } }}
      >
        Add Quote
        <IconButton
          aria-label="delete"
          style={{ float: "right" }}
          onClick={handleClose}
        >
          <CloseRounded />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Box my={2}>
          <EditorProvider>
            <Editor
              value={field}
              onChange={onChange}
              style={{ height: "60vh" }}
            >
              <Toolbar
                style={{
                  backgroundColor: "#00000000",
                  minWidth: "600px",
                }}
              >
                <BtnBold />
                <BtnItalic />
                <BtnUnderline />
                <BtnStrikeThrough />
                <Separator />
                <BtnNumberedList />
                <BtnBulletList />
                <Separator />
                <BtnAlignCenter />
                <BtnClearFormatting />
                <HtmlButton />
                <Separator />
                <BtnStyles
                  style={{ border: "none", backgroundColor: "#00000000" }}
                />
                <Separator />
                <Grid container alignItems="center">
                  <ColorPicker
                    onChange={(color) => (color ? setTextColor(color) : null)}
                    className="clr-picker"
                    style={{
                      backgroundColor: textColor,
                      width: "18px",
                      height: "18px",
                      borderRadius: "100%",
                      border: "none",
                    }}
                  />
                  <ColorizeRounded fontSize="small" />
                </Grid>
              </Toolbar>
            </Editor>
          </EditorProvider>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button
          onClick={() => {
            dispatch(addText({ text: field, color: textColor }));
            dispatch(setSnackbar({ open: true, message: "Text added" }));
            handleClose();
          }}
        >
          Done
        </Button>
      </DialogActions>
    </>
  );
};

export default AddQuote;
