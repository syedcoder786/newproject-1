import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Routes from './routes/Routes'
import { loadUser } from "./actions/authActions"

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  },[dispatch])

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}

export default App;
