import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchPhotos = async () => {

            const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
            setPhotos(response.data);

            console.error('Error fetching data:', err);

        };

        fetchPhotos();
    }, []);

    return (
        <div>
            <h1>Photos</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', backgroundColor:'beige' }}>
                {photos.splice(0,20).map(photo => (
                    <div key={photo.id} style={{ margin: '10px', border:'2px solid black', width:'200px', padding:'5px',display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <p>{photo.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
