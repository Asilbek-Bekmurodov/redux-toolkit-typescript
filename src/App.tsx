import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchUsers } from "./store/reducers/actionCreators";
import PostContainer from "./components/postContainer";

function App() {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector(
  //   (state) => state.userReducer
  // );

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, []);
  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error}</div>;

  return (
    <div className="App">
      <PostContainer />
    </div>
  );
}

export default App;
