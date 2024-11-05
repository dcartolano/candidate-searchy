import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import Candidate from '../interfaces/Candidate.interface';
import InitialCandidate from '../interfaces/InitialCandidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  let [candidates, setCandidates] = useState<InitialCandidate[]>([]);
  let [candidateCount, setCandidateCount] = useState<number>(0);
  let currentCandidate: InitialCandidate = candidates[candidateCount];
  let [currentCandidateData, setCurrentCandidateData] = useState<Candidate>({
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
    login: '',
    location: null,
    name: '',
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
  
  useEffect(() => {
    if (candidates.length === 0) {
      getCandidates();
    }
    currentCandidate = candidates[candidateCount];
    getCurrentCandidateData(currentCandidate);
  }, [candidates, candidateCount]);

  const getCandidates = async () => {
    const candidatesArray = await searchGithub();
    // console.log('candidatesArray: ', candidatesArray);
    setCandidates(candidatesArray);
  }

  const getCurrentCandidateData = async (candidate: any) => {
    // console.log('Candidate:', candidate);
    // console.log('candidate.login:', candidate.login);
    const data = await searchGithubUser(candidate.login);
    // console.log('getCurrentCandidateData "data": ', data);
    setCurrentCandidateData(data);
  }

  const showNextCandidate = () => {
    setCandidateCount(++candidateCount);
  };

  const addToPotentialCandidates = () => {
    let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates.push(currentCandidateData);
    localStorage.setItem('savedCandidates', JSON.stringify(parsedPotentialCandidates));
    setCandidateCount(++candidateCount);
  };

  // console.log('candidate count', candidateCount);

  return (
    <>
    {candidateCount < candidates.length ? (
      <CandidateCard
        currentCandidate={currentCandidateData}
        showNextCandidate={showNextCandidate}
        addToPotentialCandidates={addToPotentialCandidates}
      />
    ) : (
      <h3>no more candidates to display!</h3>
    )
  }
    </>
  );
};

export default CandidateSearch;