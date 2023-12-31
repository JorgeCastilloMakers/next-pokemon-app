import React, { FC } from 'react'
import { Card, Grid } from '@nextui-org/react';
import { FavoriteCardPokemon } from './FavoriteCardPokemon';

interface Props{
    arrPoke: number[];
}

export const FavoritesPokemons: FC<Props> = ({arrPoke}:Props) => {
  return (
      <Grid.Container gap={2} direction='row' justify='flex-start'>
          {arrPoke.map(id => (
              <FavoriteCardPokemon pokeID={id} key={id } />
          ))}
    </Grid.Container>
  )
}
