// import type React from 'react';
import { useEffect, useState } from 'react';
import CandidateRow from '../components/CandidateRow';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const rejectCandidate = (
  //   currentlyOnWatchList: boolean | null | undefined,
  candidateLogin: string | null
  ) => {
      let parsedPotentialCandidates: Candidate[] = [];
    const storedPotentialCandidates = localStorage.getItem('savedCandidates');
    if (typeof storedPotentialCandidates === 'string') {
      parsedPotentialCandidates = JSON.parse(storedPotentialCandidates);
    }
    parsedPotentialCandidates = parsedPotentialCandidates.filter(
        (candidate) => candidate.login !== candidateLogin
      );
      setPotentialCandidates(parsedPotentialCandidates);
      localStorage.setItem('savedCandidates', JSON.stringify(parsedPotentialCandidates));
    // } 
  };

  useEffect(() => {
    const parsedPotentialCandidates = JSON.parse(
      localStorage.getItem('savedCandidates') as string
    );
    // console.log('parsedPotentialCandidates: ', parsedPotentialCandidates);
    setPotentialCandidates(parsedPotentialCandidates);
    // console.log('potentialCandidates: ', potentialCandidates); 
    
  }, []);

  return (
    <>
      {/* <h1 className='pageHeader'>Potential Candidates</h1> */}
      { console.log('potentialCandidates: ', potentialCandidates) }
      {(!potentialCandidates?.length || potentialCandidates?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add candidates to your potential candidates list.</h1>
      ) : 
      //  <h2>Candidate should appear here</h2> 
      potentialCandidates.map((potentialCandidate) => 
        (
          // { // curly brackets were the issue for some reason?
        //  <h2>potentialCandidate</h2> 
        <CandidateRow
          key={potentialCandidate.id}
          potentialCandidate={potentialCandidate}
          rejectCandidate={() => rejectCandidate(potentialCandidate.login)}
        />
        // }
      )
    )
      }
    </>
  );
};

export default SavedCandidates;
