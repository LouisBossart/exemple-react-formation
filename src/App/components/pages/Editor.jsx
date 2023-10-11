import React from 'react';
import FlexHGrow from '../layouts/FlexHGrow/FlexHGrow';
import Header from '../uis/Header/Header';
import { Navbar } from 'react-bootstrap';
import FlexWGrow from '../layouts/FlexWGrow/FlexWGrow';
import MemeSvgViewer from '../uis/MemeSVGViewer/MemeSVGViewer';
import { ConnectedMemeForm } from '../functionnals/MemeForm/MemeForm';
import Footer from '../uis/Footer/Footer';

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
