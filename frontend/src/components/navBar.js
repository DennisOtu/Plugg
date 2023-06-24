import pluggLogo from '../images/Plugg Logo.png'
import pForPlugg from '../images/P for Plugg.png'
import { Link } from 'react-router-dom'
import axios from "axios"
import { useQuery } from 'react-query'


function NavBar(props) {
    const getCart = () => {
        return axios.get('http://localhost:8000/api/v1/cart')
    }

    const { data, isLoading } = useQuery('cartInfo', getCart)
    
    if (data) {
        console.log(data.data)
    }

    {/*let user = '{{ request.user }}'
      
    function getToken(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            let cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                let cookie = cookies[i].trim();
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }

    let csrftoken = getToken('csrftoken')

    function getCookie(name) {
        // Split cookie string and get all individual name=value pairs in an array
        let cookieArr = document.cookie.split(";");

        // Loop through the array elements
        for(let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            //Removing whitespace at the beginning of the cookie name
            //and compare it with the given string 
            if(name == cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        }
        // Return null if not found
        return null;
    }
    
    let cart = JSON.parse(getCookie('cart'))
    if (cart == undefined){
    cart = {}
    console.log('Cart Created!', cart)
    document.cookie ='cart=' + JSON.stringify(cart) + ";domain=;path=/"
    }

    console.log('Cart:', cart)*/}
    
    return (
    
        <div className="navBar">
            <Link to='/' className="navLeft d-flex flex-row">
                <img className="brandLogo" src={pluggLogo} style={{ marginTop: '8px'}} /> 
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <img style={{height: '14px', marginLeft: '8px', marginTop: '15px'}} src={pForPlugg}/> 
                    <p style={{ fontFamily: 'var(--fontHead)', fontWeight: 'light', letterSpacing: '4px', fontSize: '16px', marginLeft: '4px', marginTop: '10px'}}>LUGG</p>
                </div>
            </Link>
            <div className="navRight">                
                <Link style={{ textDecoration: 'none' }}>Log In</Link>
                
                <Link style={{ textDecoration: 'none' }}>Sign Up</Link>
                
                <Link to={'/cart'} style={{ textDecoration: 'none', marginTop: '14px'}}>
                    { data && <p class="badgeCart" >{ data.data.cartItems }</p> }
                </Link>
            </div>

        </div>
    )
}

export default NavBar
