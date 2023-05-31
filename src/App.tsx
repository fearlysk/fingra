import React from 'react';
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home";
import Qna from "./pages/Qna/Qna";
import Quotes from "./pages/Quotes/Quotes";
import Facts from "./pages/Facts/Facts";
import Articles from './pages/Articles/Articles';
import Kids from './pages/Kids/Kids';
import styles from "./App.module.scss";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import routes from './constants/routes';

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <div className={styles.container}>
        <Routes>
          <Route path={routes.HOME} element={<Home />} />
          <Route path={routes.QNA} element={<Qna />} />
          <Route path={routes.ARTICLES} element={<Articles />} />
          <Route path={routes.FACTS} element={<Facts />} />
          <Route path={routes.KIDS} element={<Kids />} />
          <Route path={routes.QUOTES} element={<Quotes />} />
        </Routes>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
