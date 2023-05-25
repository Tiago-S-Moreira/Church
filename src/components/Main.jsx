import Card from './Card';
import './Main.css';
import Section from './Section';

const program = [
  {
      name: 'Escola Teológica',
      imageUrl: '../svg/relogio-sete-e-meia.svg',
      hours: '19:30 hrs',
      day: 'Segunda-feira',
      verse: 'Bem-aventurado o homem que acha sabedoria, e o homem que adquire conhecimento.',
      reference: 'Provérbios 3:13'
  },
  {
      name: 'Reunião de Crescimento Espiritual',
      imageUrl: '../svg/relogio.svg',
      hours: '20:00 hrs',
      day: 'Quinta-Feira',
      verse: 'Como crianças recém-nascidas, desejem de coração o leite espiritual puro, para que por meio dele cresçam para a salvação.',
      reference: '1 Pedro 2:2'
  },
  {
      name: 'Encontro JM',
      imageUrl: '../svg/relogio.svg',
      hours: '20:00 hrs',
      day: 'Sábado',
      verse: 'Ninguém o despreze pelo fato de você ser jovem, mas seja um exemplo para os fiéis na palavra, no procedimento, no amor, na fé e na pureza.',
      reference: '1 Timóteo 4:12'
  },
  {
      name: 'Celebração',
      imageUrl: '../svg/relogio-sete-e-meia.svg',
      hours: '19:30 hrs',
      day: 'Domingo',
      verse: 'Rendam graças ao Senhor, pois ele é bom; o seu amor dura para sempre.',
      reference: '1 Crônicas 29:11'
  }
];


function Main() {
  return (
    <>
    <div className="prog">
      <h2>Programação</h2>
      <h3>Fique por dentro de nossos cultos e estudos.</h3>
    </div>
      <div className="card-prog">
      {program.map(item =>(
        <Card
        key={item.name}
        title={item.name}
        content2={item.day}
        content3={item.hours}
        content4={item.verse}
        content5={item.reference}
        />
      ))}
      </div>
      <Section />
    </>
  );
}

export default Main;