import Img from '@/app/components/core/img';
import DetailTable from '@/app/components/core/detailTable';

const getCreationText = date => {
  const currentYear = (new Date()).getFullYear();
  const cardYear = new Date(date.split('T')[0]).getFullYear();
  const year = currentYear - cardYear;

  if (year > 1) {
    return `created: ${year} years ago`;
  } else if ( year === 1 ) {
    return `created: ${year} year ago`;
  } else {
    return `created: this year`;
  }
};


const Card  = props => {
  return <div className={`card bg-dark bg-gradient rounded-2 border-secondary overflow-hidden h-100 ${props.className}`} data-testid="card">
      <figure className="position-relative m-0" data-testid="card-img-title">
        <Img className='h-auto w-100' alt={props.name} image={props.image} />
        <figcaption className="position-absolute bottom-0 pt-3 rounded-top-5 text-center bg-black-opacity text-white w-100" data-testid="card-title-wrapper">
          <h2 className='m-0 h4' data-testid="card-title">{props.name}</h2>
          <span data-testid="card-id">id: {props.id}</span> - <span className="card-date">{getCreationText(props.created)}</span>
        </figcaption>
      </figure>
      <DetailTable
        {...props}
      />
    </div>
}

export default Card;
