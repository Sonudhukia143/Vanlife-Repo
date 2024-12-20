import {  Route,createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom';
import './App.css'
import './styles/VanPage.css'
import './styles/hostVan.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.esm'
import AboutPage from './pageRoutes/AboutPage';
import HomePage from './pageRoutes/HomePage';
import Contact from './pageRoutes/Contact';
import VanPage, { loader as homePageLoader } from './pageRoutes/VanPage';
import VanDetails from './pageRoutes/VanDetails';
import Layout from './components/Layout';
import Host from './pageRoutes/hostPageRoutes/Host';
import HostIncome from './pageRoutes/hostPageRoutes/HostIncome';
import HostReviews from './pageRoutes/hostPageRoutes/HostReviews';
import HostLayout from './components/HostLayout';
import HostVans from './pageRoutes/hostPageRoutes/hostVans/HostVanD';
import HostVanDetail from './pageRoutes/hostPageRoutes/hostVans/HostVanDetail';
import HostVanPhotos from './pageRoutes/hostPageRoutes/hostVans/HostVanPhotos';
import HostVanPricing from './pageRoutes/hostPageRoutes/hostVans/HostVanPricing';
import HostVanDetails from './pageRoutes/hostPageRoutes/hostVans/HostVanDetails';
import UndefinedPath from '../utils/UndefinedPath';
import ErrorTemplate from '../utils/ErrorTemplate';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
          <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<Contact />} />

          <Route path="/vans" >
            <Route index element={<VanPage />} loader={homePageLoader} errorElement={<ErrorTemplate />} />
            <Route path=":id" element={<VanDetails />} />
          </Route>

          <Route path="/host" element={< HostLayout />}>
            <Route index element={<Host />} />
            <Route path="income" element={<HostIncome />} />
            <Route path="reviews" element={<HostReviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetails />}>
              <Route index element={<HostVanDetail />} />
              <Route path="photos" element={<HostVanPhotos />} />
              <Route path="pricing" element={<HostVanPricing />} />
            </Route>
          </Route>
          <Route path="*" element={<UndefinedPath/>} />
        </Route>
    </>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}