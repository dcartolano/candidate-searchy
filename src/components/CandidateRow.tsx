// import type React from 'react';
import { Link } from "react-router-dom";
import type Candidate from '../interfaces/Candidate.interface';

type CandidateRowProps = {
    PotentialCandidate: Candidate;
      RejectCandidate?: (() => void);
    //     | ((
    //         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    //         currentlyOnWatchList: boolean | null | undefined,
    //         currentlyOnSeenItList: boolean | null | undefined,
    //         title: string | null
    //       ) => void)
    //     | null;
};

const CandidateRow = ({ PotentialCandidate
     , RejectCandidate
}: CandidateRowProps) => {

console.log(PotentialCandidate);

    return (
        <>
            <section className='candidateCard'>
                <figure>
                    <img src={`${PotentialCandidate.avatar_url}`} alt={`${PotentialCandidate.login}`} />
                </figure>
                <article className='details'>
                    <h2>{`${PotentialCandidate.name} ${PotentialCandidate.login}`}</h2>
                    <p>
                        <strong>Location:</strong> {PotentialCandidate.location}
                    </p>
                    {/* email using link tag */}
                    <Link
                        to={`${PotentialCandidate.email}`}
                    >
                        <strong>Email:</strong> {PotentialCandidate.email}
                    </Link>
                    {/* email using anchor tag */}
                    {/* <a href={`${currentCandidate.email}`}><strong>Email:</strong> {currentCandidate.email}</a> */}
                    <p>
                        <strong>Company:</strong> {PotentialCandidate.company}
                    </p>
                </article>
                <article className='bio'>
                    <p>
                        <strong>Bio:</strong> {PotentialCandidate.bio}
                    </p>
                </article>
                {/* <button> */}
                <button onClick={RejectCandidate}>
                    -
                </button>
            </section>
        </>
    );
};

export default CandidateRow;
