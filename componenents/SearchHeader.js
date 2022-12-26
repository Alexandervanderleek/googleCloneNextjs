import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import User from './User';
// import { Container } from './styles';
import SearchHeaderOptions from './SearchHeaderOptions';
import { MicrophoneIcon,SearchIcon,XIcon } from '@heroicons/react/solid';

function SearchHeader() {
    const router = useRouter();
    const searchInputRef = useRef(null);

    function search(event){
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;
        router.push(`/search?term=${term.trim()}&searchType=`)
    }

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image 
        className='cursor-pointer'
        onClick={()=>{router.push("/")}}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
         alt="google logo"
         width="120"
         objectFit="contain"
         height="40"/>

            <form className='flex border border-gray-200 rounded-full shadow-lg px-6 py-4 ml-10 mr-5 flex-grow max-w-3xl items-center'>
                <input type="text" 
                ref={searchInputRef} 
                className="w-full focus:outline-none"
                defaultValue={router.query.term}/>
                <XIcon onClick={()=>(searchInputRef.current.value="")} className='h-7 text-gray-500 cursor-pointer sm:mr-3'></XIcon>
                <MicrophoneIcon className='h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3'></MicrophoneIcon>
                <SearchIcon className='h-6 hidden sm:inline-flex text-blue-500'></SearchIcon>
                <button type="submit" hidden onClick={search}></button>
            </form>
            <User className="ml-auto whitespace-nowrap"></User>
        </div>
        <SearchHeaderOptions></SearchHeaderOptions>

    </header>
  )
}

export default SearchHeader;