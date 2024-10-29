// import type React from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { Link } from 'react-router-dom';

type CandidateCardProps = {
    currentCandidate: Candidate;
    showNextCandidate?: (() => void) | null;
    addToPotentialCandidates?: (() => void) | null;
    onPotentialCandidates?: boolean | null;
    //   removeFromStorage?:
    //     | ((
    //         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    //         currentlyOnWatchList: boolean | null | undefined,
    //         currentlyOnSeenItList: boolean | null | undefined,
    //         title: string | null
    //       ) => void)
    //     | null;
};

const CandidateCard = ({
    currentCandidate,
    // showNextCandidate,
    // addToPotentialCandidates,
    // onPotentialCandidates,
    // removeFromStorage,
}: CandidateCardProps) => {
    return (
        <>
            {currentCandidate?.name ? (
                <section className='candidateCard'>
                    <figure>
                        <img src={`${currentCandidate.avatar_url}`} alt={`${currentCandidate.login}`} />
                    </figure>
                    <article className='details'>
                        <h2>{`${currentCandidate.name} ${currentCandidate.login}`}</h2>
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
                    <button>
                        +
                    </button>
                    <button>
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
