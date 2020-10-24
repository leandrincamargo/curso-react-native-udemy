import React from 'react';

import TextoCentral from './TextoCentral';

export default function TelaC(props: any) {
  const r = props.route;
  const route = r && r.params && r.params.numero ? r.params.numero : 0;

  return <TextoCentral corFundo="#9932cd">Tela C - {route}</TextoCentral>;
}
