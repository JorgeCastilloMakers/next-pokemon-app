/* eslint-disable jsx-a11y/alt-text */
import { FavoritesPokemons } from '@/components/pokemon';
import { Layout } from '@/components/layouts'
import { localFavorites } from '@/utils';
import { NoFavorites } from '@/components/ui';
import { useEffect, useState } from 'react';


export const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons());
  }, [])
  

  return (
    <Layout title='Listado de Favoritos'>
      
      {
        favoritePokemons.length === 0
          ? (<NoFavorites />)
          : (
            <FavoritesPokemons arrPoke={ favoritePokemons } />
          )}
        
    </Layout>
  )
}

export default FavoritesPage;