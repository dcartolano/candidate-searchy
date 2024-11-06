// import type React from 'react';
import { Link } from 'react-router-dom';
import type Candidate from '../interfaces/Candidate.interface';

type CandidateRowProps = {
    potentialCandidate: Candidate;
    rejectCandidate?: (() => void);
    //     | ((
    //         e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    //         currentlyOnWatchList: boolean | null | undefined,
    //         currentlyOnSeenItList: boolean | null | undefined,
    //         title: string | null
    //       ) => void)
    //     | null;
};

const CandidateRow = ({ potentialCandidate, rejectCandidate
}: CandidateRowProps) => {

    console.log('Potential Candidate', potentialCandidate);

    const realName: string | null = potentialCandidate.name === null ? potentialCandidate.login : potentialCandidate.name;

    return (
        <>
            <section className='candidateCard'>
                <figure>
                    <img src={`${potentialCandidate.avatar_url}`} alt={`${potentialCandidate.login}`} />
                </figure>
                <article className='details'>
                    <h2>{`${realName} (${potentialCandidate.login})`}</h2>
                    <p>
                        <strong>Location:</strong> {potentialCandidate.location}
                    </p>
                    {/* email using link tag */}
                    <Link
                        to={`${potentialCandidate.email}`}
                    >
                        <strong>Email:</strong> {potentialCandidate.email}
                    </Link>
                    {/* email using anchor tag */}
                    {/* <a href={`${currentCandidate.email}`}><strong>Email:</strong> {currentCandidate.email}</a> */}
                    <p>
                        <strong>Company:</strong> {potentialCandidate.company}
                    </p>
                </article>
                <article className='bio'>
                    <p>
                        <strong>Bio:</strong> {potentialCandidate.bio}
                    </p>
                </article>
                {/* <button> */}
                <button onClick={rejectCandidate}>
                    -
                </button>
            </section>
        </>
    );
};

export default CandidateRow;

{/* <table>
  <caption>
    Potential Candidates
  </caption>
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Location</th>
      <th scope="col">Email</th>
      <th scope="col">Company</th>
      <th scope="col">Bio</th>
      <th scope="col">Reject</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><img src={`${potentialCandidate.avatar_url}`} alt={`${potentialCandidate.login}`} /></th>
      <td>${potentialCandidate.login}</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
  </tbody>
</table> */}