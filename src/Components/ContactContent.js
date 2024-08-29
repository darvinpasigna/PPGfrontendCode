import '../App.css';
import Logo from '../Images/Logo.png';
import useCode from '../Code/Code';

function ContactContent () {
const { contactContent, biTelephone, biEnvelope, biMessenger, contactInfo, emailInfo, messengerInfo } = useCode();
    return(
        <>
<div className="container contact">
    <div className='row'>
        <div className='col-5'>
        <img src={Logo} alt="logo" />
        </div>
        <div className='contacttopcont col-5'>
        <h3>{contactContent} </h3>
        </div>
    </div>
    <br /><br />
   <div className='row d-flex flex-wrap justify-content-between align-items-center'>
    <div className="col-4">
        {biTelephone}
          <br /><br />
          <br /><br />
          <br />
         {contactInfo}

    </div>
    <div className="col-4">
       {biEnvelope}
          <br /><br />
          <br /><br />
          {emailInfo}
          
    </div>
    <div className="col-4">
       {biMessenger}
          <br /><br />
          {messengerInfo}
    </div>
   </div>
</div>
        </>
    )}
export default ContactContent;