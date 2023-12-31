const express = require('express');
const axios=require('axios');
const app = express();
const PORT = process.env.PORT || 5000;
const FOURSQUARE_API_KEY='fsq3ZZ+b6cbcipVmIKzZc2Wuz0I/kZ5RX8RYNd7raFl/aTg=';
app.get('/api/cupoane', async (req, res) => {
    try {
        
        const response = await axios.get('https://api.foursquare.com/v2/venues/search', {
          params: {
            client_id: 'KWFVULW4DCCFONBDDUZ3KTGAFXVHRKH13XFO2OO21RNSJGRD',
            client_secret: 'G00HEZIMTOWXA5A2V1QYG05TPRXPTUCGMTAFJBPRB15CC1BN',
            v: '20230101',
            near: 'Romania',
            query: 'Reduceri',
          },
        });
        res.json(response.data.response.venues);
  } catch (error) {
    console.error('Eroare la obținerea cupoanelor:', error);
    res.status(500).json({ error: 'Eroare la obținerea cupoanelor' });
  }
  
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
