import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

export default function About() {
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
          Making Dreams Come True Since 1984
        </Typography>
      </Stack>
    </Container>
  );
}