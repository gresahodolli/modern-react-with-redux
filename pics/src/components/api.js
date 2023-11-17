import axios from 'axios';

const searchImages = async (term) =>{
     const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: 'Client-ID 7nU8ef9Mia3BfgZLoZ0vQMPSRqmbMSZj48eQG75vYDY'
        }, 
        params: {
            query: term,
        }
    });

    
    return response.data.results; 
};

export default searchImages;
