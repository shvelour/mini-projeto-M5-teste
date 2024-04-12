import { useEffect, useState } from "react";
import axios from 'axios'; 
import Header from "../../components/Header";

export default function Home(){
   const [genre, setGenre] = useState([]);

   useEffect(() => {
      
      async function handleGenre(){
         try {
            const {data} = await axios.get('http://localhost:3001/genres');
            console.log(data);
            setGenre(data);
         } catch (error) {
            console.error('Erro ao buscar gêneros:', error);
         }
      }
      handleGenre()
   }, []);


   console.log(genre); 

   return (
    <>
    <Header title={false} name=""></Header>
    {genre.length > 0 ? (
        genre.map(genres => (
          <span key={genres}>{genres.name}</span>
        ))
      ) : (
        <span>Carregando...</span>
      )}
      
    </>
   );
}
