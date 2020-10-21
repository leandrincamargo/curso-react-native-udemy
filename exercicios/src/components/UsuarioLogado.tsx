import React from 'react';
import { Text } from 'react-native';

import estilo from './estilo';
import If from './if';

interface UsuarioLogadoProps {
  usuario?: any;
}

const UsuarioLogado: React.FC<UsuarioLogadoProps> = ({ usuario }) => {
  const usuarioConst = usuario || {};
  return (
    <>
      <If teste={usuarioConst && usuarioConst.nome && usuarioConst.email}>
        <Text style={estilo.txtG}>Usuário Logado:</Text>
        <Text style={estilo.txtG}>
          {usuarioConst.nome} - {usuarioConst.email}
        </Text>
      </If>
    </>
  );
};

export default UsuarioLogado;
