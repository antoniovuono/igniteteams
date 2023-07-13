import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { ButtonIconTypeStyleProps, Container, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  type?: ButtonIconTypeStyleProps;
};

export const ButtonIcon = ({ type = "PRIMARY", icon, ...rest }: Props) => {
  return (
    <Container>
      <Icon name={icon} type={type} />
    </Container>
  );
};
