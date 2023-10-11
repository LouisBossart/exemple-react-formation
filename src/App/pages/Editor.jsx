import React from 'react';
import FlexHGrow from '../components/layouts/FlexHGrow/FlexHGrow';
import Header from '../components/uis/Header/Header';
import Navbar  from '../components/uis/Navbar/Navbar';
import FlexWGrow from '../components/layouts/FlexWGrow/FlexWGrow';
import MemeSvgViewer from '../components/uis/MemeSVGViewer/MemeSVGViewer';
import { ConnectedMemeForm } from '../components/functionnals/MemeForm/MemeForm';
import Footer from '../components/uis/Footer/Footer';

export default function Editor() {
  return (
    <>
     <FlexHGrow>
        <Header />
        <Navbar />
        <FlexWGrow>
          <MemeSvgViewer basePath="" />
          <ConnectedMemeForm />
        </FlexWGrow>
        <Footer />
      </FlexHGrow>
    </>
  );
}
