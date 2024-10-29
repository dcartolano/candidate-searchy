// import { useState, useEffect } from 'react';
// import { type FormEvent, useState, useEffect } from 'react';
import { type FormEvent, useState } from 'react';
// import { searchGithub, searchGithubUser } from '../api/API';
// import { searchGithub } from '../api/API';
import { searchGithubUser } from '../api/API';

import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    name: '',
    login: '',
    location: '',
    avatar_url: '',
    email: '',
    html_url: '',
    company: '',
    bio: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  // addToPotentialCandidates
  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('filmsToWatch');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidate);
    localStorage.setItem('filmsToWatch', JSON.stringify(parsedPotentialCandidates));
  };

// showNextCandidate
  const showNextCandidate = () => {
    // think this needs significantly different logic anyways
    // let parsedAlreadySeenFilms: Candidate[] = [];
    // const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
    // if (typeof storedAlreadySeenFilms === 'string') {
    //   parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
    // }
    // parsedAlreadySeenFilms.push(currentCandidate);
    // localStorage.setItem(
    //   'alreadySeenFilms',
    //   JSON.stringify(parsedAlreadySeenFilms)
    // );
  };

  // searchForCandidate ? same as last one?
  // test code for allowing user input
  const searchForCandidate = async (event: FormEvent, candidate_login: string) => {  //what should the event be?
    event.preventDefault();
    const data: Candidate = await searchGithubUser(candidate_login);

    setCurrentCandidate(data);
  };

  // // test code for no user input
  // const searchForCandidate = async (event: FormEvent) => {  //what should the event be?
  //   event.preventDefault();
  //   const data: Candidate = await searchGithub();

  //   setCurrentCandidate(data);
  // };

  return (
    // <h1>CandidateSearch</h1>);
  <>
    <section id='searchSection'>
      <form
        onSubmit={(event: FormEvent) =>
          // test code for user input
          searchForCandidate(event, searchInput)
          // // test code for no user input
          // searchForCandidate(event)
        }
      >
        {/* // test code for user input */}
        <input
          type='text'
          name=''
          id=''
          placeholder='Enter a username'
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button type='submit' id='searchBtn'>
          Search
        </button>
      </form>
    </section>
    <CandidateCard
      currentCandidate={currentCandidate}
      addToPotentialCandidates={addToPotentialCandidates}
      showNextCandidate={showNextCandidate}
    />
  </>
  );
};

export default CandidateSearch;

