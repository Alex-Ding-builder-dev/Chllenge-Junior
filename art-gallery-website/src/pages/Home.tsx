import HomeHeader from '../layouts/HomeHeader';
import HomeMain from '../layouts/HomeMain';
import HomeFooter from '../layouts/HomeFooter';
export default function Home() {
  return (
    <div className="min-h-dvh">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}