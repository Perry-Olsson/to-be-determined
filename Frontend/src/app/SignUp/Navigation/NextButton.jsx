import React from 'react';
import Button from '../../../components/Button';

function NextButton({ onPress }) {
  return (
    <Button title='Next' onPress={onPress} />
  );
}

export default NextButton;