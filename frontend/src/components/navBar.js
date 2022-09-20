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
            <img className="brandLogo" style={{marginLeft: '2rem'}} src={pluggLogo}/> 
            <img style={{height: '15px', marginLeft: '8px'}} src={pForPlugg}/> 
            <Link style={{fontFamily: 'var(--fontHead)', fontWeight: '400', letterSpacing: '4px', fontSize: '16px'}} to='/'>LUGG </Link>
            <div className="navRight">
                <div>
                <Link>LOG IN</Link>
                </div>
                <div>
                <Link>SIGN UP</Link>
                </div>
                <div>
                    <Link to={'/cart'}>
                    { data && <p class="badgeCart" >{ data.data.cartItems }</p> }
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default NavBar
