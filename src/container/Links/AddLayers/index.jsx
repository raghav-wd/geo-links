const AddLayers = () => {
  return (
    <>
      <SelectLayers />
      <DialogContent>
        <Grid container alignItems="center" spacing={0} my={1}>
          <Grid xs={10} lg={11}>
            <Typography fontWeight="bold">URL Layer</Typography>
            <Typography color="#515151">
              Link anywhere and everywhere. Add a single URL block to your page
              e.g. affiliate link
            </Typography>
          </Grid>
          <Grid xs={2} lg={1}>
            <Button
              variant="none"
              // startIcon={<Add />}
              style={{ color: "green" }}
            >
              Add
            </Button>
          </Grid>
        </Grid>
        <Box>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10}>
              <Typography fontWeight="bold">Link Your Socials</Typography>
              <Typography color="#515151">
                Link your socials so your followers can easily find all of your
                content
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="none"
                // startIcon={<Add />}
                style={{ color: "green" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10}>
              <Typography fontWeight="bold">Quote</Typography>
              <Typography color="#515151">
                Blend in a wise expression.
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="none"
                // startIcon={<Add />}
                style={{ color: "green" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
          <Grid container alignItems="center" spacing={0} my={1}>
            <Grid xs={10}>
              <Typography fontWeight="bold">
                Exclusive Direct Messages
              </Typography>
              <Typography color="#515151">
                Enable your audience to message you, pose questions, seek
                advice, and engage in further interaction.
              </Typography>
            </Grid>
            <Grid xs={2}>
              <Button
                variant="none"
                // startIcon={<Add />}
                style={{ color: "green" }}
              >
                Add
              </Button>
            </Grid>
          </Grid>
        </Box>
      </DialogContent>
    </>
  );
};
