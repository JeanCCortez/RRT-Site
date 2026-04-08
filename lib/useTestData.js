/**
 * Custom Hook: useTestData
 * Loads test data from JSON exports or banco_dados
 * Falls back to synthetic data for visualization
 */

import { useState, useEffect } from 'react';
import { fetchTestData } from './testDataConfig';

export function useTestData(testId) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!testId) {
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    fetchTestData(testId)
      .then(result => {
        setData(result);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [testId]);

  return { data, loading, error };
}

export default useTestData;
