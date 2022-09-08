import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <Container
      maxWidth="md"
    >
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
        >
          Start You Search
        </Button>
      </Stack>
    </Container>
  );
}