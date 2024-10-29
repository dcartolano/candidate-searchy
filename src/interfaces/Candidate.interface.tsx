// TODO: Create an interface for the Candidate objects returned by the API
export default interface Candidate {
    readonly name: string | null;
    readonly login: string | null;
    readonly location: string | null;
    readonly avatar_url: string | null;
    readonly email: string | null;
    readonly html_url: string | null;
    readonly company: string | null;
    readonly bio: string | null;
  }
  
// name -> name
// username -> login
// location -> location
// avatar -> avatar_url
// email -> email
// html_url -> html_url
// company ->company
// bio -> bio
