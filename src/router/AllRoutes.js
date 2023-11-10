import React from "react";
// Route Specific
import { Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// All HOME PAGE ROUTES
import AppointmentScheduling from "../views/all-home-pages/AppointmentScheduling"; //appointment-sc
import ComingSoon from "../views/all-home-pages/ComingSoon"; //all-home-pages only
import CustomerSupport from "../views/all-home-pages/CustomerSupport"; // eslint-disable-line
import DocLanding from "../views/all-home-pages/DocLanding";
import DocSignatureLanding from "../views/all-home-pages/DocSignatureLanding"; // docsignaturelanding
import Ecommerce from "../views/all-home-pages/Ecommerce"; // only ecommerce-factory is reset
import ICAVHome from "../views/all-home-pages/ICAVHome";
import MobileAppLanding from "../views/all-home-pages/MobileAppLanding"; //mobile-description
import NoteTakingLanding from "../views/all-home-pages/NoteTakingLanding"; //note-talking-landing
import ProductLanding from "../views/all-home-pages/ProductLanding"; //product-landing
import ProductLandingDark from "../views/all-home-pages/ProductLandingDark"; //productLandingDark
import ProjectManagement from "../views/all-home-pages/ProjectManagement"; //all-home-pages/ProjectManagement
import VideoEditorLanding from "../views/all-home-pages/VideoEditorLanding"; //video-editor-landing
import WebsiteBuilderLanding from "../views/all-home-pages/WebsiteBuilderLanding"; // https://
// All INNER PAGES ROUTES START FROM BELLOW

// PAGES DROPDOWN ALL ROUTES
// Team inner pages
import Faq from "../views/inner-pages/pages/Faq";
import FaqDetails from "../views/inner-pages/pages/FaqDetails";
import Team1 from "../views/inner-pages/pages/team/Team1";
import Team2 from "../views/inner-pages/pages/team/Team2";
import Team3 from "../views/inner-pages/pages/team/Team3";
import Team4 from "../views/inner-pages/pages/team/Team4";
import Team5 from "../views/inner-pages/pages/team/Team5";
import Team6 from "../views/inner-pages/pages/team/Team6";
import TeamDetailsV1 from "../views/inner-pages/pages/team/TeamDetailsV1";
import TeamDetailsV2 from "../views/inner-pages/pages/team/TeamDetailsV2";

// Contact us inner pages
import ContactCustomerSupport from "../views/inner-pages/pages/contact/ContactCustomerSupport";
import ContactDocumentation from "../views/inner-pages/pages/contact/ContactDocumentation";
import ContactEventOrganizer from "../views/inner-pages/pages/contact/ContactEventOrganizer";
import ContactProjectManagement from "../views/inner-pages/pages/contact/ContactProjectManagement";

// About us inner pages
import AboutCustomerSupport from "../views/inner-pages/pages/about/AboutCustomerSupport";
import AboutDocumentation from "../views/inner-pages/pages/about/AboutDocumentation";
import AboutEventOrganizer from "../views/inner-pages/pages/about/AboutEventOrganizer";
import AboutProjectManagement from "../views/inner-pages/pages/about/AboutProjectManagement";

// Pricing inner pages
import PricingCustomerSupport from "../views/inner-pages/pages/pricing/PricingCustomerSupport";
import PricingEventOrganizer from "../views/inner-pages/pages/pricing/PricingEventOrganizer";
import PricingProjectManagement from "../views/inner-pages/pages/pricing/PricingProjectManagement";

// FEATURES DROPDOWN ALL ROUTES
import FeaturesCustomerSupport from "../views/inner-pages/features/FeaturesCustomerSupport";
import ProductCustomerSupport from "../views/inner-pages/features/ProductCustomerSupport";
import SolutionMangement from "../views/inner-pages/features/SolutionMangement";
import Login from "../views/inner-pages/features/miscellaneous/Login";
import SignUp from "../views/inner-pages/features/miscellaneous/SignUp";
import TermsConditions from "../views/inner-pages/features/miscellaneous/TermsConditions";

// SERVICE PAGES ROUTES
import ServiceDetails from "../views/inner-pages/service/ServiceDetails";
import ServiceV1 from "../views/inner-pages/service/ServiceV1";
import ServiceV2 from "../views/inner-pages/service/ServiceV2";
import ServiceV3 from "../views/inner-pages/service/ServiceV3";
import ServiceV4 from "../views/inner-pages/service/ServiceV4";

// DOCS DROPDOWN ALL ROUTES
import Changelog from "../views/inner-pages/docs/Changelog";
import DocBox from "../views/inner-pages/docs/DocBox";
import DocBoxWithBanner from "../views/inner-pages/docs/DocBoxWithBanner";
import DocFullWidth from "../views/inner-pages/docs/DocFullWidth";
import DocFullWidthBanner from "../views/inner-pages/docs/DocFullWidthBanner";

// PORTFOLIO DROPDOWN ALL ROUTES
import PortfolioDetailsV1 from "../views/inner-pages/portfolio/PortfolioDetailsV1";
import PortfolioV1 from "../views/inner-pages/portfolio/PortfolioV1";
import PortfolioV2 from "../views/inner-pages/portfolio/PortfolioV2";
import PortfolioV3 from "../views/inner-pages/portfolio/PortfolioV3";
import PortfolioV4 from "../views/inner-pages/portfolio/PortfolioV4";
import PortfolioV5 from "../views/inner-pages/portfolio/PortfolioV5";

// BLOGS DROPDOWN ALL ROUTES
import BlogDetails from "../views/inner-pages/blog-pages/BlogDetails";
import BlogV1 from "../views/inner-pages/blog-pages/BlogV1";
import BlogV2 from "../views/inner-pages/blog-pages/BlogV2";
import BlogV3 from "../views/inner-pages/blog-pages/BlogV3";
import BlogV4 from "../views/inner-pages/blog-pages/BlogV4";
import BlogV5 from "../views/inner-pages/blog-pages/BlogV5";
import BlogV6 from "../views/inner-pages/blog-pages/BlogV6";

// Not Found Page
import NotFound from "../views/NotFound";

import VrLanding from "../views/all-home-pages/VrLanding";
import Cart from "../views/inner-pages/e-commerce/Cart";
import Checkout from "../views/inner-pages/e-commerce/Checkout";
import ProductDetails from "../views/inner-pages/e-commerce/ProductDetails";

import FormSurveyLanding from "../views/all-home-pages/FormSurveyLanding";
import Discipulado from "../views/inner-pages/pages/icav-redirect/Discipulado";
import GrupoConexion from "../views/inner-pages/pages/icav-redirect/GrupoConexion";
import Jovenes from "../views/inner-pages/pages/icav-redirect/Jovenes";
import Matrimonios from "../views/inner-pages/pages/icav-redirect/Matrimonios";
import Musica from "../views/inner-pages/pages/icav-redirect/Musica";
import Ninos from "../views/inner-pages/pages/icav-redirect/Ninos";
import Oracion from "../views/inner-pages/pages/icav-redirect/Oracion";
import Worship from "../views/inner-pages/pages/icav-redirect/Worship";
import Zoom from "../views/inner-pages/pages/icav-redirect/Zoom";

const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
      <Route path="/worship" element={<Worship />} />
        <Route path="/oracion-zoom" element={<Zoom />} />
        <Route path="/grupo-conexion" element={<GrupoConexion />} />
        <Route path="/discipulado" element={<Discipulado />} />


        <Route path="/ninos" element={<Ninos />} />
        <Route path="/jovenes" element={<Jovenes />} />
        <Route path="/matrimonios" element={<Matrimonios />} />
        <Route path="/musica" element={<Musica />} />
        <Route path="/oracion" element={<Oracion />} />

        <Route path="/" element={<ICAVHome />} />
        <Route path="/doc-landing" element={<DocLanding />} />
        <Route path="/doc-signature" element={<DocSignatureLanding />} />
        <Route path="/project-management" element={<ProjectManagement />} />
        <Route path="/customer-support" element={<CustomerSupport />} />
        <Route path="/product-landing" element={<ProductLanding />} />
        <Route path="/product-landing-dark" element={<ProductLandingDark />} />
        <Route path="/note-taking-landing" element={<NoteTakingLanding />} />
        <Route path="/video-editor-landing" element={<VideoEditorLanding />} />
        <Route
          path="/appointment-scheduling"
          element={<AppointmentScheduling />}
        />

        <Route path="/mobile-app-landing" element={<MobileAppLanding />} />
        <Route path="/website-builder" element={<WebsiteBuilderLanding />} />
        <Route path="/form-survey-landing" element={<FormSurveyLanding />} />
        <Route path="/vr-landing" element={<VrLanding />} />
        <Route path="/e-commerce" element={<Ecommerce />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/coming-soon" element={<ComingSoon />} />

        {/* Pages Dropdown Routes */}
        <Route path="/team-1" element={<Team1 />} />
        <Route path="/team-2" element={<Team2 />} />
        <Route path="/team-3" element={<Team3 />} />
        <Route path="/team-4" element={<Team4 />} />
        <Route path="/team-5" element={<Team5 />} />
        <Route path="/team-6" element={<Team6 />} />
        <Route path="/team-details-v1" element={<TeamDetailsV1 />} />
        <Route path="/team-details-v2" element={<TeamDetailsV2 />} />
        {/* faq inner pages */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/faq-details" element={<FaqDetails />} />
        {/* contact us inner pages */}
        <Route path="/contact-cs" element={<ContactCustomerSupport />} />
        <Route path="/contact-eo" element={<ContactEventOrganizer />} />
        <Route path="/contact-pm" element={<ContactProjectManagement />} />
        <Route path="/contact-doc" element={<ContactDocumentation />} />
        {/* about us inner pages */}
        <Route path="/about-cs" element={<AboutCustomerSupport />} />
        <Route path="/about-eo" element={<AboutEventOrganizer />} />
        <Route path="/about-pm" element={<AboutProjectManagement />} />
        <Route path="/about-doc" element={<AboutDocumentation />} />
        {/* pricing inner pages */}
        <Route path="/pricing-cs" element={<PricingCustomerSupport />} />
        <Route path="/pricing-eo" element={<PricingEventOrganizer />} />
        <Route path="/pricing-pm" element={<PricingProjectManagement />} />

        {/* Feature Dropdown Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/solution-management" element={<SolutionMangement />} />
        <Route
          path="/product-customer-support"
          element={<ProductCustomerSupport />}
        />
        <Route
          path="/features-customer-support"
          element={<FeaturesCustomerSupport />}
        />

        {/* Service inner pages */}
        <Route path="/service-v1" element={<ServiceV1 />} />
        <Route path="/service-v2" element={<ServiceV2 />} />
        <Route path="/service-v3" element={<ServiceV3 />} />
        <Route path="/service-v4" element={<ServiceV4 />} />
        <Route path="/service-details" element={<ServiceDetails />} />

        {/* inner pages Docs   */}
        <Route path="/doc-full-width" element={<DocFullWidth />} />
        <Route path="/doc-full-width-banner" element={<DocFullWidthBanner />} />
        <Route path="/doc-box" element={<DocBox />} />
        <Route path="/doc-box-with-banner" element={<DocBoxWithBanner />} />
        <Route path="/changelog" element={<Changelog />} />

        {/* inner Portfolio pages Dropdown   */}
        <Route path="/classic-style" element={<PortfolioV1 />} />
        <Route path="/grid-two-col" element={<PortfolioV2 />} />
        <Route path="/grid-three-col" element={<PortfolioV3 />} />
        <Route path="/gallery-slider" element={<PortfolioV4 />} />
        <Route path="/grid-single" element={<PortfolioV5 />} />
        <Route path="/portfolio-details-v1" element={<PortfolioDetailsV1 />} />

        {/* inner Blog pages Dropdown   */}
        <Route path="/blog-v1" element={<BlogV1 />} />
        <Route path="/blog-v2" element={<BlogV2 />} />
        <Route path="/blog-v3" element={<BlogV3 />} />
        <Route path="/blog-v4" element={<BlogV4 />} />
        <Route path="/blog-v5" element={<BlogV5 />} />
        <Route path="/blog-v6" element={<BlogV6 />} />
        <Route path="/blog-details" element={<BlogDetails />} />
        <Route path="*" element={<NotFound />} />

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
