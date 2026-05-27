import star from "../../public/images/icon-star.svg";
export default function FiveStar() {
    return (
        <div className="flex items-center" aria-label="Rated 5 out of 5 stars">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
        </div>
    )
}