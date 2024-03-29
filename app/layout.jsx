/* Core */
import fs from 'fs'
import path from 'path'
/* Components */
import { Providers } from "@/lib/providers";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

/* Instruments */
import "@/app/styles/bootstrap.css";
import "@/app/styles/globals.css";
import { getCharacters } from '@/lib/redux/slices/thunks';

export default async function RootLayout(props) {
  const filterConfigFile = path.join(process.cwd(), 'app' , 'data', 'filterConfig.json');
  const sortConfigFile = path.join(process.cwd(), 'app' , 'data', 'sortConfig.json');
  const filterConfig = fs.readFileSync(filterConfigFile, 'utf8');
  const sortConfig = fs.readFileSync(sortConfigFile, 'utf8');
  const filters = JSON.parse(filterConfig);
  const sortBy = JSON.parse(sortConfig);
  const results = await getCharacters()

  return (
    <Providers preloadedState={{ search: { name: '', filters, sortBy, results: results }}}>
      <html lang="en">
        <body>
          <section className="container-fluid">
            <Header />
            <main>{props.children}</main>
          </section>
          <Footer />
        </body>
      </html>
    </Providers>
  );
}
