import React from 'react';
import { StyleSheet, View } from 'react-native';

import Field from './Field';

interface MineFieldProps {
  board: any[][];
  onOpenField: any;
  onSelectField: any;
}

const MineField: React.FC<MineFieldProps> = ({ board, onOpenField, onSelectField }) => {
  const rows = board.map((row, r) => {
    const columns = row.map((field: any, c: any) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => onOpenField(r, c)}
          onSelect={() => onSelectField(r, c)}
        />
      );
    });
    return (
      <View key={r} style={{ flexDirection: 'row' }}>
        {columns}
      </View>
    );
  });

  return <View style={styles.container}>{rows}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
});

export default MineField;
