import React from 'react';

export const userData = {
  notTeslaUser: {
    name: 'notNikola Tesla',
    avatar_url: 'some url',
  },
  teslaUser: {
    name: 'Nikola Tesla',
    avatar_url: 'https://avatars3.githubusercontent.com/u10001',
  },
};

export const userDataContext = React.createContext(userData.teslaUser);
