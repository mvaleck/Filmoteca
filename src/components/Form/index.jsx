import {Page, FormStyle} from "./style"

function Form () {
    return (
        <Page>
        <FormStyle action="">

            <h2>Sugira um filme</h2>

        <input 
        type="text"
        placeholder="Nome" 
        />

         <input 
        type="email"
        placeholder="E-mail" 
        />

         <input 
        type="text"
        placeholder="Nome do Filme" 
        />

         <input 
        type="text"
        placeholder="Mensagem" 
        />

        <button>Enviar</button>

        </FormStyle>
        </Page>
    );
}

export default Form;