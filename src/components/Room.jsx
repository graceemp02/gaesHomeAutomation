/** @format */

import React from 'react';
import { List, Typography } from '@mui/material';
import Light from './Light';
const Room = ({ room, data }) => {
  return (
    <>
      <Typography
        variant='h5'
        fontWeight='bold'
        align='center'
        sx={{ textDecoration: 'underline' }}>
        Room {room}
      </Typography>
      <List sx={{ width: '100%', maxWidth: 550 }}>
        {[1, 2, 3, 4].map(light => (
          <Light
            key={light}
            light={light}
            room={room}
            data={data && { btn: data[`btn${light}`], ind: data[`ind${light}`] }}
          />
        ))}
      </List>
    </>
  );
};

export default Room;
