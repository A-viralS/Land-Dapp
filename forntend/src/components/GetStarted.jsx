import styles from "../style"
import { arrowUp } from "../assets"
import { useNavigate } from 'react-router-dom';


const GetStarted = () =>{

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault(); // Prevent page reload
    navigate('/login');
    window.scrollTo(0, 0); // Scroll to top of the page
  };

  return(
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-amber-gradient p-[2px] cursor-pointer`}>
      <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full hover:animate-bounce`} >
        <button onClick={handleClick}>
        <div className={`${styles.flexStart}`}>
          <p className="font-poppins font-medium text-[18px] leading[23px] text-gradient">
            <span className="">
              Get
            </span>
            <img src={arrowUp} alt="Get Started" className="w-[23px] h-[23px] object-contain float-right"/>
          </p>
        </div>
          <p className="font-poppins font-medium text-[18px] leading[23px] text-gradient">
            Started
          </p>
        </button>
      </div>
    </div>
  )
}

export default GetStarted