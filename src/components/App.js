import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoremData } from "./redux/actions/loremActions";

const App = () => {
  const dispatch = useDispatch();
  const { loading, data } = useSelector(state => state.lorem);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <h1>A short Naration of Lorem Ipsum</h1>

      {loading && <h4>Loading...</h4>}

      {!loading && data?.title && (
        <ul>
          <li>
            <h4>{data.title}</h4>
            <p>{data.body}</p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default App;

