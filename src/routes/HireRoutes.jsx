
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HireWebDevelopers from '../pages/hire/web-developers/HireWebDevelopers';
import PhpDeveloper from '../pages/hire/web-developers/PhpDeveloper';
import PythonDeveloper from '../pages/hire/web-developers/PythonDeveloper';
import WordpressDeveloper from '../pages/hire/web-developers/WordpressDeveloper';
import MagentoDeveloper from '../pages/hire/web-developers/MagentoDeveloper';
import ShopifyDeveloper from '../pages/hire/web-developers/ShopifyDeveloper';
import GolangDeveloper from '../pages/hire/web-developers/GolangDeveloper';
import RubyOnRailsDeveloper from '../pages/hire/web-developers/RubyOnRailsDeveloper';
import JavaDeveloper from '../pages/hire/web-developers/JavaDeveloper';
import MeanStackDeveloper from '../pages/hire/web-developers/MeanStackDeveloper';
import MernDeveloper from '../pages/hire/web-developers/MernDeveloper';
import FullStackDeveloper from '../pages/hire/web-developers/FullStackDeveloper';
import DjangoDeveloper from '../pages/hire/web-developers/DjangoDeveloper';
import AspnetDeveloper from '../pages/hire/web-developers/AspnetDeveloper';
import LaravelDeveloper from '../pages/hire/web-developers/LaravelDeveloper';
import netCoreDeveloper from '../pages/hire/web-developers/netCoreDeveloper';
import DrupalDeveloper from '../pages/hire/web-developers/DrupalDeveloper';
import HireMobileAppDevelopers from '../pages/hire/mobile-app-developers/HireMobileAppDevelopers';
import IosDeveloper from '../pages/hire/mobile-app-developers/IosDeveloper';
import AndroidDeveloper from '../pages/hire/mobile-app-developers/AndroidDeveloper';
import FlutterDeveloper from '../pages/hire/mobile-app-developers/FlutterDeveloper';
import IonicDeveloper from '../pages/hire/mobile-app-developers/IonicDeveloper';
import SwiftDeveloper from '../pages/hire/mobile-app-developers/SwiftDeveloper';
import KotlinDeveloper from '../pages/hire/mobile-app-developers/KotlinDeveloper';
import ReactNativeDeveloper from '../pages/hire/mobile-app-developers/ReactNativeDeveloper';
import Unity3dDeveloper from '../pages/hire/mobile-app-developers/Unity3dDeveloper';
import CrossPlatformDeveloper from '../pages/hire/mobile-app-developers/CrossPlatformDeveloper';
import HireJavascriptDevelopers from '../pages/hire/javascript-developers/HireJavascriptDevelopers';
import ReactDeveloper from '../pages/hire/javascript-developers/ReactDeveloper';
import AngularDeveloper from '../pages/hire/javascript-developers/AngularDeveloper';
import VuejsDeveloper from '../pages/hire/javascript-developers/VuejsDeveloper';
import NodejsDeveloper from '../pages/hire/javascript-developers/NodejsDeveloper';
import NextjsDeveloper from '../pages/hire/javascript-developers/NextjsDeveloper';
import ExpressjsDeveloper from '../pages/hire/javascript-developers/ExpressjsDeveloper';
import TypescriptDeveloper from '../pages/hire/javascript-developers/TypescriptDeveloper';
import FullStackJavascriptDeveloper from '../pages/hire/javascript-developers/FullStackJavascriptDeveloper';
import HireDevopsDevelopers from '../pages/hire/devops-developers/HireDevopsDevelopers';
import AwsDeveloper from '../pages/hire/devops-developers/AwsDeveloper';
import AzureDevopsDeveloper from '../pages/hire/devops-developers/AzureDevopsDeveloper';
import DevsecopsDeveloper from '../pages/hire/devops-developers/DevsecopsDeveloper';
import DockerDeveloper from '../pages/hire/devops-developers/DockerDeveloper';
import KubernetesDeveloper from '../pages/hire/devops-developers/KubernetesDeveloper';
import CicdDeveloper from '../pages/hire/devops-developers/CicdDeveloper';
import CloudEngineer from '../pages/hire/devops-developers/CloudEngineer';
import InfrastructureAutomationDeveloper from '../pages/hire/devops-developers/InfrastructureAutomationDeveloper';
import HireDesigners from '../pages/hire/designers/HireDesigners';
import UiuxDesigner from '../pages/hire/designers/UiuxDesigner';
import GraphicDesigner from '../pages/hire/designers/GraphicDesigner';
import ProductDesigner from '../pages/hire/designers/ProductDesigner';
import WebDesigner from '../pages/hire/designers/WebDesigner';
import MobileAppDesigner from '../pages/hire/designers/MobileAppDesigner';
import BrandDesigner from '../pages/hire/designers/BrandDesigner';
import MotionDesigner from '../pages/hire/designers/MotionDesigner';
import GameDesigner from '../pages/hire/designers/GameDesigner';
import HireSalesforceIntegrationDevelopers from '../pages/hire/salesforce-integration-developers/HireSalesforceIntegrationDevelopers';
import SalesforceDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceDeveloper';
import SalesforceConsultant from '../pages/hire/salesforce-integration-developers/SalesforceConsultant';
import SalesforceIntegrationDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceIntegrationDeveloper';
import SalesforceAdmin from '../pages/hire/salesforce-integration-developers/SalesforceAdmin';
import SalesforceCommerceCloudDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceCommerceCloudDeveloper';
import SalesforceMarketingCloudDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceMarketingCloudDeveloper';
import SalesforceCrmDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceCrmDeveloper';
import SalesforceApiIntegrationDeveloper from '../pages/hire/salesforce-integration-developers/SalesforceApiIntegrationDeveloper';

