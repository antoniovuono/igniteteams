import React from "react";

import { Container, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export const NewGroup = () => {
  const { navigate } = useNavigation();

  const handleNew = () => {
    navigate("players", { groups: "Rocket" });
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" onPress={handleNew} style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
};
