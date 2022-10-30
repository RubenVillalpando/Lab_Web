import React from 'react';
import {
 BrowserRouter as Router,
 Routes,
 Route
} from "react-router-dom";
import { LoginScreen } from '../componentes/login/LoginScreen';
import { GamesRouter } from './GamesRouter';
export const MainAppRouter = () => {
 return (
 <Router>
 <div>
 <Routes>
 <Route exact path="/login" element={<LoginScreen/>} />
 <Route
 path="*"
 element={<GamesRouter/>}
 />
 </Routes>
 </div>
 </Router>
 )
}