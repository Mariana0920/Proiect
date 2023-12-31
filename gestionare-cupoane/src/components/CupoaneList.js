import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CupoaneList = () => {
  const [cupoane, setCupoane] = useState([]);

  useEffect(() => {
    const getCupoane = async () => {
      try {
       
        const response = await axios.get('http://localhost:5000/api/cupoane');
        
       
        setCupoane(response.data);
      } catch (error) {
        console.error('Eroare la obținerea cupoanelor:', error);
      }
    };

   
    getCupoane();
  }, []);

  return (
    <div>
      <h2>Listă de Cupoane</h2>
      <ul>
        {cupoane.map((cupon) => (
          <li key={cupon.id}>{cupon.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CupoaneList;
