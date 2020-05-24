import path from 'path';
import fs from 'fs';

import ReduxApp from '../src/redux';
import Header from '../src/components/header';
import Footer from '../src/components/footer';
import Main from '../src/components/main';

const Index = props => (<ReduxApp {...props} >
    <section className="container-fluid">
      <Header />
      <Main {...props} />
      <Footer />
    </section>
  </ReduxApp>);

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
        results: [],
        name: ''
      }
    }, // will be passed to the page component as props
  }
}

export default Index;
