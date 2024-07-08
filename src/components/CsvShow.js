import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

const CsvData = () => {
    const [csvData, setCsvData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('tugo_data.csv');
          const csvText = await response.text();
          Papa.parse(csvText, {
            complete: (results) => {
              setCsvData(results.data);
            },
          });
        } catch (error) {
          console.error('Error fetching CSV data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div>
        {csvData.map((row, index) => (
          <div key={index}>
            {row.map((cell, cellIndex) => (
              <div key={cellIndex}>{cell}</div>
            ))}
          </div>
        ))}

        console.log(csvData);
      </div>
    );
  };
  
  export default CsvData;