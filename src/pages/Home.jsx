import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Box>
      <Stack
        justifyContent="center"
        alignItems="center"
        mt={20}
        spacing={5}
      >
        <div
          className="websiteTitle"
          style={{
            fontSize: "5rem"
          }}
        >
          Goshen Realty
        </div>
        <Typography
        >
          You Dream Home Awaits You Here
        </Typography>
        <Button
          variant="contained"
          href="/search"
        >
          Start You Search
        </Button>
      </Stack>
    </Box>
  );
}