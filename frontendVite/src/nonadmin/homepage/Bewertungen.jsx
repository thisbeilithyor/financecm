import { useTranslation } from "react-i18next";

const reviews = [
  {
    id: 1,
    name: "Max",
    date: "01.10.2024",
    rating: 5,
    textKey: "homepage.bewertungen.rating1",
  },
  {
    id: 2,
    name: "Anna",
    date: "23.09.2024",
    rating: 5,
    textKey: "homepage.bewertungen.rating2",
  },
];

const StarRating = ({ rating }) => {

  return (
    <div className="text-[2rem] text-[#004242]">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={i <= rating ? "text-[#004242]" : "text-[#ccc]"}>
          ★
        </span>
      ))}
    </div>
  );
};

const Bewertungen = () => {

  const { t, i18n } = useTranslation();

  const averageRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="bg-[#f1f1f1] pb-10 pt-5">
      <center><h1 className="text-[#093B3F] font-bold text-4xl pb-10 max-md:text-xl max-md:pl-1 max-md:pr-1">{t("homepage.bewertungen.headline")}</h1></center>
      <center><StarRating rating={averageRating} /></center>
      <center><p className="text-black">
        {t("homepage.bewertungen.basedp1")} {reviews.length} {t("homepage.bewertungen.basedp2")} <strong>{averageRating.toFixed(2)}</strong> {t("homepage.bewertungen.basedp3")}
      </p></center>

      <div className="flex gap-x-5 m-auto w-[80vw] mt-10">
        {reviews.map((review) => (
          <div key={review.id} className="w-[33%]">
            <StarRating rating={review.rating} />
            <p className="text-justify">{t(review.textKey)}</p>
            <div className="font-bold mt-2">
              {review.name} {review.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bewertungen;