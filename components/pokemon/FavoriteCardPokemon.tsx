import { Card, Grid } from '@nextui-org/react';
import { FC } from 'react'
import { useRouter } from "next/router";

interface Props{
    pokeID: number;
}

export const FavoriteCardPokemon: FC<Props> = (props) => {

    const router = useRouter();
    const onFavoriteClicked = () => {
        router.push(`/pokemon/${props.pokeID}`)
    }
    return (
        <Grid xs={6} sm={3} md={2} xl={1} key={props.pokeID}>
            <Card
                isHoverable
                isPressable
                css={{ padding: '10' }}
                onClick={onFavoriteClicked}
            >
                <Card.Image
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${props.pokeID}.svg`}
                    width={'100%'}
                    height={140}

                />
            </Card>
        </Grid>
    )
};
