import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react';
import axios from 'axios';

const API_KEY = 'cc636098'; 


 const BuscaScreen = () => {
   const [searchQuery, setSearchQuery] = useState('');
   const [searchResult, setSearchResult] = useState(null);
   const [error, setError] = useState(null);

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
  };

export default BuscaScreen;