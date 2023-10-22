import { Box, CircularProgress } from "@mui/material";

const Loading = () => {
  return (
    <Box justifyContent={"center"} alignItems={"center"} display={"flex"}>
      <CircularProgress />
    </Box>
  );
};

export default Loading;
