import axios from 'axios';

const searchImages = async () =>{
     const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 7nU8ef9Mia3BfgZLoZ0vQMPSRqmbMSZj48eQG75vYDY'
        }, 
        params: {
            query: 'cars'
        }
    });

    console.log(response);
    
    return response;
};

export default searchImages;
