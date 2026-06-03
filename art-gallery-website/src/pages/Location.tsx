import MapHeader from "../layouts/MapHeader";
import MapMain from "../layouts/MapMain";
import MapFooter from "../layouts/MapFooter";
export default function Location() {
  return (
    <div className="min-h-dvh">
      <MapHeader />
      <MapMain />
      <MapFooter />
    </div>
  );
}