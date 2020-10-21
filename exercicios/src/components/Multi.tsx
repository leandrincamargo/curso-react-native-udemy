import React from 'react';
import { Text } from 'react-native';

import estilo from './estilo';

// export default function Comp() {
//   return <Text>Comp #Oficial</Text>;
// }

// export function Comp1() {
//   return <Text>Comp #01</Text>;
// }

// export function Comp2() {
//   return <Text>Comp #02</Text>;
// }

function Comp() {
  return <Text style={estilo.txtG}>Comp #Oficial</Text>;
}

function Comp1() {
  return <Text style={estilo.txtG}>Comp #01</Text>;
}

function Comp2() {
  return <Text style={estilo.txtG}>Comp #02</Text>;
}

export { Comp1, Comp2 };
export default Comp;
