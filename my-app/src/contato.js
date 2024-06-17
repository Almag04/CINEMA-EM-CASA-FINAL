import React from 'react';
import { View, Text } from 'react-native';

const ContatoScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Contato / Quem Somos</Text>
      <Text style={{ marginBottom: 10 }}>Telefone: (19) 2873-4748</Text>
      <Text style={{ marginBottom: 10 }}>Email: contato@cinemanamao.com</Text>
      <Text>
        Cinema na Mão é um site destinado á aqueles que querem indicações rápidas de filmes, perfeito para aquelas sessõeszinhas de cinema em casa
        ou para conferir aquele lançamento quente!
      </Text>
    </View>
  );
};

export default ContatoScreen;