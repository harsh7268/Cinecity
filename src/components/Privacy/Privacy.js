import React,{useEffect} from 'react';
import './Privacy.css'

export default function Privacy(props) {
    const {title,footer} = props;
    useEffect(() =>{
      footer(true);
      window.scrollTo(0, 0);
    },[])
  return (
    <div className='privacy'>
      <h1>{title}</h1>

     <div className="privacyBox">
    <p>This {title} explains our practices, including your choices, regarding the collection, use, and disclosure of certain information, including your personal information in connection with the Cinecity service.</p>
     </div>

     <div className="privacyBox">
         <h3>contacting us</h3>
         <p>
If you have general questions about your account or how to contact customer service for assistance, please visit our online help center at help.Cinecity.com. For questions specifically about this Privacy Statement, or our use of your personal information, cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by email at Cinecity@gmail.com.
<br/><br/>
The data controller of your personal information is Cinecity Entertainment Services India LLP. Please note that if you contact us to assist you, for your safety and ours we may need to authenticate your identity before fulfilling your request.
</p>
         
     </div>

     <div className="privacyBox" >
         <h3>Collection of Information</h3>
         <p>We receive and store information about you such as:</p>
         <ul className='privacyData'>
             <li>
                 <span><b>Information you provide to us:</b> We collect information you provide to us which includes:</span>
                 <ul  className='listItem'>
                     <li>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</li>
                     <li>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.</li>
                 </ul>
             </li>
      
             <li>
                 <span><b>Information you provide to us:</b> We collect information you provide to us which includes:</span>
                 <ul   className='listItem'>
                     <li>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</li>
                     <li>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.</li>
                 </ul>
             </li>
        
             <li>
                 <span><b>Information you provide to us:</b> We collect information you provide to us which includes:</span>
                 <ul   className='listItem'>
                     <li>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</li>
                     <li>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.</li>
                 </ul>
             </li>

             <li>
                 <span><b>Information you provide to us:</b> We collect information you provide to us which includes:</span>
                 <ul   className='listItem'>
                     <li>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</li>
                     <li>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.</li>
                 </ul>
             </li>
         </ul>
     </div>

     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>
     <div className="privacyBox">
         
     </div>

      
    </div>
  )
}