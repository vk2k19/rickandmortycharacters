import Image from "next/image";

const Img = props => {
  // add lazy loading
  const image = props.image ? props.image : '/assets/images/fallback-profile.png';

  return <>
    <Image src={image} alt={props.alt} className="img-responsive" width={100} height={100} data-testid="img-responsive"/>
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
