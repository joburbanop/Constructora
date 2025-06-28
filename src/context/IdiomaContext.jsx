import React, { createContext, useContext, useState } from 'react';
import { traducciones } from '../utils/i18n';
import { languages } from '../utils/idiomas';

const IdiomaContext = createContext();

export function IdiomaProvider({ children }) {
  const [idioma, setIdioma] = useState('es');
  const t = traducciones[idioma];

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma, t, languages }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export function useIdioma() {
  return useContext(IdiomaContext);
} 