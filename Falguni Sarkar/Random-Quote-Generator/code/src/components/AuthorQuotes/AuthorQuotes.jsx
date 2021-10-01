import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "./../RandomQuote/RandomQuote";
import { useAxios } from "use-axios-client";
import Quotes from "./../Quotes/Quotes";
import "./AuthorQuotes.css";

function LoadingFunc() {
  return (
    <div className="loading-class d-flex justify-content-center">
      <div className="spinner-grow text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-secondary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-success" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-danger" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-warning" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <div className="spinner-grow text-dark" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default function AuthorQuotes(props) {
  let qAuth = props.author;
  let [quotesArr, setQuotesArr] = useState([]);
  let quotesArrCom = [];

  useEffect(() => {
    axios
      .get(`${baseURL}/?author=${qAuth}`)
      .then((response) => setQuotesArr(response.data.data));
  }, [qAuth]);

  const { data, loading } = useAxios({
    url: `${baseURL}/?author=${qAuth}`
  });

  if (loading || !data) return <LoadingFunc />;

  for (let i = 0; i < quotesArr.length; i++) {
    quotesArrCom.push({ id: i + 1, Quote: quotesArr[i].quoteText });
  }
  const qAC = quotesArrCom.map((q) => (
    <Quotes key={q.id} quoteText={q.Quote} />
  ));

  return (
    <>
      <div className="auth-div">{qAuth}</div>
      <div>{qAC}</div>
    </>
  );
}
