import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

import Candidate from '../interfaces/Candidate.interface';
import CandidateCard from '../components/CandidateCard';

const CandidateSearch = () => {

  let [candidates, setCandidates] = useState<Candidate[]>([]);
  let [candidateCount, setCandidateCount] = useState<number>(0);
  let currentCandidate: Candidate = candidates[candidateCount];
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
    // let parsedPotentialCandidates: Candidate[] = [];
    // const storedPotentialCandidates = localStorage.getItem('filmsToWatch');
    // if (typeof storedPotentialCandidates === 'string') {
    //   parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    // }
    // parsedPotentialCandidates.push(currentCandidate);
    // localStorage.setItem('filmsToWatch', JSON.stringify(parsedPotentialCandidates));
  };

  // console.log('candidate count', candidateCount);

  return (
    <>
      <CandidateCard
        currentCandidate={currentCandidateData}
        showNextCandidate={showNextCandidate}
        // addToPotentialCandidates={addToPotentialCandidates}
      />
    </>
  );
};

export default CandidateSearch;











{/* <section id='searchSection'>
<form
  onSubmit={(event: FormEvent) => {
    searchForCandidates(event);
  }}
>
  <button type='submit' id='searchBtn'>
    Search
  </button>
</form>
</section> */}

// const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
//   avatar_url: null,
//   bio: null,
//   blog: null,
//   company: null,
//   created_at: null,
//   email: null,
//   events_url: null,
//   followers: null,
//   followers_url: null,
//   following: null,
//   following_url: null,
//   gists_url: null,
//   gravatar_id: null,
//   hireable: null,
//   html_url: null,
//   id: null,
//   login: null,
//   location: null,
//   name: null,
//   node_id: null,
//   organizations_url: null,
//   public_gists: null,
//   public_repos: null,
//   received_events_url: null,
//   repos_url: null,
//   site_admin: null,
//   starred_url: null,
//   subscriptions_url: null,
//   twitter_username: null,
//   type: null,
//   updated_at: null,
//   url: null,
//   user_view_type: null,
// });

// // this is the one I was trying to use to do it all at once w/ the map function
// const anotherFunction = async (bingo: any) => {
//   // const candidata = await candidatesArray.map(getCandidateData);
//   const candidata = bingo.map(async (candidate: any) => {
//     let candidateReturn = await getCurrentCandidateData(candidate);
//     console.log(candidateReturn);
//     return { ...candidateReturn };
//   });
//   console.log(candidata);
//   // console.log(candidata[0].PromiseResult)
//   return candidata;
// }