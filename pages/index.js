import Link from "../src/component/Link"
{/*O next abstrai a configuração de roteamento de paginas */}
export default function HomePage(){
    return(
        <div>
            <h1>Alura Cases - Home Page</h1>
            {/*O "Link" modelo SPA não precisa ficar carregando a pagina*/}
             {/*O "passHref" caso não apareça o href */}
            <Link href='/faq'>
                Ir para o FAQ
            </Link>
        </div>
    )
}
