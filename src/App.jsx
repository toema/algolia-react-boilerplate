import React from 'react';
// Algolia import
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
// React router
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// RecoilState Management
// https://recoiljs.org/docs/introduction/getting-started
import { RecoilRoot } from 'recoil';

// Import Pages

import Header from './components/header/Header';
import HomePage from './pages/HomePage';
import SearchResultsPage from './pages/SearchResultsPage';
import Page2 from './pages/Page2';
import ResultsPage from './pages/ResultsPage';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/footer/Footer';

import CustomStateResults from './components/stateResults/stateResults';

// SCSS import
import './scss/index.scss';

// application state from config file
// eslint-disable-next-line import/order
import { indexName, searchClient } from './config/config';

// Import Components

const App = () => {
  const search = algoliasearch(searchClient.appID, searchClient.APIKey);
  return (
    <RecoilRoot>
      <InstantSearch searchClient={search} indexName={indexName.index}>
        <CustomStateResults />
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/search/:objectID" element={<ProductDetails />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/results" element={<ResultsPage />} />
          </Routes>
          <Footer />
        </Router>
      </InstantSearch>
    </RecoilRoot>
  );
};

export default App;
