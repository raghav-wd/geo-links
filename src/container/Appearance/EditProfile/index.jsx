import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setBio } from "../../../redux/reducers/user";

const EditProfile = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <Box>
      <Card variant="outlined">
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              src="https://ugc.production.linktr.ee/9e3a8815-6f31-4334-9188-4991541f1d34_untitled.png"
            />
          }
          title={"@" + user.username}
          subheader={`estring.in/${user.username}`}
        />
        <CardContent>
          {/* <TextField
            label="Title"
            fullWidth
            variant="outlined"
            defaultValue="r.a.g.h.a._v"
          /> */}

          <Box my={2}>
            <TextField
              id="outlined-multiline-static"
              label="Bio"
              multiline
              rows={4}
              fullWidth
              onChange={(e) => dispatch(setBio(e.target.value))}
              defaultValue={user.bio}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default EditProfile;
