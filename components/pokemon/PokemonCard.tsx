import { SmallPokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from "next/router";
import { FC } from "react";

interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
  
  const router = useRouter();

  const onClickPokemon = () => {
    router.push(`/name/${pokemon.name}`)
  }

    return (
            <Grid xs={12} sm={3} md={2} xl={2} key={pokemon.id}>
        <Card
          isHoverable
          isPressable
          onClick={onClickPokemon}>
                <Card.Body css={{ p: 40 }}>
                  <Card.Image
                    src={pokemon.img}
                    css={{
                      position: 'absolute'
                    }}
                    width='100%'
                    height={250}
                  />
                </Card.Body>
                <Card.Footer
                      isBlurred
                      css={{
                        position: "absolute",
                        bgBlur: "#0f111466",
                        bottom: -10,
                        zIndex: 1,
                      }}
                >
                  <Row justify='space-between'>
                    <Text transform='capitalize'>{ pokemon.name }</Text>
                    <Text>{ pokemon.id }</Text>
                  </Row>
                </Card.Footer>
              </Card>
            </Grid>
    )
}