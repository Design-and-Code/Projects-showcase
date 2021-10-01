import "./Quotes.css";
export default function Quotes(props) {
  return (
    <div className="q-parent">
      <div className="quote-div">
        <q>{props.quoteText}</q>
      </div>
    </div>
  );
}
