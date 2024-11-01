// import { useState, useEffect } from 'react';
import { type FormEvent, useState } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
// import { searchGithubUser } from '../api/API';

import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
  avatar_url: null,
  bio: null,
  blog: null,
  company: null,
  created_at: null,
  email: null,
  events_url: null,
  followers: null,
  followers_url: null,
  following: null,
  following_url: null,
  gists_url: null,
  gravatar_id: null,
  hireable: null,
  html_url: null,
  id: null,
  login: null,
  location: null,
  name: null,
  node_id: null,
  organizations_url: null,
  public_gists: null,
  public_repos: null,
  received_events_url: null,
  repos_url: null,
  site_admin: null,
  starred_url: null,
  subscriptions_url: null,
  twitter_username: null,
  type: null,
  updated_at: null,
  url: null,
  user_view_type: null,
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

  const getCandidateData = async (candidate: Candidate) => {
      // console.log('Candidate:', candidate);
      // console.log('candidate.login:', candidate.login);
      const data = await searchGithubUser(candidate.login);
      // console.log(data);
      return data;
    }

  const searchForCandidates = async (event: FormEvent) => {
    event.preventDefault();
    const data = await searchGithub();

    console.log(data);
    setCandidatesArray(data);
    // const candidata = await candidatesArray.map(getCandidateData);
    const candidata = data.map(async(candidate: any) => {
      let candidateReturn = await getCandidateData(candidate);
      console.log(candidateReturn);
      return {...candidateReturn};
    });
    console.log(candidata);
    // console.log(candidata[0].PromiseResult)
    return candidata;
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