const HireRoutes = () => {
  return (
    <>
      <Route path="/hire-team/web-developers" element={<HireWebDevelopers />} />
      <Route path="/hire-team/web-developers/php-developer" element={<PhpDeveloper />} />
      <Route path="/hire-team/web-developers/python-developer" element={<PythonDeveloper />} />
      <Route path="/hire-team/web-developers/wordpress-developer" element={<WordpressDeveloper />} />
      <Route path="/hire-team/web-developers/magento-developer" element={<MagentoDeveloper />} />
      <Route path="/hire-team/web-developers/shopify-developer" element={<ShopifyDeveloper />} />
      <Route path="/hire-team/web-developers/golang-developer" element={<GolangDeveloper />} />
      <Route path="/hire-team/web-developers/ruby-on-rails-developer" element={<RubyOnRailsDeveloper />} />
      <Route path="/hire-team/web-developers/java-developer" element={<JavaDeveloper />} />
      <Route path="/hire-team/web-developers/mean-stack-developer" element={<MeanStackDeveloper />} />
      <Route path="/hire-team/web-developers/mern-developer" element={<MernDeveloper />} />
      <Route path="/hire-team/web-developers/full-stack-developer" element={<FullStackDeveloper />} />
      <Route path="/hire-team/web-developers/django-developer" element={<DjangoDeveloper />} />
      <Route path="/hire-team/web-developers/asp-net-developer" element={<AspnetDeveloper />} />
      <Route path="/hire-team/web-developers/laravel-developer" element={<LaravelDeveloper />} />
      <Route path="/hire-team/web-developers/net-core-developer" element={<netCoreDeveloper />} />
      <Route path="/hire-team/web-developers/drupal-developer" element={<DrupalDeveloper />} />
      <Route path="/hire-team/mobile-app-developers" element={<HireMobileAppDevelopers />} />
      <Route path="/hire-team/mobile-app-developers/ios-developer" element={<IosDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/android-developer" element={<AndroidDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/flutter-developer" element={<FlutterDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/ionic-developer" element={<IonicDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/swift-developer" element={<SwiftDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/kotlin-developer" element={<KotlinDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/react-native-developer" element={<ReactNativeDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/unity-3d-developer" element={<Unity3dDeveloper />} />
      <Route path="/hire-team/mobile-app-developers/cross-platform-developer" element={<CrossPlatformDeveloper />} />
      <Route path="/hire-team/javascript-developers" element={<HireJavascriptDevelopers />} />
      <Route path="/hire-team/javascript-developers/react-developer" element={<ReactDeveloper />} />
      <Route path="/hire-team/javascript-developers/angular-developer" element={<AngularDeveloper />} />
      <Route path="/hire-team/javascript-developers/vue-js-developer" element={<VuejsDeveloper />} />
      <Route path="/hire-team/javascript-developers/node-js-developer" element={<NodejsDeveloper />} />
      <Route path="/hire-team/javascript-developers/next-js-developer" element={<NextjsDeveloper />} />
      <Route path="/hire-team/javascript-developers/express-js-developer" element={<ExpressjsDeveloper />} />
      <Route path="/hire-team/javascript-developers/typescript-developer" element={<TypescriptDeveloper />} />
      <Route path="/hire-team/javascript-developers/full-stack-javascript-developer" element={<FullStackJavascriptDeveloper />} />
      <Route path="/hire-team/devops-developers" element={<HireDevopsDevelopers />} />
      <Route path="/hire-team/devops-developers/aws-developer" element={<AwsDeveloper />} />
      <Route path="/hire-team/devops-developers/azure-devops-developer" element={<AzureDevopsDeveloper />} />
      <Route path="/hire-team/devops-developers/devsecops-developer" element={<DevsecopsDeveloper />} />
      <Route path="/hire-team/devops-developers/docker-developer" element={<DockerDeveloper />} />
      <Route path="/hire-team/devops-developers/kubernetes-developer" element={<KubernetesDeveloper />} />
      <Route path="/hire-team/devops-developers/cicd-developer" element={<CicdDeveloper />} />
      <Route path="/hire-team/devops-developers/cloud-engineer" element={<CloudEngineer />} />
      <Route path="/hire-team/devops-developers/infrastructure-automation-developer" element={<InfrastructureAutomationDeveloper />} />
      <Route path="/hire-team/designers" element={<HireDesigners />} />
      <Route path="/hire-team/designers/ui-ux-designer" element={<UiuxDesigner />} />
      <Route path="/hire-team/designers/graphic-designer" element={<GraphicDesigner />} />
      <Route path="/hire-team/designers/product-designer" element={<ProductDesigner />} />
      <Route path="/hire-team/designers/web-designer" element={<WebDesigner />} />
      <Route path="/hire-team/designers/mobile-app-designer" element={<MobileAppDesigner />} />
      <Route path="/hire-team/designers/brand-designer" element={<BrandDesigner />} />
      <Route path="/hire-team/designers/motion-designer" element={<MotionDesigner />} />
      <Route path="/hire-team/designers/game-designer" element={<GameDesigner />} />
      <Route path="/hire-team/salesforce-integration-developers" element={<HireSalesforceIntegrationDevelopers />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-developer" element={<SalesforceDeveloper />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-consultant" element={<SalesforceConsultant />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-integration-developer" element={<SalesforceIntegrationDeveloper />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-admin" element={<SalesforceAdmin />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-commerce-cloud-developer" element={<SalesforceCommerceCloudDeveloper />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-marketing-cloud-developer" element={<SalesforceMarketingCloudDeveloper />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-crm-developer" element={<SalesforceCrmDeveloper />} />
      <Route path="/hire-team/salesforce-integration-developers/salesforce-api-integration-developer" element={<SalesforceApiIntegrationDeveloper />} />

    </>
  );
};
export default HireRoutes;
