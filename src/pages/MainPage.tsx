import { useEffect } from "react";
import { useAppDispatch } from "../hook/redux";
import { fetchNews } from '../store/actions/newsActions';

function MainPage() {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNews());
  }, [])

  return (
    <div>main page</div>
   );
}

export default MainPage;
