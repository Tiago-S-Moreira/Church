import './Card.css';

const Card = ({ title, content2, content3, content4, content5 }) => {

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{content2}</p>
      <p>{content3}</p>
      <p>{content4}</p>
      <p>{content5}</p>
    </div>
  );
};


export default Card;

