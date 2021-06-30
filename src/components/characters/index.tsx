import React, { useEffect } from 'react';

import { api } from '../../services/api';

export const Characters: React.FC = () => {
  useEffect(() => {
    api.get('character').then(data => console.log(data));
  }, []);
  return <div />;
};
