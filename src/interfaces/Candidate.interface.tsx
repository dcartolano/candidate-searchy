// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
  readonly avatar_url: string | null;
  readonly bio: string | null;
  readonly blog: string | null;
  readonly company: string | null;
  readonly created_at: string | null;
  readonly email: string | null;
  readonly events_url: string | null;
  readonly followers: number | null;
  readonly followers_url: string | null;
  readonly following: number | null;
  readonly following_url: string | null;
  readonly gists_url: string | null;
  readonly gravatar_id: string | null;
  readonly hireable: string | null;
  readonly html_url: string | null;
  readonly id: number | null;
  readonly login: string | null ;
  readonly location: string | null;
  readonly name: string | null ;
  readonly node_id: string | null;
  readonly organizations_url: string | null;
  readonly public_gists: number | null;
  readonly public_repos: number | null;
  readonly received_events_url: string | null;
  readonly repos_url: string | null;
  readonly site_admin: boolean | null;
  readonly starred_url: string | null;
  readonly subscriptions_url: string | null;
  readonly twitter_username: string | null;
  readonly type: string | null;
  readonly updated_at: string | null;
  readonly url: string | null;
  readonly user_view_type: string | null;
}

// name -> name
// username -> login
// location -> location
// avatar -> avatar_url
// email -> email
// html_url -> html_url
// company ->company
// bio -> bio

