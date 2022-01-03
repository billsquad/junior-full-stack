import { useContext } from 'react';
import { SearchQueryContext } from '../context/SearchQueryContext';

export function useSearchQuery() {
  const context = useContext(SearchQueryContext);
  if (context === undefined) {
    throw new Error('useSearchQuery must be used within a SearchQueryProvider');
  }
  return context;
}
