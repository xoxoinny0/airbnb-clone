import { Box, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import * as S from "./Footer.style";

export default function Footer() {
  return (
    <Box
      sx={{
        borderTop: "1px solid #dddddd",
        backgroundColor: "#f7f7f7",
      }}
    >
      <Box component="footer">
        <Box sx={{ paddingInline: "24px" }}>
          <S.FooterSection>
            <Typography
              variant="h3"
              sx={{ marginBottom: "12px", fontSize: "14px" }}
            >
              에어비엔비 지원
            </Typography>
            <Stack component="ul" spacing={"12px"}>
              <S.StackItem>도움말 센터</S.StackItem>
              <S.StackItem>안전 문제 관련 도움받기</S.StackItem>
              <S.StackItem>에어커버</S.StackItem>
              <S.StackItem>차별 반대</S.StackItem>
              <S.StackItem>장애인 지원</S.StackItem>
              <S.StackItem>예약 취소 옵션</S.StackItem>
              <S.StackItem>이웃 민원 신고</S.StackItem>
            </Stack>
          </S.FooterSection>

          <Divider />

          <S.FooterSection>
            <Typography
              variant="h3"
              sx={{ marginBottom: "12px", fontSize: "14px" }}
            >
              호스팅
            </Typography>
            <Stack component="ul" spacing={"12px"}>
              <S.StackItem>당신의 공간을 에어비앤비하세요</S.StackItem>
              <S.StackItem>호스트를 위한 에어커버</S.StackItem>
              <S.StackItem>호스팅 자료</S.StackItem>
              <S.StackItem>커뮤니티 포럼</S.StackItem>
              <S.StackItem>책임감 있는 호스팅</S.StackItem>
              <S.StackItem>무료 호스팅 클래스 참여하기</S.StackItem>
              <S.StackItem>공동 호스트 찾기</S.StackItem>
            </Stack>
          </S.FooterSection>

          <Divider />

          <S.FooterSection>
            <Typography
              variant="h3"
              sx={{ marginBottom: "12px", fontSize: "14px" }}
            >
              에어비엔비
            </Typography>
            <Stack component="ul" spacing={"12px"}>
              <S.StackItem>뉴스룸</S.StackItem>
              <S.StackItem>새로운 기능</S.StackItem>
              <S.StackItem>채용정보</S.StackItem>
              <S.StackItem>투자자 정보</S.StackItem>
              <S.StackItem>Airbnb.org 긴급 숙소</S.StackItem>
            </Stack>
          </S.FooterSection>

          <Divider />

          <Box>한국어</Box>
          <Box>© 2024 Airbnb, Inc.</Box>
          <Stack></Stack>
        </Box>
      </Box>
    </Box>
  );
}
