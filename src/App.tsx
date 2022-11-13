import React from 'react';
import  { ErrorBoundary } from 'react-error-boundary';
import { Home, SignIn, PlusBook, ShowBook, EditBook, NotFound, Error } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <ErrorBoundary fallback={<Error />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/plus" element={<PlusBook />} />
          <Route path="/book/:id" element={<ShowBook />} />
          <Route path="/edit/:id" element={<EditBook />} />
          <Route element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
