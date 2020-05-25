import React, {useState, useEffect} from "react";
import api from './services/api';

import "./styles.css";

function App() {

  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [techs, setTechs] = useState('');

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    api.get('repositories').then(response => {
      setRepositories(response.data);
    })
  }, [])

  async function handleAddRepository() {

    const response =  await api.post('repositories', {
      title,
      url,
      techs
    });
    
    setRepositories([...repositories, response.data]);
  }

  async function handleRemoveRepository(id) {
      await api.delete(`repositories/${id}`)
      setRepositories(repositories.filter(repository =>  repository.id !== id));
  } 

  async function handleLikeRepository(id) {
    const repository = await api.post(`repositories/${id}/like`);
    
    if (repository.status === 200) {

      const repos = repositories.map((repository) => {
        if (repository.id === id)
        repository.likes++      
        return repository;
      })
         
      setRepositories(repos);
    }
  } 

  return (
    <div>
      <h1>Repositórios:</h1>
      <ul data-testid="repository-list">
      {repositories.map(repository => (
        <li key={repository.id}>

          <strong>Title:</strong>
          <p>{repository.title}</p>

          <strong>Url:</strong>
          <p>{repository.url}</p>

          <strong>Techs:</strong>
          <p>{repository.techs}</p>

          <strong>Likes:</strong>
          <p>{repository.likes}</p>
          
          <button className="button-like" type="submit" onClick={() => handleLikeRepository(repository.id)}>
          Like
          </button>

          <button type="submit" onClick={() => handleRemoveRepository(repository.id)}>
            Remove
          </button>
        </li>
      ))} 
     </ul>    

      <form onSubmit={handleAddRepository}>

        <input placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}/>

        <input placeholder="URL"
        value={url}
        onChange={e => setUrl(e.target.value)}/>

        <input placeholder="Techs" 
        value={techs}
        onChange={e => setTechs(e.target.value)}/>

        <button type="submit">Add</button>

      </form>

    </div>
  );
}

export default App;
