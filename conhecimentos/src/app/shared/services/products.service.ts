import { Injectable } from '@angular/core';
import { livro} from 'src/app/features/home/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  products: Array<livro> = [
    {
      id: 1,
      name: "Jamais peço desculpas por me derramar",
      description: "Segundo livro de Ryane Leão, mulher preta, poeta e professora, criadora da página Onde jazz meu coração, com mais de 600 mil seguidores nas redes sociais. Seu primeiro livro, Tudo nela brilha e queima, já vendeu mais de 40 mil exemplares. Mesmo na correria, eu sigo em busca das sutilezas. Não posso deixar as distrações passarem batidas. O peso do mundo não vai tomar conta de minha pele se eu me atentar às brechas, às margens. Anteontem eu vi o mar. Recebi abraços apertados que me agradeceram pelos poemas que escrevo com o coração na ponta dos dedos. Hoje de manhã as folhas das árvores balançaram com o vento e o barulho foi tão bonito. Daqui a pouco começo a cozinhar porque vou receber em casa as pessoas que amo. Quero saber de cor o que me traz paz, embora não sejam permanentes as belezas. O caos também não é. E eu estou mudando a cada minuto, então tudo bem. Há algo que resiste por entre os escudos, que me relembra que existe uma coisa essencial em ser uma mulher que se reconstrói diariamente: eu sou profunda demais pra acabar.",
      imagem: "https://m.media-amazon.com/images/I/51-cxkG+PyL._SX324_BO1,204,203,200_.jpg",
      valor: 27
    },
    {
      id: 2,
      name: "Tem lugar ai pra mim?",
      description: "Preconceito, discriminação, racismo, estereótipo, bullying, homofobia. Você já ouviu essas palavras? E respeito, direito, cidadania, igualdade, diversidade, paz? Sabia que essas palavras estão diretamente ligadas aos Direitos Humanos?Nesta obra você vai conhecer a história deste documento tão importante na nossa vida e vai compreender que, embora cada pessoa seja diferente a seu modo, somos todos iguais enquanto seres humanos. Iguais e diferentes. Muito complicado? Então abra as páginas deste livro e veja que ele tem tudo a ver com você, com os seus amigos, com a sua família e, principalmente, com a vida em sociedade.",
      imagem: "https://m.media-amazon.com/images/I/51T3D6VekaS._SX352_BO1,204,203,200_.jpg",
      valor: 30
    },
    {
      id: 3,
      name: "A Outra Garota Negra",
      description: "Nella Rogers está cansada de ser a única funcionária negra da editora Wagner Books. Quando já não aguenta mais se sentir deslocada e lidar com as microagressões no ambiente de trabalho, o destino parece enfim presenteá-la com uma aliada: outra garota negra, Hazel, passa a trabalhar na baia ao lado da sua. Porém, à medida que Hazel ganha influência e atenção no escritório, Nella vai se sentindo deixada de lado.",
      imagem: "https://m.media-amazon.com/images/I/51M+keoMA9L._SY498_BO1,204,203,200_.jpg",
      valor: 50
    },
    {
      id: 4,
      name: "Na minha pele",
      description: "Movido pelo desejo de viver num mundo em que a pluralidade cultural, racial, étnica e social seja vista como um valor positivo, e não uma ameaça, Lázaro Ramos divide com o leitor suas reflexões sobre temas como ações afirmativas, gênero, família, empoderamento, afetividade e discriminação. Ainda que não seja uma biografia, em Na minha pele Lázaro compartilha episódios íntimos de sua vida e também suas dúvidas, descobertas e conquistas. Ao rejeitar qualquer tipo de segregação ou radicalismos, Lázaro nos fala da importância do diálogo. Não se pode abraçar a diferença pela diferença, mas lutar pela sua aceitação num mundo ainda tão cheio de preconceitos. Um livro sincero e revelador, que propõe uma mudança de conduta e nos convoca a ser mais vigilantes e atentos ao outro.",
      imagem: "https://m.media-amazon.com/images/I/51g+hJK3CdL._SX330_BO1,204,203,200_.jpg",
      valor: 25
    },
    {
      id: 5,
      name: "Escravidão III",
      description: "Na tarde em que o príncipe dom Pedro chegou às margens do Ipiranga, em 7 de setembro de 1822, o Brasil estava empanturrado de escravidão. Comprar e vender gente era o maior negócio do novo país independente. Homens e mulheres escravizados perfaziam mais de um terço do total de habitantes, estimado em 4,7 milhões de pessoas. Outro terço era composto por negros forros e mestiços de origem africana – uma população pobre, analfabeta e carente de tudo, dominada pela minoria branca. Os indígenas, já dizimados por guerras, doenças e invasão de seus territórios, sequer apareciam nas estatísticas.",
      imagem: "https://m.media-amazon.com/images/I/51KySEk1XyL._SX338_BO1,204,203,200_.jpg",
      valor:45
    },
    {
      id: 6,
      name: "Racismo Linguístico",
      description: "Escrito de forma acessível e didática, este livro será de imenso interesse não apenas para estudiosos da linguagem, mas todos os que querem entender melhor a complexidade da desigualdade racial no Brasil. Com sua análise original da relação entre língua e racismo, Gabriel Nascimento aborda um tema quase totalmente ausente da linguística brasileira, se posicionando de forma lúcida e engajada nos debates de intelectuais negros, muitas vezes esquecidos, e mostrando suas contribuições para uma visão mais inclusiva da linguagem dentro da sociedade brasileira. De fato, a grande novidade da obra de Nascimento é de mostrar tanto as ausências da linguística tradicional quanto as pistas para uma renovação dessa área, dando continuidade ao projeto anticolonial de autores clássicos como Franz Fanon e à crítica decolonial contemporânea, que está transformando debates acadêmicos e políticos ao redor do mundo. Assim, este livro se insere numa virada importante na ciência e sociedade brasileira, que somente agora está começando a encarar a força estruturante de categorias raciais",
      imagem: "https://m.media-amazon.com/images/I/511dsdseUtL.jpg",
      valor: 37
    },
    {
      id: 7,
      name: "Amoras",
      description: "Emicida conta a história de uma garotinha que reconhece sua identidade a partir de uma conversa com o pai, debaixo de uma amoreira. Com referências à cultura e à resistência negra, o livro fala sobre representatividade e negritude com as crianças.",
      imagem: "https://www.blogdaletrinhas.com.br/app/webroot/files/uploads/ckfinder/images/amoras640.jpg",
      valor: 69
    },
    {
      id: 8,
      name: " Da minha janela",
      description: "O narrador deste livro narra cada coisa, pessoa e animal que vê da sua janela em uma favela do Rio de Janeiro. Dela ele vê cores, traços, gestos, objetos e bichos cujas vidas podem ser parecidas ou diferentes da sua, mas com certeza têm algo a ensinar.",
      imagem: "https://www.blogdaletrinhas.com.br/app/webroot/files/uploads/ckfinder/images/livro-infantil-da-minha-janela.jpeg",
      valor: 28
    },
    {
      id: 9,
      name: "Mandela: O africano de todas as cores!",
      description: " Nelson Mandela liderou a resistência contra décadas de apartheid na África do Sul e é amado e admirado no mundo inteiro. Depois de 27 anos na prisão, reconquistou enfim a liberdade e, em 1994, foi eleito o primeiro presidente negro de seu país. Com um texto emocionante de Alain Serres e belas ilustrações de Zaü, o livro apresenta a história desse grande homem, cuja luta a favor da união dos povos de todas as cores é fonte permanente de inspiração.",
      imagem: "https://cangurunews.com.br/wp-content/uploads/2020/06/livro-mandela.jpg",
      valor: 50.32
    },
    {
      id: 10,
      name: "Em busca de mim",
      description: "Em busca de mim conta a minha história, de um apartamento caindo aos pedaços na cidade de Central Falls, em Rhode Island, para os palcos de Nova York e além. Este é o caminho que percorri em busca de propósito e força, mas também para me fazer ser ouvida em um mundo que não me percebia. Enquanto escrevia Em busca de mim, pensei no quanto nossas histórias nem sempre recebem a devida atenção. São reinventadas para serem encaixadas em um mundo louco, competitivo e crítico. Escrevi este livro para aqueles que se sentem excluídos, que estão em busca de uma forma de entender e superar um passado complicado e encontrar autoaceitação no lugar da vergonha.",
      imagem: "https://m.media-amazon.com/images/I/51UgR5xhuvL._SX343_BO1,204,203,200_.jpg",
      valor: 70
    },
  ];

 

  constructor() { }

  getProducts() {
    return this.products;
  }

  getById(id: number) {
    return this.products.find((livro) => livro.id === id);
  }
}
