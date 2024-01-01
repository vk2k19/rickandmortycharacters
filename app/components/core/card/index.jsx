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
  return <>
    <div className="card" data-testid="card">
      <figure className="card-img-title">
        <Img alt={props.name} image={props.image} />
        <figcaption className="card-title-wrapper">
          <h2 className="card-title">{props.name}</h2>
          <span className="card-id">id: {props.id}</span> - <span className="card-date">{getCreationText(props.created)}</span>
        </figcaption>
      </figure>
      <DetailTable
        {...props}
      />
    </div>
    <style jsx>{`
      .card {
        padding-bottom: 20px;
        border-radius: 5px;
        background: #333;
        overflow: hidden;
        height: 100%;
      }
      @media (min-width: 992px) {
        .card {
          border-radius: 10px;
        }
      }
      .card-img-title {
        position: relative;
      }
      .card-title-wrapper {
        padding: 10px;
        position: absolute;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        width: 100%;
        color: #fff;
      }
      .card-title {
        font-size: 1.75rem;
        margin: 5px 0;
      }
      `}
    </style>
  </>
}

export default Card;
