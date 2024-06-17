import React from 'react';
import { View, Text } from 'react-native';

const IndicacaoScreen = () => {
  const recomendacoes = [
    { title: 'O Senhor dos Anéis: O Retorno do Rei', year: '2003' },
    { title: 'Motoqueiro Fantasma', year: '2007' },
    { title: 'O Exterminador Do Futuro 2', year: '1991' },
    { title: 'Cobain: Montage of Heck', year: '2015' },
    { title: 'Homem de Ferro', year: '2008' },
  ];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Filmes Recomendados</Text>
      {recomendacoes.map((filme, index) => (
        <View key={index} style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 18 }}>{filme.title} ({filme.year})</Text>
        </View>
      ))}
    </View>
  );
};

export default IndicacaoScreen;
