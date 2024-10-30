// import { useState, useEffect } from 'react';
import { type FormEvent, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
// import { searchGithubUser } from '../api/API';

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

  let [candidatesArray, setCandidatesArray] = useState<[]>([]);
  // let [candidatesData, setCandidatesData] = useState<[]>([]);

  const addToPotentialCandidates = () => {
    // let parsedPotentialCandidates: Candidate[] = [];
    // const storedPotentialCandidates = localStorage.getItem('filmsToWatch');
    // if (typeof storedPotentialCandidates === 'string') {
    //   parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    // }
    // parsedPotentialCandidates.push(currentCandidate);
    // localStorage.setItem('filmsToWatch', JSON.stringify(parsedPotentialCandidates));
  };

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

  const searchForCandidates = async (event: FormEvent) => {
    event.preventDefault();
    const data = await searchGithub();

    console.log(data);
    setCandidatesArray(data);
    const candidata = await candidatesArray.map(getCandidateData);
    console.log(candidata[0]);
    // console.log(candidata[0].PromiseResult)
    return candidata;
  }

  const getCandidateData =  (candidate: Candidate) => {
    console.log('hello');
    console.log('Candidate:', candidate);
    const data =  searchGithubUser(candidate.login);
    console.log(data);
    return data;
    // return await searchGithubUser(candidate.login);
  }

  return (
    // <h1>CandidateSearch</h1>);
    <>
      <section id='searchSection'>
        <form
          onSubmit={(event: FormEvent) => {
            searchForCandidates(event);
          }}
        >
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

