import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import CustomSoftwarePage from "./pages/CustomSoftwarePage";
import SalesCRMPage from "./pages/SalesCRMPage";
import EnterpriseWebAppsPage from "./pages/EnterpriseWebAppsPage";
import EcommerceInfrastructurePage from "./pages/EcommerceInfrastructurePage";
import PerformanceLandingPagesPage from "./pages/PerformanceLandingPagesPage";
import WhyItMattersPage from "./pages/WhyItMattersPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import OurServicesPage from "./pages/OurServicesPage";
import WhatsIncludedPage from "./pages/WhatsIncludedPage";
import IndustriesWeServePage from "./pages/IndustriesWeServePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/custom-software",
    Component: CustomSoftwarePage,
  },
  {
    path: "/sales-crm",
    Component: SalesCRMPage,
  },
  {
    path: "/enterprise-web-applications",
    Component: EnterpriseWebAppsPage,
  },
  {
    path: "/ecommerce-infrastructure",
    Component: EcommerceInfrastructurePage,
  },
  {
    path: "/performance-landing-pages",
    Component: PerformanceLandingPagesPage,
  },
  {
    path: "/why-it-matters",
    Component: WhyItMattersPage,
  },
  {
    path: "/why-choose-us",
    Component: WhyChooseUsPage,
  },
  {
    path: "/our-services",
    Component: OurServicesPage,
  },
  {
    path: "/whats-included",
    Component: WhatsIncludedPage,
  },
  {
    path: "/industries-we-serve",
    Component: IndustriesWeServePage,
  },
]);