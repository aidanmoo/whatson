import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import UsersMovies from "./UsersMovies";

export default function UserProfile() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection(
    "watchList",
    ["uid", "==", user.uid],
    ["createdAt", "desc"]
  );
  return (
    <div>
      {error && <p>{error}</p>}
      {documents && <h2>Your Watch List:</h2>}
      {documents && <UsersMovies movies={documents} />}
    </div>
  );
}
