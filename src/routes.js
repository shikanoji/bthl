import Home from './pages/Home';
import NumberChecker from './components/numberCheck/NumberChecker';
import AppDownload from './pages/AppDownload';

var routes = [
  {
    path: "/home",
    name: "Trang chủ",
    icon: "bi bi-house-door",
    component: NumberChecker,
    layout: "/main",
  },
  {
    path: "/gieo-que",
    name: "Gieo quẻ",
    icon: "bi bi-house-door",
    component: Home,
    layout: "/main",
  },
  {
    path: "/app-download",
    name: "Tải ứng dụng",
    icon: "bi bi-download",
    component: AppDownload,
    layout: "/main",
  },
];

export default routes;