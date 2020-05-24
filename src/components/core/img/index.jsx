const Img = props => {
  // add lazy loading
  const image = props.image ? props.image : '/assets/images/fallback-profile.png';

  return <>
    <img src={image} alt={props.alt} className="img-responsive"/>
    <style>
    {
      `
        .img-responsive {
          width: 100%;
          background: #fff;
        }
      `
    }
    </style>
  </>
}

export default Img;
