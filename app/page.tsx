import Picks from './componets/Picks';
import Landing from './componets/Landing';
import Header from './componets/Header';

export default function Home() {
  return (
    <><Header />
    <div className="md:grid md:grid-flow-col">
    <Landing />
    <Picks />
    </div>
    </>
  );
}
