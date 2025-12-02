import { useState, useEffect } from 'react'
import Vbar from './assets/components/Vbar'

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const getDigits = (num) => {
    return [Math.floor(num / 10), num % 10];
  };

  const [h1, h2] = getDigits(time.getHours());
  const [m1, m2] = getDigits(time.getMinutes());
  const [s1, s2] = getDigits(time.getSeconds());

  return (
    <>
      <div className="w-screen h-screen overflow-hidden flex items-center justify-center bg-[#1a1a1a] text-white">
        <div className='gap-14 flex scale-110 transform'>
          <div className='gap-6 flex'>
            <Vbar number={3} value={h1}/>
            <Vbar number={10} value={h2}/>
          </div> 
          <div className='gap-6 flex '>
            <Vbar number={6} value={m1}/>
            <Vbar number={10} value={m2}/>
          </div> 
          <div className='gap-6 flex'>
            <Vbar number={6} value={s1}/>
            <Vbar number={10} value={s2}/>
          </div> 
        </div>
      </div>
    </>
  )
}

export default App
