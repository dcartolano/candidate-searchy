// import type React from 'react';
import { useEffect, useState } from 'react';
import CandidateRow from '../components/CandidateRow';
import Candidate from '../interfaces/Candidate.interface';

const SavedCandidates = () => {
  const [potentialCandidates, setPotentialCandidates] = useState<Candidate[]>([]);

  const rejectCandidate = (
  //   e: React.MouseEvent<SVGSVGElement, MouseEvent>,
  //   currentlyOnWatchList: boolean | null | undefined,
  //   currentlyOnSeenItList: boolean | null | undefined,
  //   title: string | null
  ) => {
    console.log('nice job rejecting da candidate !! that guy REALLY sucks!!!')
  //   e.preventDefault();
  //   if (currentlyOnWatchList) {
  //     let parsedFilmsToWatch: Film[] = [];

  //     const storedFilmsToWatch = localStorage.getItem('filmsToWatch');
  //     if (typeof storedFilmsToWatch === 'string') {
  //       parsedFilmsToWatch = JSON.parse(storedFilmsToWatch);
  //     }
  //     parsedFilmsToWatch = parsedFilmsToWatch.filter(
  //       (film) => film.Title !== title
  //     );
  //     setFilmsToWatch(parsedFilmsToWatch);
  //     localStorage.setItem('filmsToWatch', JSON.stringify(parsedFilmsToWatch));
  //   } else if (currentlyOnSeenItList) {
  //     let parsedAlreadySeenFilms: Film[] = [];
  //     const storedAlreadySeenFilms = localStorage.getItem('alreadySeenFilms');
  //     if (typeof storedAlreadySeenFilms === 'string') {
  //       parsedAlreadySeenFilms = JSON.parse(storedAlreadySeenFilms);
  //     }
  //     parsedAlreadySeenFilms = parsedAlreadySeenFilms.filter(
  //       (film) => film.Title !== title
  //     );
  //     localStorage.setItem(
  //       'alreadySeenFilms',
  //       JSON.stringify(parsedAlreadySeenFilms)
  //     );
  //   }
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
      {(!potentialCandidates?.length || potentialCandidates?.length === 0) ? (
        <h1 style={{ margin: '16px 0' }}>Add candidates to your potential candidates list.</h1>
      ) : potentialCandidates.map((potentialCandidate) => {
        // console.log('potentialCandidates: ', potentialCandidates);
        // console.log('potentialCandidate: ', potentialCandidate);
        <CandidateRow
          key={potentialCandidate.id}
          PotentialCandidate={potentialCandidate}
          RejectCandidate={rejectCandidate}
        />
      })
      }
    </>
  );
};

export default SavedCandidates;
