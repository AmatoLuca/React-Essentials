import Header from './components/Header/Header';
import Examples from './components/Example/Examples';
import CoreConcepts from './components/CoreConcept/CoreConcepts';

function App() {
  return (
    <>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
