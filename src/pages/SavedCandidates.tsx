import { useEffect, useState } from 'react';
import CandidateRow from '../components/CandidateRow';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const rejectCandidate = (
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
      {/* {console.log('potentialCandidates: ', potentialCandidates)} */}
      <h2>Potential Candidates</h2> 
      {(!potentialCandidates?.length || potentialCandidates?.length === 0) ? (
        <h2>Add candidates to your potential candidates list.</h2>
      ) : (
        potentialCandidates.map((potentialCandidate) =>
          <CandidateRow
            key={potentialCandidate.id}
            potentialCandidate={potentialCandidate}
            rejectCandidate={() => rejectCandidate(potentialCandidate.login)}
          />
        )
      )}
    </>
  );
};

export default SavedCandidates;
