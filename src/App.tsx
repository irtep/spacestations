import Menu from './components/Menu.tsx';
import CelestialCanvas from './components/CelestialCanvas.tsx';
import { useSMContext } from './context/smContext.tsx';

function App() {
  const { view } = useSMContext();
  return (
    <>
      <div>
        {
          (view === 'menu')
          ? <Menu/>
          : <></>
        }
        {
          (view === 'play') 
          ? <CelestialCanvas/>
          : <></>
        }
        {
          (view === 'after')
          ? <>menu</>
          : <></>
        }
      </div>
    </>
  )
}

export default App
