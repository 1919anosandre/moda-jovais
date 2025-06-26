/*import React, { useState, useEffect } from 'react';
import { getProtectedData } from './api';

function ProtectedPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProtectedData();
        setData(response.data);
      } catch (err) {
        setError('Failed to fetch protected data');
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Protected Page</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {data && (
        <div>
          <p>{data.message}</p>
          <p>User: {data.user.email}</p>
        </div>
      )}
    </div>
  );
}

export default ProtectedPage;*/