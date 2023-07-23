import React from "react";
import Logotipo from "@assets/logo.png";

import { BackButton, BackIcon, Container, Logo } from "./styles";
import { useNavigation } from "@react-navigation/native";

type Props = {
  showBackButton?: boolean;
};

export const Header = ({ showBackButton = false }: Props) => {
  const { navigate } = useNavigation();

  const handleGoBackToHome = () => {
    navigate("groups");
  };

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBackToHome}>
          <BackIcon />
        </BackButton>
      )}

      <Logo source={Logotipo} />
    </Container>
  );
};
