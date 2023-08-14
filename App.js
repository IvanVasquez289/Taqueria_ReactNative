import 'react-native-gesture-handler';
import React from "react";
import Navigation from "./Navigation";
import { TaqueriaProvider } from './context/TaqueriaProvider';
export default function App() {
  return (
    <TaqueriaProvider>
      <Navigation/>
    </TaqueriaProvider>
  );
}
