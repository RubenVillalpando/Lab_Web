import React from 'react';
import { GameListScreen } from '../games/GameListScreen';
export const XboxScreen = () => {
    return(
        <>
        <h1>Juegos de Xbox</h1>
        <br/>
        <GameListScreen plataforma="Xbox" />
        </>
        )
}