import React from 'react';

function Footer() {
  return (
    <div>
      <form>
        <label htmlFor="fname">Your Name / Company :</label><br />
        <input type="text" id="name" name="name"/><br />
        
        <label htmlFor="lname">Email :</label><br />
        <input type="text" id="name" name="lname" /><br /><br />
        
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Footer;