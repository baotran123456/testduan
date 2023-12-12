import { Link as RouterLink } from "react-router-dom";
// @mui
import { styled } from "@mui/material/styles";
import { Button, Typography, Container, Box } from "@mui/material";
// components
import hinhanh404 from "../assets/sorry.png";
import { useNavigate } from "react-router-dom";

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

export default function Inactive() {
  const navigate = useNavigate();
  const onClickHome = () => {
    localStorage.removeItem("UserUser");
    localStorage.removeItem("token");
    localStorage.removeItem("Infomation");
    window.location.href = "/login";
    navigate("/login");
  };
  return (
    <Container>
      <ContentStyle sx={{ textAlign: "center", alignItems: "center" }}>
        <Typography variant="h3" paragraph>
          Tài khoản của bạn đã bị khóa tạm thời !
        </Typography>

        <Typography sx={{ color: "text.secondary" }}>
          Bạn muốn biết chi tiết xin liên hệ qua số điện thoại 0954756557.
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

        <Button
          onClick={onClickHome}
          size="medium"
          variant="contained"
          component={RouterLink}
        >
          VỀ TRANG CHỦ
        </Button>
      </ContentStyle>
    </Container>
  );
}
