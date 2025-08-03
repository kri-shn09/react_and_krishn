import { useRef } from 'react';
import './App.css';

function App() {
  const inputElement = useRef([]);
  const warning = useRef();
  const checkBox = useRef([]);

  // Function that triggers only for the clicked checkbox
  const handleCheckboxClick = (index) => {
    // Check if any input field is empty
    const isAnyEmpty = inputElement.current.some(
      (input) => input.value.trim() === ''
    );

    if (isAnyEmpty) {
      // Show warning if any input is empty
      warning.current.className = "text-red-600 text-[20px] mt-2 block";
    } else {
      // Hide warning
      warning.current.className = "hidden";
      // Only the clicked checkbox gets green background
      checkBox.current[index].classList.add("bg-green-600");
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <h1 className='text-3xl font-bold'>What TO Do Today</h1>

      <div className='main-con w-full px-6'>
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
        <form className='w-full mt-5 rounded-xl'>
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-full flex justify-between items-center mb-3">
              <div className="grn-icon-box">
                <div
                  ref={(el) => checkBox.current[i] = el}
                  className='w-5 h-5 rounded-full border-2 border-gray-800 cursor-pointer flex justify-center items-center'
                  onClick={() => handleCheckboxClick(i)}
                >
                  <i className="fas fa-check text-white checkIcon"></i>
                </div>
              </div>
              <input
                ref={(el) => inputElement.current[i] = el}
                className='w-full pl-3 py-2 outline-0'
                type="text"
                placeholder='Add Your Task Here'
              />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}

export default App;
