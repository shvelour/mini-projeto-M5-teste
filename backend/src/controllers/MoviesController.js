import { Movies } from "../model/MoviesModel.js"


let listMovies = [
    {
        id: 1,
        name: "A negação do Brasil",
        year: "2000",
        genre: "Documentário",
        description: "O documentário busca mostrar as influências das telenovelas na construção da identidade étnica dos afro-brasileiros, então de discutir a incorporação positiva do negro na teledramaturgia."
    },
    {
        id: 2,
        name: "Do que aprendi com minhas mais velhas",
        year: "2017",
        genre: "Documentário",
        description: "Do que aprendi com minhas mais velhas é um documentário sobre a fé no Candomblé e como essa fé é transmitida de geração em geração. Um filme onde mulheres importantes no Candomblé da Bahia falam como aprenderam com seus mais velhos e como ensinam seus mais jovens. Um filme sobre tradição, amor e religiosidade."
    },

    {
        id: 3,
        name: "Do the Right Thing",
        year: "1989",
        genre: "Drama",
        description: "Do the Right Thing é um filme americano lançado em 1989, dirigido por Spike Lee, que também escreveu o roteiro. O filme é um drama que aborda questões de racismo e tensões raciais em um bairro do Brooklyn durante um dia extremamente quente de verão."

    },
    {
        id: 4,
        name: "Black Girl",
        year: "1966",
        genre: "Drama",
        description: "Black Girl é um filme senegalês de 1966 dirigido por Ousmane Sembène. A história segue Diouana, uma jovem senegalesa que enfrenta discriminação e exploração ao trabalhar como empregada doméstica na França, explorando questões de colonização e racismo. "
    },
    {
        id: 5,
        name: "Rio, Zona Norte",
        year: "1957",
        genre: "Musical",
        description: "O sambista Espírito da Luz é um homem desiludido. Ao fazer uma viagem de trem pelo subúrbio, acaba caindo nos trilhos. Enquanto espera ajuda, relembra o tempo em que cantava em grandes festas, além de tragédias pessoais."
    },
    {
        id: 6,
        name: "Black Panthers",
        ano: "1968",
        genre: "Documentário",
        description: "Um documentário que explora a história do Partido dos Panteras Negras, um movimento revolucionário negro nos Estados Unidos durante a década de 1960. "
    }
]


function add(id, name, year, genre, description) {
    const newMovie = new Movies(id, name, year, genre, description)
    listMovies.push(newMovie)
    return newMovie
}


function list() {
    return listMovies
}

export { list, add }