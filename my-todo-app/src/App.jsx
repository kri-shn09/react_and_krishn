import { useEffect, useRef,useState } from 'react';
import './App.css';


function App() {
  
    const [increseCount , setIncreaseCount] = useState([0]);

  const inputElement = useRef([]);
  const warning = useRef();
  const checkBox = useRef([]);
  const form = useRef();



    // Function that triggers only for the clicked checkbox
  const handleCheckboxClick = (index) => {
    // Check if any input field is empty
    const isAnyEmpty = inputElement.current.every( (input) => input?.value.trim() !== '');

    if (!isAnyEmpty) {
      // Show warning if any input is empty
      
      warning.current.className = "text-red-600 text-[20px] mt-2 block";
      form.current.classList.add("border-2");
      form.current.classList.add("border-red-500");
    } else {
      // Hide warning
      warning.current.className = "hidden";
      form.current.classList.remove('border-2');
      form.current.classList.remove('border-red-500');
      // Only the clicked checkbox gets green background
      checkBox.current[index].classList.add("bg-green-600");
    }
  };

   const addTask = () =>{
      setIncreaseCount((pre) => [...pre, ''])
   } 

      const resetAll = () =>{
         form.current.reset();
         setIncreaseCount([])
         checkBox.current.forEach(box =>{
          box.classList.remove('bg-green-600')
         })
     }

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className='text-3xl font-bold'>What TO Do Today</h1>

      <div className='main-con w-full px-6 flex justify-center items-center flex-col'>
        <div className="w-full flex items-center justify-start">
          <h1 className='text-3xl font-bold text-gray-900 inline-block'>Today</h1>
          <i className="fas fa-sun text-yellow-400 mx-1 text-3xl"></i>
        </div>

        <div className="w-full flex justify-center items-center mt-8">
          <div className="w-full h-8 rounded-3xl border-2 border-gray-500">
            <div className='w-0 bg-green-600 h-full rounded-3xl'></div>
          </div>
        </div>

        {/* Warning paragraph */}
        <p ref={warning} className='hidden'>Please Fill All the Task</p>

        {/* Task Form */}
        <form className='w-full mt-5 rounded-xl py-2' ref={form}>
          {increseCount.map((_,ind) => (
            <div key={ind} className="w-full flex justify-between items-center mb-3">
              <div className="grn-icon-box">
                <div
                  ref={(el) => checkBox.current[ind] = el}
                  className='w-5 h-5 rounded-full border-2 border-gray-800 cursor-pointer flex justify-center items-center'
                  onClick={() => handleCheckboxClick(ind)}
                >
                  <i className="fas fa-check text-white checkIcon"></i>
                </div>
              </div>
              <input
                ref={(el) => inputElement.current[ind] = el}
                className='w-full pl-3 py-2 outline-0'
                type="text"
                placeholder='Add Your Task Here'
              />
            </div>
             
          ))}

        </form>
        <button onClick={resetAll}
         className=' bg-green-700 text-white font-medium px-5 py-2 rounded mt-5 cursor-pointer text-xl'>
          Reset</button>

          <button 
          onClick={addTask}
           className="px-4 py-2 text-white bg-green-700 rounded mt-2 cursor-pointer font-medium">
            Add Task
            </button>
      </div>
    </div>
  );
}

export default App;
