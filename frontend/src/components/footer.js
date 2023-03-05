import pluggLogo from '../images/Plugg Logo.png'
import pForPlugg from '../images/P for Plugg.png'
import { Link } from 'react-router-dom'
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'*/

const Footer = () => {

    return (
        <div style={{
            height: '50vh', background: 'var(--pluggBlack)',
            color: 'white', paddingTop: '4em', paddingInline: '4em',
            display: 'flex', flex: 'row', justifyContent: 'space-between'
        }}>
            <div className="d-flex flex-column col-lg-3">
                <Link to='/' className="d-flex flex-row" style={{ textDecoration: 'none'}}>
                    <img className="brandLogo" src={pluggLogo} style={{ marginTop: '8px'}} /> 
                    <div style={{ display: 'flex', flexDirection: 'row'}}>
                        <img style={{height: '14px', marginLeft: '8px', marginTop: '15px'}} src={pForPlugg}/> 
                        <p style={{ fontFamily: 'var(--fontHead)', fontWeight: 'medium', letterSpacing: '4px', fontSize: '16px', marginLeft: '4px', marginTop: '10px'}}>LUGG</p>
                    </div>
                </Link>            
                <p style={{fontSize: '14px', marginTop: '2em', color: 'rgba(255, 255, 255, 0.7)'}}>Praesent tincidunt posuere dolor, nec bibendum tellus suscipit a.
                    Nullam pellentesque felis id porttitor scelerisque.
                </p>
            </div>
            <div>
                <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Discover</p>
                <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Services</p>
                    <p>Contact</p>
                </div>

            </div>
            <div>
                <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>About</p>
                <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                    <p>Clients</p>
                    <p>Teams</p>
                    <p>Career</p>
                </div>
            </div>
            <div>
                <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Help</p>
                <div style={{marginTop: '3em', fontSize: '12px', color: 'rgba(255, 255, 255, 0.7)'}}>
                    <p>Privacy Policy</p>
                    <p>Terms And Conditions</p>
                    <p>Partners</p>
                </div>
            </div>
            <div>
                <p style={{ fontFamily: 'var(--fontInfo)', fontSize: '14px' }}>Follow Us</p>
                {/*
                    <div style={{marginTop: '2em'}}>
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                        <FontAwesomeIcon icon={['fab', 'instagram']} style={{ marginInline: '1em'}}/>
                        <FontAwesomeIcon icon={['fab', 'facebook']}  />
                    </div>
                */}

            </div>
        </div>
  
    )
  }
  
export default Footer
  
