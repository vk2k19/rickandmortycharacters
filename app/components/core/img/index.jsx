import Image from "next/image";

const Img = props => {
  // add lazy loading
  const image = props.image ? props.image : '/rickandmortycharacters/assets/images/fallback-profile.png';

  return <Image 
    src={image} 
    alt={props.alt} 
    className="w-100 object-fit-cover object-top h-100" 
    width={100} 
    height={100} 
    data-testid="img-responsive"
  />
}

export default Img;
