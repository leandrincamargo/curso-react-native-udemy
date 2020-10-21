import React from 'react';
import { Text } from 'react-native';

import estilo from '../estilo';

import produtos from './produtos';

export default function ListaProdutos() {
  function obterLista() {
    return produtos.map((p) => {
      return (
        <Text key={p.id}>
          {p.id}) {p.nome} tem R$ {p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={estilo.txtG}>Lista de Produtos</Text>
      {obterLista()}
    </>
  );
}
