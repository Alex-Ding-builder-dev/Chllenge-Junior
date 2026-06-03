import mapMobile from "../../public/mobile/image-map@2x.png";
import mapTablet from "../../public/tablet/image-map@2x.png";
import mapDesktop from "../../public/desktop/image-map@2x.png";
import Button from "../components/Button";
export default function MapHeader() {
  return (
    <header className="relative h-[clamp(34.375rem,_calc(12.7226vw_+_31.3931rem),_37.5rem)]">
        <picture className="absolute inset-0">
            <source srcSet={mapDesktop} media="(min-width: 1440px)" />
            <source srcSet={mapTablet} media="(min-width: 768px)" />
            <img className="object-cover h-full w-full" src={mapMobile} alt="Map Image" />
        </picture>
        <div className="w-full h-full relative center map-header-shell max-w-[90rem]">
            <Button position="location" />
        </div>
    </header>
  );
}