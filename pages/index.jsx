import path from 'path';
import fs from 'fs';

import ReduxApp from '../src/redux';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Main from '../src/components/main';

import { getData, getAllCharacters } from  '../src/redux/action/fetchUtils';

const Index = props => (<ReduxApp {...props} >
    <section className="container-fluid">
      <Header />
      <Main {...props} />
      <Footer />
    </section>
  </ReduxApp>);

const getCharacters = async () => {
  try {
   let res = await getData();
   if (!res.info || !res.info.count) {
     return [];
   }
   res = await getAllCharacters(res.info.count);
    let payload = [];
    // error in response
    if(res.error) {
      return [];
    } else {
      // multiple response vs single response
      payload = Array.isArray(res) ? res : [res];
      return payload.map(char => ({
        ...char,
        origin: char.origin.name,
        location: char.location.name
      }))
    }
  } catch(e) {
    return [];
  };
};

export async function getStaticProps(context) {
  const filterConfigFile = path.join(process.cwd(), 'src' , 'data', 'filterConfig.json');
  const filterConfig = fs.readFileSync(filterConfigFile, 'utf8');

  const sortConfigFile = path.join(process.cwd(), 'src' , 'data', 'sortConfig.json');
  const sortConfig = fs.readFileSync(sortConfigFile, 'utf8');

  return {
    props: {
      search: {
        filters: JSON.parse(filterConfig),
        sortBy: JSON.parse(sortConfig),
        results: await getCharacters(),
        name: ''
      }
    }, // will be passed to the page component as props
  }
}

export default Index;
