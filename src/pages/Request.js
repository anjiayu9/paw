import React, { useState, useEffect } from 'react'; 
import '../css/index.css'; 
import '../css/request.css';

const Adopt = () => {
    const [cats, setCats] = useState([]);
    const [filter, setFilter] = useState({ color: '', age: '' });

    function getCatImageSource(color) {
      switch (color) {
        case 'Black':
          return '../sources/cat1.png';
        case 'Gray':
          return '../sources/cat4.png';
        case 'White':
          return '../sources/cat3.png';
        case 'Calico':
          return '../sources/cat2.png';
        case 'Tabby':
          return '../sources/cat6.png';
        case 'Orange':
          return '../sources/cat5.png';
        default:
          return '../sources/cat3.png';
      }
    }

    useEffect(() => {
      fetch('../data/cats.json') // Update the path here
        .then(response => response.json())
        .then(data => {
          setCats(data);
        })
        .catch(error => {
          console.error('Error fetching cat data:', error);
        });
    }, []);

    const filteredCats = cats.filter(cat => {
      return (filter.color === '' || cat.color === filter.color) && (filter.age === '' || cat.age === filter.age);
    });

    const handleFilterChange = (event) => {
      setFilter({
        ...filter,
        [event.target.name]: event.target.value,
      });
    };

    const handleSubmit = (event) => {
      event.preventDefault();
    };

    // ...
  return (
    <div>
        <div class="description-bar">
          <h1>Request for Therapy Cat</h1>
          <p>Looking for a therapy cat to brighten up your day? <br/>Discover cats that meet your therapy needs, and take care of your mental health!</p>
        </div>

        <form id="cat-form" onSubmit={handleSubmit}>
            <div className="form-fields">
                <label htmlFor="color">Color:</label>
                <select id="color" name="color" onChange={handleFilterChange}>
                    <option value="">Don't care</option>
                    <option value="Black">Black</option>
                    <option value="Gray">Gray</option>
                    <option value="White">White</option>
                    <option value="Calico">Calico</option>
                    <option value="Tabby">Tabby</option>
                    <option value="Orange">Orange</option>
                </select>

                <label htmlFor="age">Age:</label>
                <select id="age" name="age" onChange={handleFilterChange}>
                    <option value="">Don't care</option>
                    <option value="Kitten">Kitten</option>
                    <option value="Junior">Junior</option>
                    <option value="Prime">Prime</option>
                    <option value="Mature">Mature</option>
                    <option value="Senior">Senior</option>
                    <option value="Geriatric">Geriatric</option>
                </select>
            </div>
            <button type="submit">Filter</button>
        </form>

        <div id="cat-cards" className="content-container">
            {filteredCats.map(cat => (
                <div key={cat.id} className="card">
                    <img src={getCatImageSource(cat.color)} alt="Cat" />
                    <h3>{cat.name}</h3>
                    <p>Color: {cat.color}</p>
                    <p>Age: {cat.age}</p>
                </div>
            ))}
        </div>
    </div>
  );

};

export default Adopt;

