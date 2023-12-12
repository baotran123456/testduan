import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";
// components
import hinhanh404 from "../assets/success.png";

// ----------------------------------------------------------------------

const ContentStyle = styled("div")(({ theme }) => ({
  maxWidth: 480,
  margin: "auto",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: theme.spacing(12, 0),
}));

// ----------------------------------------------------------------------

export default function Completed() {
  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Bạn đã thanh toán thành công!
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Chúng tôi xin cảm ơn bạn vì đã mua hàng của chúng tôi.
        </Typography>

        <div
          style={{
            padding: "5% 0",
            width: "100%",
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            alignItems: "center",
          }}
          className="number"
        >
          <img className="img" src={hinhanh404} alt="login" width={"80%"} />
        </div>

        <Button to="/" size="medium" variant="contained" component={RouterLink}>
          VỀ TRANG CHỦ
        </Button>
      </ContentStyle>
    </Container>
  );
}
