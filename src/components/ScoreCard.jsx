function ScoreCard({ currentScore }) {
  return (
    <section className="Scorecard">
      <h1>ScoreCard</h1>
      <p>You're currently on {currentScore} in a row!</p>
    </section>
  );
}

export default ScoreCard;
