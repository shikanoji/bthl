import Home from './pages/Home';
import NumberChecker from './components/numberCheck/NumberChecker';

var routes = [
  {
    path: "/home",
    name: "Trang chủ",
    icon: "bi bi-house-door",
    component: Home,
    layout: "/main",
  },
  {
    path: "/number-check",
    name: "Check số đẹp",
    icon: "bi bi-house-door",
    component: NumberChecker,
    layout: "/main",
  },
];

export default routes;