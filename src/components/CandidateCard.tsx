// import type React from 'react';
import { Link } from 'react-router-dom';
import type Candidate from '../interfaces/Candidate.interface';

type CandidateCardProps = {
    currentCandidate: Candidate;
    showNextCandidate?: (() => void);
    addToPotentialCandidates?: (() => void);
    // onPotentialCandidates?: boolean | null;
    //   removeFromStorage?:
    //     | ((
    //         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    //         currentlyOnWatchList: boolean | null | undefined,
    //         currentlyOnSeenItList: boolean | null | undefined,
    //         title: string | null
    //       ) => void)
    //     | null;
};

const CandidateCard = ({ currentCandidate, showNextCandidate, addToPotentialCandidates
    // , onPotentialCandidates, removeFromStorage
}: CandidateCardProps) => {

// console.log(currentCandidate);

const realName: string | null = currentCandidate.name === null ? currentCandidate.login : currentCandidate.name;

    return (
        <>
            {currentCandidate ? (
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />
                    </figure>
                    <article className='details'>
                        <h2>{`${realName} (${currentCandidate.login})`}</h2>
                        <p>
                            <strong>Location:</strong> {currentCandidate.location}
                        </p>
                        {/* email using link tag */}
                        <Link
                            to={`${currentCandidate.email}`}
                        >
                            <strong>Email:</strong> {currentCandidate.email}
                        </Link>
                        {/* email using anchor tag */}
                        {/* <a href={`${currentCandidate.email}`}><strong>Email:</strong> {currentCandidate.email}</a> */}
                        <p>
                            <strong>Company:</strong> {currentCandidate.company}
                        </p>
                    </article>
                    <article className='bio'>
                        <p>
                            <strong>Bio:</strong> {currentCandidate.bio}
                        </p>
                    </article>
                    <button onClick={addToPotentialCandidates}>
                        +
                    </button>
                    <button onClick={showNextCandidate}>
                        -
                    </button>
                </section>
            )
                : (
                    <h1 style={{ margin: '16px 0' }}>Please search for a candidate.</h1>
                )}
        </>
    );
};

export default CandidateCard;
