import './App.css';
import Paragraph from './components/paragraph';
import QrImage from './components/QrImage';
import Title from './components/title';

function App() {
  return (
    // I've tried to use as much tailwind as possible
    <div className="w-[315px] bg-white rounded-[15px] p-[18px] pb-[45px]"> 
      <QrImage />
      <Title />
      <Paragraph />
    </div>
  )
}

export default App
