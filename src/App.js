import { Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Movies from './pages/Movies';
import MovieDetail from './pages/MovieDetail';
import Navigation from './component/Navigation';
import Footer from './component/Footer';
import './App.css';

// 필요한 페이지 : 메인 페이지 / 영화 페이지 / 영화 상세 페이지

// 메인 페이지
//    배너를 볼 수 있다.
//    3가지 카테고리(인기작, 높은 평점, 상영 예정작)로 영화 리스트를 볼 수 있다. (슬라이드 가능)
//    영화에 마우스를 올리면 영화의 제목, 장르, 평점, 인기도, 청불 여부가 나온다.

// 영화 상세 페이지
//    영화에 대한 디테일한 정보를 볼 수 있다.
//        포스터, 제목, 줄거리, 점수, 인기도, 청불여부, 예산, 이익, 러닝타임 등
//    trailer를 클릭 시 trailer를 볼 수 있다.
//    reviews 클릭 시 review를 볼 수 있다.
//    관련된 추천 영화보 돌 수 있다.

// 영화 검색을 할 수 있다.
// 영화 정렬을 할 수 있다.
// 영화를 필터링할 수 있다.

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
