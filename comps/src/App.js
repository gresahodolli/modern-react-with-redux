import Button from './Button';

function App() {
    return (
        <div>
            <div>
                <Button secondary outline rounded> 
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

export default App;