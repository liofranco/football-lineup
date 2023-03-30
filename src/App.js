import './App.css';
import Settings from './components/Settings/Settings';
import TeamProvider from './context/TeamContext';
import Field from './components/Field/Field';
import DesignProvider from './context/DesignContext';
import { useRef } from 'react';
//import domtoimage from 'dom-to-image';
import html2canvas  from 'html2canvas';

function App() {

  const ref = useRef(null)

  const downloadScreenshot = () => {
    html2canvas(ref.current, {
      scale: 3, width: 400, height: 562
    }).then(function (canvas) {
      const image = canvas.toDataURL('image/jpeg');
      let link = document.createElement('a');
      link.setAttribute('href', image);
      link.setAttribute('download', 'equipo.jpeg');
      link.click();
      link.remove();
    });
  }

  const share = async() => {
    if (!('share' in navigator)) {
      return;
    }
    // `element` is the HTML element you want to share.
    // `backgroundColor` is the desired background color.
    const canvas = await html2canvas(ref.current, {
      scale: 3, width: 400, height: 562
    });
    canvas.toBlob(async (blob) => {
      // Even if you want to share just one file you need to 
      // send them as an array of files.
      const files = [new File([blob], 'image.png', { type: blob.type })];
      const shareData = {
        text: '#FutXI',
        title: 'Mi equipo',
        files,
      };
      if (navigator.canShare(shareData)) {
        try {
          await navigator.share(shareData);
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.error(err.name, err.message);
          }
        }
      } else {
        console.warn('Sharing not supported', shareData);          
      }
    });
  };

  return (
    <main>
      <TeamProvider>
        <DesignProvider>
          <div className='main-container'>
            <Settings />
            <div ref={ref} style={{ maxWidth: '400px' }}>
              <Field />
            </div>
            <button style={{padding: '10px'}} onClick={downloadScreenshot}>Download screenshot</button>
            <button style={{padding: '10px'}} onClick={share}>Compartir</button>
          </div>
        </DesignProvider>
      </TeamProvider>
    </main>
  );
}

export default App;
