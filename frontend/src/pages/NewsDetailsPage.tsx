import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NewsDetails from "../components/NewsDetails";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchNewsById } from "../store/actions/newsActions";

function NewsDetailPage() {
  const params = useParams<'id'>();
  const dispatch = useAppDispatch();
  const { error, loading, news } = useAppSelector(state => state.newsDetails);

  useEffect(() => {
    dispatch(fetchNewsById(params.id!));

  }, [dispatch, params.id]);

  return (
    <>
      <Header />
      {error && <p>{error}</p>}
      {loading && <p>Loading...</p>}
      <NewsDetails news={news} />
      <Footer />
    </>
  );
}

export default NewsDetailPage;
