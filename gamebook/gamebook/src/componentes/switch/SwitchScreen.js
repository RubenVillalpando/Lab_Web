import React from 'react';
import { GameListScreen } from '../games/GameListScreen';
export const SwitchScreen = () => {
    return(
        <>
        <h1>Juegos de Switch</h1>
        <br/>
        <GameListScreen plataforma="Nintendo Switch" />
        </>
        )
}