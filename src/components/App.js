import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "../actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div>
      <h1>Lorem Ipsum Dolor Sit Amet</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && (
        <ul>
          <li>
            <h4 className="title">{data.title}</h4>
            <p className="body">{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;
