import React from 'react';
import Head from 'next/head';
import SearchHeader from '../componenents/SearchHeader';

// import { Container } from './styles';

function Search() {
  return (
    <div>
        <Head>
            <title>Search Page</title>
        </Head>

        {/* Search Header */}
        <SearchHeader></SearchHeader>


        {/* Search Results */}

    </div>
  );
}

export default Search;