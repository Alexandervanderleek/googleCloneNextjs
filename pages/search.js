import React from 'react';
import Head from 'next/head';
import SearchHeader from '../componenents/SearchHeader';
import SearchResults from '../componenents/SearchResults';
import ImageResults from '../componenents/ImageResults';
import {useRouter} from "next/router";

// import { Container } from './styles';

function Search({results}) {
  const router = useRouter();
  return (
    <div>
        <Head>
            <title>{router.query.term} - Search Page</title>
        </Head>

        {/* Search Header */}
        <SearchHeader></SearchHeader>


        {/* Search Results */}
        {router.query.searchType==="image" ? (<ImageResults results={results}/>):( <SearchResults results={results}/>)}


    </div>
  );
}

export async function getServerSideProps(context){
  const startIndex = context.query.start || "1";
  const mockData = true
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((response)=>response.json())
  return {
    props:{
      results: data
    }
  }
}

export default Search;