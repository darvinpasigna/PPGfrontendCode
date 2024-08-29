import '../App.css';
import Logo from '../Images/Logo.png';
import useCode from '../Code/Code';


function Aboutcontent () {
    const { aboutIframe, aboutContent } = useCode();
     
    return(
        <>
        <br />
       <div id='aboutcont' className='container'>
       <div className='row'>
            <div className='map col-8'>
                {aboutIframe}
            <p style={{color: "black"}}>123 Example Street City, State, ZIP Code Country <br />
            Customer Support: (123) 456-7890 <br />
            Sales Inquiries: (123) 456-7891
            <br />Cellphone Number<br />09757367195
            </p>
            </div>
            <div className='aboutintro col-4'>
                <img src={Logo} alt="logo" style={{maxWidth: "100px"}}/>
                <p>{aboutContent}</p>
                <button 
                className='btn btn-primary'
                type='button'
                  data-bs-toggle="modal"
                  data-bs-target="#signup"
                >REGISTER NOW</button>
            </div>
        </div>
       </div>
      
        </>
    )}
export default Aboutcontent;