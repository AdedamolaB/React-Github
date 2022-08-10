import { useState, useEffect } from "react";
import "./Home.css";
import axios from "../../../axios";
import User from "../../ui/User";
const Home = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total_user, setTotal] = useState(-1);

  const handleQueryInput = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  // return to previous page during pagination
  const handlePrevPage = () => {
    setPage((page) => {
      if (page === 1) return page;
      else return page - 1;
    });
  };

  //  navigate to next page during pagination
  const handleNextPage = () => {
    setPage((page) => page + 1);
  };

  const handlePageLimit = (e) => {
    const value = e.target.value;
    setLimit(parseInt(value));
  };
  // users fetched asynchronously from API with pagination limit specified
  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/search/users?q=" + query, {
        params: {
          page,
          per_page: limit,
        },
      });

      // set item to be array index 0 and total count to array index 1
      return [data?.items, data?.total_count];
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const handleSearchUsers = async (e) => {
    e.preventDefault();
    if (query) {
      const items = await fetchUsers();
      setUsers(items[0]);
      setTotal(items[1]);
    } else {
      console.log("Your query is empty...");
    }
  };

  useEffect(() => {
    const displayUsersOnChange = async () => {
      if (query) {
        const items = await fetchUsers();
        setUsers(items[0]);
      }
    };
    displayUsersOnChange();
  }, [page, limit]);

  return (
    <div className="container">
      <div className="search-form">
        <h2 data-testid="header-label">GitHub User Search</h2>
        <form>
          <input
            value={query}
            onChange={handleQueryInput}
            type="text"
            data-testid="usersearch-input"
            placeholder="Type github username or name to search"
          />
          <button data-testid="usersearch-button" onClick={handleSearchUsers}>
            Search
          </button>
        </form>
      </div>
      <div className="search-results">
        <div className="more-options">
          <label>
            <small>Per Page</small>
            <select onChange={handlePageLimit}>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </label>
          <div className="pagination">
            <button onClick={handlePrevPage}>{page}</button>
            <button onClick={handleNextPage}>{page + 1}</button>
          </div>
        </div>
        {total_user > 0 ? (
          users.map((user) => {
            return <User user={user} key={user.id} />;
          })
        ) : (
          // error message if user deos not exist
          // if user count is  > 0, fetch user. if user count is < 0 return error message
          <h2>
            {total_user !== -1 ? "No User Matches the username specified" : " "}
          </h2>
        )}
      </div>
    </div>
  );
};

export default Home;
