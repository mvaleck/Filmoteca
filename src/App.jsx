import GlobalStyle from "./style/globalStyle"
import Menu from "./components/Menu"
import Filmes from "./components/Filmes"
import Form from "./components/Form"
import api from "../api"
import { useState, useEffect } from "react"

function App() {

  //estados
  const [ filmes, setFilmes] = useState([]);
  const [ categoriaAtiva, setCategoriaAtiva] = useState('todos');

    const handleBtTods = async () => {
        try {
            const response = await api.get(`/filmes`);
            setFilmes(response.data)

        } catch (error) {
            console.error('Erro ao buscar todos os filmes', error)
        }    
    };

    const handleBtRomance = async () => {
      try {
        const response = await api.get(`/filmes/categoria/1`);
        setFilmes(response.data)
    
      } catch (error) {
        console.error('Erro ao buscar filmes pela categoria Romance', error);
      }
    };

    const handleBtAcao = async () => {
      try {
        const response = await api.get(`/filmes/categoria/2`);
        setFilmes(response.data)

      } catch (error) {
        console.error('Erro ao buscar filmes da categoria Ação', error)
      }
    };


    const handleBtComedia = async () => {
      try {
        const response = await api.get(`/filmes/categoria/3`);
        setFilmes(response.data)

      } catch (error) {
        console.error('Erro ao buscar filmes da categoria Comédia', error)
      }
    };

    const handleBtTerror = async () => {
      try {
        const response = await api.get(`/filmes/categoria/4`);
        setFilmes(response.data)

      } catch (error) {
        console.error('Erro ao buscar filmes da categoria Terror', error)
      }
    };

    const handleBtFiccao = async () => {
      try {
        const response = await api.get(`/filmes/categoria/5`);
        setFilmes(response.data)

      } catch (error) {
        console.error('Erro ao buscar filmes da categoria Ficção', error)
      }
    };
  

  // 👇 Aqui ele busca todos os filmes automaticamente ao carregar
    useEffect(() => {
      handleBtTods();
    }, []);


  return (
   <div>
    <GlobalStyle/>

    <Menu
    buscarTodos={handleBtTods}
    buscarRomance={handleBtRomance}
    buscarAcao={handleBtAcao}
    buscarComedia={handleBtComedia}
    buscarTerror={handleBtTerror}
    buscarFiccao={handleBtFiccao}
    categoriaAtiva={categoriaAtiva}
    setCategoriaAtiva={setCategoriaAtiva}
    />

    <Filmes filmes={filmes} />
    
    <Form/>
    
   </div>
  )
}

export default App
