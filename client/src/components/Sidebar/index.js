import React from 'react';
import './style.css';
import Card from '../UI/Card';

/**
 * @author
 * @function Sidebar
 */


 const Sidebar = (props) => {
     return(
         <div className="sidebarcontainer">

    <Card>
        <div className="cardHeader">
        <span> Contact Information </span>
        <h4> Phone: 760-981-3830 </h4>
        <h4> Email: parker.harold.jones@gmail.com</h4>
        <h4> Social Media: @parksibebe </h4>
        </div>
    </Card>

    

    </div>

    
     )
 }

 export default Sidebar; 