import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';
import ContatoScreen from './src/contato';
import DestaquesScreen from './src/destaques';
import IndicacaoScreen from './src/indicacao';

const API_KEY = 'cc636098'; 

const BuscaScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);
  const [error, setError] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('busca');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
      if (response.data.Response === 'True') {
        setSearchResult(response.data.Search);
        setError(null);
      } else {
        setSearchResult(null);
        setError(response.data.Error);
      }
    } catch (error) {
      console.error('Erro ao buscar resultados de pesquisa:', error);
      setError('Ocorreu um erro ao buscar resultados.');
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'busca':
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <TextInput
              placeholder="Busque um filme..."
              value={searchQuery}
              onChangeText={text => setSearchQuery(text)}
              style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: '80%' }}
            />
            <Button title="Search" onPress={handleSearch} />
            {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
            {searchResult && (
              <View style={{ marginTop: 20 }}>
                {searchResult.map((movie, index) => (
                  <Text key={index}>{movie.Title}</Text>
                ))}
              </View>
            )}
          </View>
        );
      case 'contato':
        return <ContatoScreen />;
      case 'destaques':
        return <DestaquesScreen />;
      case 'indicacao':
        return <IndicacaoScreen />;
      default:
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tela não encontrada.</Text>
          </View>
        );
    }
  };

  return (
    <View style={{ flex: 1 }}>
      {}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 50, backgroundColor: '#f0f0f0' }}>
        <Button title="Busca" onPress={() => setCurrentScreen('busca')} />
        <Button title="Contato" onPress={() => setCurrentScreen('contato')} />
        <Button title="Destaques" onPress={() => setCurrentScreen('destaques')} />
        <Button title="Indicação" onPress={() => setCurrentScreen('indicacao')} />
      </View>

      {}
      {renderScreen()}
    </View>
  );
};

export default BuscaScreen;
