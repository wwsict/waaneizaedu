import * as React from 'react';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';

const HomePage = () => {
  return(
    <>
      <Layout title='Home Page' pageHeading ='Home Page '>
        <StaticImage src="../images/program_creation_education.png" alt="program_creation_education"/>
        Welcome to my home page!
      </Layout>
    </>
  );
}

export default HomePage;