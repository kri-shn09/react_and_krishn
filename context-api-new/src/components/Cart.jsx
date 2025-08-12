import '../App.css'
import Button from './Button'
import { useTheme } from '../createContext/UserContext'

function Cart() {

    const {themeMode} = useTheme()

  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div
        
         className={`w-1/3 rounded-xl border-gray-500 border-2 px-4 py-8 main-con
             ${themeMode ? "bg-black" : "bg-white"}
         `}>

        <Button />

        <div
         className="content-con flex justify-center items-center mt-20 
          border-4 border-gray-500 px-2 py-4 rounded-xl">

            <div className='img-con flex justify-center items-center flex-col'>
                <img className='w-full '
                 src="https://media.gettyimages.com/id/1272217275/photo/portrait-of-young-boy-at-home.jpg?s=612x612&w=0&k=20&c=xcjp-bTN9AYs-CgOjdIyT0tZtKPAyvH2eCUzEtdOkDc=" alt="boy img" />
               
                <h2
                className='font-medium text-xl mt-5' 
                >Name : Krish <br /> Resident - Us < br/> Age - 16 Years</h2>
            </div>

         </div>

        </div>
        
    </div>
  )
}

export default Cart