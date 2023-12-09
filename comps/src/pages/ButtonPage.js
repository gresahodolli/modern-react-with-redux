import Button from '../components/Button';
import { GoBell, GoDatabase } from 'react-icons/go'
import { className } from 'classnames';

function ButtonPage() {
    const handleClick = () => {
        
    };

    return (
        <div>
            <div>
                <Button secondary outline rounded className="mb-5" onClick={handleClick}>
                    <GoBell /> 
                    Click me!!
                </Button>
            </div>
            <div>
                 <Button danger>
                    Buy Now!
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide Ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something!
                </Button>
            </div>
    </div>   
    )
}

export default ButtonPage;