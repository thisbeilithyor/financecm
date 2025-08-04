

const reviews = [
  {
    id: 1,
    name: "Max",
    date: "01.10.2024",
    rating: 5,
    text: `Wir sind überaus zufrieden mit dem Service des Finance Centers beim Kauf einer Immobilie in der Iskele Bahçeler-Region in Nordzypern. Von Anfang an wurden wir professionell und freundlich betreut. Besonders hervorheben möchten wir die informative Tour, die für meine Frau und mich organisiert wurde. Dadurch konnten wir nicht nur die Region besser kennenlernen, sondern auch alle relevanten Informationen rund um den Immobilienkauf erhalten. Der gesamte Prozess verlief reibungslos und transparent. Wir fühlen uns sehr gut beraten und können das Finance Center uneingeschränkt weiterempfehlen!`,
  },
  {
    id: 2,
    name: "Anna",
    date: "23.09.2024",
    rating: 5,
    text: `Finance Center bietet eine hervorragende Betreuung beim Kauf von Immobilien auf Nordzypern. Die Beratung ist professionell, transparent und umfasst alle Aspekte des Kaufs, einschließlich Finanzierungslösungen und rechtlicher Fragen. Sie gehen auf individuelle Bedürfnisse ein und sorgen für einen reibungslosen Ablauf. Dank ihrer lokalen Expertise fühlt man sich gut aufgehoben und kann sicher sein, dass man die beste Entscheidung trifft. Sehr empfehlenswert für Immobilienkäufe auf Nordzypern!`,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="kundenbewertungen-sterne">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "stern-ausgefuellt" : "stern-leer"}>
          ★
        </span>
      ))}
    </div>
  );
};

const Bewertungen = () => {
  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="kundenbewertungen-seite">
      <h1 className="kundenbewertungen-titel">Das sagen unsere Kunden</h1>
      <StarRating rating={averageRating} />
      <p className="kundenbewertungen-durchschnitt">
        Basierend auf {reviews.length} Bewertungen durch unsere Kunden erhalten wir eine Bewertung von <strong>{averageRating.toFixed(2)}</strong> Sternen.
      </p>

      <div className="bewertungen-liste">
        {reviews.map((review) => (
          <div key={review.id} className="bewertung-box">
            <StarRating rating={review.rating} />
            <p className="bewertung-text">{review.text}</p>
            <div className="bewertung-meta">
              {review.name} {review.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bewertungen;