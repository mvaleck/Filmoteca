import popcorn from "../../assets/popcorn.svg"
import search from "../../assets/search.svg"
import {Content, Logo, Categories, ButtonCateg, SearchBar} from "./style.js"

function Menu ({setCategoriaAtiva, categoriaAtiva, buscarTodos, buscarRomance, buscarAcao, buscarComedia, buscarTerror, buscarFiccao}) {

    return (
        <>
        <Content>
            <Logo>
                <img src={popcorn} alt="" />
                <h1>Filmoteca</h1>
            </Logo>

            <Categories>
                <ButtonCateg onClick={() => {
                    buscarTodos();
                    setCategoriaAtiva('todos');
                }}
                className={categoriaAtiva === 'todos' ? 'ativo' : ''}
                >Todos</ButtonCateg>

                <ButtonCateg  onClick={() => {
                    buscarRomance();
                    setCategoriaAtiva('romance');
                }}
                className={categoriaAtiva === 'romance' ? 'ativo' : ''}
                >Romance</ButtonCateg>

                <ButtonCateg onClick={() => {
                    buscarAcao();
                    setCategoriaAtiva('ação');
                }}
                className={categoriaAtiva === 'ação' ? 'ativo' : ''}
                >Ação</ButtonCateg>

                <ButtonCateg onClick={() => {
                    buscarComedia();
                    setCategoriaAtiva('comédia');
                }}
                className={categoriaAtiva === 'comédia' ? 'ativo' : ''} >Comédia</ButtonCateg>
                
                <ButtonCateg onClick={() => {
                    buscarTerror();
                    setCategoriaAtiva('terror');
                }}
                className={categoriaAtiva === 'terror' ? 'ativo' : ''}>Terror</ButtonCateg>

                <ButtonCateg onClick={() => {
                    buscarFiccao();
                    setCategoriaAtiva('ficção');
                }}
                className={categoriaAtiva === 'ficção' ? 'ativo' : ''}>Fiçção</ButtonCateg>
            </Categories>
        </Content>

            <SearchBar>
                <img src={search} alt="" />
                <input type="search" 
                placeholder="Pesquisar filmes"
                />
            </SearchBar>
        </>
    );
}

export default Menu;