import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import axios from 'axios';

const API_KEY = 'cc636098'; // Sua chave de API OMDb aqui

const BuscaScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${searchQuery}`);
      if (response.data.Response === 'True') {
        setSearchResult(response.data.Search);
        setError(null);
      } else {
        setSearchResult([]);
        setError(response.data.Error);
      }
    } catch (error) {
      console.error('Erro ocorrido ao pesquisar', error);
      setError('Erro ocorrido na busca de resultados.');
    }
  };

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <TextInput
        placeholder="Pesquise um Filme..."
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      
      <Button title="Search" onPress={handleSearch} />
      {error && <Text style={{ color: 'red', marginTop: 10 }}>{error}</Text>}
      <ScrollView style={{ marginTop: 10 }}>
        {searchResult.map((movie, index) => (
          <View key={index} style={{ marginBottom: 10 }}>
            <Text style={{ fontSize: 18 }}>{movie.Title} ({movie.Year})</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default BuscaScreen;
