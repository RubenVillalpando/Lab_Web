import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from '../componentes/comunes/Navbar';
import { GameScreen } from '../componentes/games/GameScreen';
import { PcScreen } from '../componentes/pc/PcScreen';
import { PsScreen } from '../componentes/ps/PsScreen';

import { SwitchScreen } from '../componentes/switch/SwitchScreen';
import { XboxScreen } from '../componentes/xbox/XboxScreen';
export const GamesRouter = () => {
 return (
 <>
 <Navbar />
 <div>
 <Routes>
 <Route exact path="/ps" element={<PsScreen/>} />
 <Route exact path="/xbox" element={<XboxScreen/>} />
 <Route exact path="/switch" element={<SwitchScreen/>} />
 <Route exact path="/pc" element={<PcScreen/>} />
 <Route exact path="/game/:gameId" element={<GameScreen/>} />
 <Route
 path="*"
 element={<Navigate to="/ps" replace />}
 />
 </Routes>
 </div>
 </>
 )
}
