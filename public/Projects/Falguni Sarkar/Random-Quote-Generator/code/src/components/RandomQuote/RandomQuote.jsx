import "./RandomQuote.css";
import axios from "axios";
import Quotes from "../Quotes/Quotes";
import AuthorQuotes from "./../AuthorQuotes/AuthorQuotes";
import Footer from "./../Footer/Footer";
import { useEffect, useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const baseURL = "https://quote-garden.herokuapp.com/api/v3/quotes";

function RandomQuote() {
	const [quote, setQuote] = useState("");

	useEffect(() => {
		axios.get(`${baseURL}/random`).then((response) => {
			setQuote(response.data.data[0]);
		});
	}, []);

	const handleClick = useCallback(() => {
		// handle the click event
		axios.get(`${baseURL}/random`).then((response) => {
			setQuote(response.data.data[0]);
		});
	}, []);

	return (
		<>
			<Router>
				<div className="ran-btn-div">
					<Link style={{ textDecoration: "none" }} to="/">
						<button className="ran-btn" onClick={handleClick}>
							random&nbsp;
							<i className="material-icons autorenew">
								autorenew
							</i>
						</button>
					</Link>
				</div>
				<div className="RandomQuote">
					<Switch>
						<Route exact path="/">
							<Quotes quoteText={quote.quoteText} />
							<Link
								className="auth-link"
								style={{ textDecoration: "none" }}
								to={"/" + quote.quoteAuthor}
							>
								<div className="parent-details">
									<div className="details-div">
										<p className="auth-link-p">
											{quote.quoteAuthor}
										</p>
										<p className="genre-p">
											{quote.quoteGenre}
										</p>
									</div>
									<span className="material-icons chevron_right">
										chevron_right
									</span>
								</div>
							</Link>
						</Route>
						<Route exact path={"/" + quote.quoteAuthor}>
							<AuthorQuotes author={quote.quoteAuthor} />
						</Route>
					</Switch>
				</div>
			</Router>
			<Footer />
		</>
	);
}

export default RandomQuote;
export { baseURL };
