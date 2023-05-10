/** @format */

import { Box, Paper } from '@mui/material';
import Room from './components/Room';
import { useEffect, useState } from 'react';
import axios from 'axios';
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('main.php').then(res => {
        if (JSON.stringify(res.data) !== JSON.stringify(data)) {
          setData(res.data);
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [data]);
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1,
      }}>
      {[1, 2, 3].map(room => (
        <Paper key={room} sx={{ width: '300px' }}>
          <Room data={data[room]} room={room} />
        </Paper>
      ))}
    </Box>
  );
}

export default App;
