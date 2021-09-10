import g13 from './Assets/g13-store.png'
import trivia from './Assets/trivia.png'
import webChat from './Assets/webchat.png'

const projectList = [
  {
    name: "Web Chat",
    description: "Aplicação online que usa Sockei.io para um sistema de chat com troca de menssagens em tempo real entre os usuarios conectados",
    image: webChat,
    link: 'https://john-web-chat.herokuapp.com/',
    codigo: 'https://github.com/johnealves/web_chat',
  },
  {
    name: "G13 Store",
    description: "Prototipo de uma loja online que busca produtos a partir de uma API do Mercado Livre",
    image: g13,
    link: 'https://johnealves.github.io/g13-store/',
    codigo: 'https://github.com/johnealves/g13-store',
  },
  {
    name: "Trivia game",
    description: 'Aplicação web que gera um perguntas aleatorias com multiplas opções de resposta utilizado a API "Open Trivia Databse"',
    image: trivia,
    link: 'https://johnealves.github.io/trivia-game/',
    codigo: 'https://github.com/johnealves/trivia-game',
  }
]

export default projectList