
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  const [images, setImages] = useState([]);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        console.log('calling data', data);
        
        setImages(data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <h2>Image Gallery</h2>
        <div className="img-container">
          {images.slice(0, visibleCount).map((image) => (
            <div key={image.id} className="image-card">
              <img src={image.thumbnailUrl} alt={image.title} />
              <p>{image.title}</p>
            </div>
          ))}
        </div>
        {visibleCount < images.length && (
          <button onClick={() => setVisibleCount((prev) => prev + 10)}>Show More</button>
        )}
      </div>
    </>
  )
}

export default App
