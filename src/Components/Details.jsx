import { styled, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import houseCard from "../media/houseCard.png";

const Details = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: theme.spacing(10),
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  }));

  const ImgContainer = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  }));

  const LargeText = styled(Typography)(({ theme }) => ({
    fontSize: "64px",
    color: "#000",
    fontWeight: "700",
    [theme.breakpoints.down("md")]: {
      fontSize: "32px",
    },
  }));

  const SmallText = styled(Typography)(({ theme }) => ({
    fontSize: "18px",
    color: "#7B8087",
    fontWeight: "500",
    [theme.breakpoints.down("md")]: {
      fontSize: "14px",
    },
  }));

  const TextFlexbox = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(7),
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(0, 5, 0, 5),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      gap: theme.spacing(5),
    },
  }));

  const Divider = styled("div")(({ theme }) => ({
    width: "13%",
    height: "5px",
    backgroundColor: "#000339",
    [theme.breakpoints.down("md")]: {
      marginLeft: "auto",
      marginRight: "auto",
    },
  }));

  return (
    <Box sx={{ py: 10 }}>
      <Container>
        <CustomBox>
          <ImgContainer>
            <img src={houseCard} alt="house" style={{ maxWidth: "100%" }} />
          </ImgContainer>

          <Box>
            <Divider />
            <Typography
              sx={{
                fontSize: "35px",
                color: "#000339",
                fontWeight: "700",
                my: 3,
              }}
            >
              ¡Felicidades! Encontraste la propiedad de tus sueños.
            </Typography>

            <Typography
              sx={{
                fontSize: "16px",
                color: "#5A6473",
                lineHeight: "27px",
              }}
            >
             Cuando adquieres una propiedad, te estás asegurando estadía por un periodo de tiempo. Aquí estamos para asegurarnos y planificar tus sueños.
            </Typography>
          </Box>
        </CustomBox>

        <TextFlexbox>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>2500+</LargeText>
            <SmallText>Propiedades en venta</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3000+</LargeText>
            <SmallText>Propiedades Alquiladas</SmallText>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <LargeText>3500+</LargeText>
            <SmallText>Propiedades vendidas</SmallText>
          </Box>
        </TextFlexbox>
      </Container>
    </Box>
  );
};

export default Details;