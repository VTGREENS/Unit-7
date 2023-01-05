// Write a function that will export a single h6 element with a copyright type in the current year
//  Make sure you export it and import it on the App.jsx file

function Footer() {
    const currentYear = new Date().getFullYear();
 
    return(<footer> 
        <h6>Copyright {currentYear}</h6>
    </footer>
    );
}

export default Footer;

