import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

import estilo from '../estilo';
import MegaNumero from './MegaNumero';

interface MegaProps {
  qtdeNumeros: number;
}

export default class Mega extends React.Component<MegaProps> {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumero = (qtde: string) => {
    this.setState({ qtdeNumeros: +qtde });
  };

  gerarNumeroNaoContido = (nums: any): any => {
    const novo = Math.floor(Math.random() * 60) + 1;
    return nums.includes(novo) ? this.gerarNumeroNaoContido(nums) : novo;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce((n) => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);
    this.setState({ numeros });
  };

  exibirNumeros = () => {
    const nums = this.state.numeros;

    return nums.map((num) => {
      return <MegaNumero key={num} num={num} />;
    });
  };

  render() {
    return (
      <>
        <Text style={estilo.txtG}>Gerador de Mega-Sena {this.state.qtdeNumeros}</Text>
        <TextInput
          keyboardType={'numeric'}
          style={{ borderBottomWidth: 1 }}
          placeholder="Qtde de Números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumero}
        />
        <Button title="Gerar" onPress={this.gerarNumeros} />

        <View
          style={{
            marginTop: 20,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {this.exibirNumeros()}
        </View>
      </>
    );
  }
}
