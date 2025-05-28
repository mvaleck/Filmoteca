import popcorn from "./../assets/popcorn.svg"
import search from "./../assets/search.svg"

import {Content, Logo, Categories, ButtonCateg, SearchBar} from "./style.js"

function Menu () {
    return (
        <>
        <Content>
            <Logo>
                <img src={popcorn} alt="" />
                <h1>Filmoteca</h1>
            </Logo>

            <Categories>
                <ButtonCateg>Todos</ButtonCateg>
                <ButtonCateg>Romance</ButtonCateg>
                <ButtonCateg>Ação</ButtonCateg>
                <ButtonCateg>Comédia</ButtonCateg>
                <ButtonCateg>Terror</ButtonCateg>
                <ButtonCateg>Fiçção</ButtonCateg>
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