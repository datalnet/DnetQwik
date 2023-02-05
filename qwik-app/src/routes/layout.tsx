import { component$, useStore, Slot } from '@builder.io/qwik';
import { DesktopHeader } from '../components/admin-dashboard/desktop-header/desktop-header';
import { DesktopLeftColumn } from '../components/admin-dashboard/desktop-left-column/desktop-left-column';
import { DesktopRightColumn } from '../components/admin-dashboard/desktop-right-column/desktop-right-column';
import { DesktopFooter } from '../components/admin-dashboard/desktop-footer/desktop-footer';
import { DesktopContent } from '../components/admin-dashboard/desktop-content/desktop-content';
import { DesktopLayout } from '../components/admin-dashboard/desktop-layout/desktop-layout';
import { DesktopNavigation } from '../components/admin-dashboard/desktop-navigation/desktop-navigation';
import { DesktopMinifyMenu } from '../components/admin-dashboard/desktop-minify-menu/desktop-minify-menu';
import { DesktopNavigationMenu } from '../components/admin-dashboard/desktop-navigation-menu/desktop-navigation-menu';
import { Menus } from './menu-data';
import type { IThemeConfigData } from '../components/admin-dashboard/theme-config-data';

export default component$(() => {

  const themeConfig = useStore<IThemeConfigData>({
    isDesktopMode: true,
    isFooterHidden: false,
    isHeaderHidden: false,
    isLeftColumnHidden: false,
    isRightColumnHidden: false,
    isMinified: false,
    isHeaderFixed: false,
    isLeftColumnFixed: false,
    showMinifier: true,
    minifierChevronColor: "black",
    menuLinkTopHelperValue: 6
  });

  return (
    <>
      <DesktopLayout themeConfig={themeConfig}>
        <DesktopLeftColumn>
          <DesktopNavigation>
            <DesktopMinifyMenu q:slot="minifier"></DesktopMinifyMenu>
            <DesktopNavigationMenu menus={Menus} q:slot="menu"></DesktopNavigationMenu>
          </DesktopNavigation>
        </DesktopLeftColumn>
        <DesktopHeader>
          <div class="dnet-desktop-header-content">
            <div class="dnet-desktop-header-left">
              <div id="logo-group" class="dnet-dashboard-right-container dnet-m-l-10">
                <div class="company-logo-wrapper dnet-m-r-50">
                  <span class="blg-logo blg-logo-img"></span>
                </div>
                <div style="margin-left: 40px;">
                  <div id="app-tenant-dp">
                    <span>Dnet Qwik Components</span>
                  </div>
                  <div id="app-tenant-name" style="font-size: 0.625rem;display: flex;justify-content: flex-start;">
                    <span>v.0.1.0-beta</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="dnet-desktop-header-right">
              <div class="dnet-dashboard-right-container">
                <div class="dnet-dashboard-user-data">
                  <div style="display: flex;justify-content: flex-end;">
                    <span class="dnet-dashboard-person-name">PersonName</span>
                  </div>
                  <div style="display: flex;justify-content: flex-end;">
                    <span class="dnet-dashboard-user-name">UserName</span>
                  </div>
                </div>
                <div class="dnet-dashboard-icon-wrapper">
                <span class="dnet-dashboard-icon dnet-dashboard-icon-default" unselectable="on"></span>
              </div>
            </div>
          </div>
        </div>
      </DesktopHeader>
      <DesktopContent>
        <Slot />
      </DesktopContent>
      <DesktopFooter>
        <div style="height:100%; width:100%; display: flex; justify-content:space-between; align-items: center">
          <div style="display:flex; align-items: center; justify-content:start; padding-left: 20px;">
            <span style="font-size:.75rem;">2023 © Datalnet / Powered by Qwik</span>
          </div>
          <div style="display:flex; align-items: center; justify-content:start; padding-right: 20px;">
            <div class="widget">
              <a class="btn" href="https://github.com/datalnet/DnetQwik" rel="noopener" target="_blank" aria-label="Star" style="display:flex;align-items:center;text-decoration: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <span style="padding-bottom:0px;margin-left:5px;font-size:.75rem;padding-top:2px">Github</span>
              </a>
            </div>
            <div class="widget">
              <a class="btn" href="https://twitter.com/datalnet" rel="noopener" target="_blank" aria-label="Star" style="display:flex;align-items:center;text-decoration: none;">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 512 512" role="img" fill="currentColor" aria-label="Twitter Logo" q:key="6N_0"><path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path></svg>
                <span style="padding-bottom:0px;margin-left:5px;font-size:.75rem;padding-top:2px">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </DesktopFooter>
      <DesktopRightColumn></DesktopRightColumn>
    </DesktopLayout>
    </>
  );
});
