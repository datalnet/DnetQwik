import { component$, useStyles$, Slot, createContext, useContextProvider } from '@builder.io/qwik';
import styles from './desktop-layout.css?inline';
import type { IThemeConfigData } from '../theme-config-data';

export const ThemeConfigContext = createContext<IThemeConfigData>('theme-config-context');

export const DesktopLayout = component$(((props: { themeConfig: IThemeConfigData }) => {
  useStyles$(styles);

  useContextProvider(ThemeConfigContext, props.themeConfig);

  return (
    <>
      <div class={`grid-container ${props.themeConfig.isMinified ? "minified" : ""} 
                  ${props.themeConfig.isFooterHidden && !props.themeConfig.isHeaderHidden ? "hidden-footer" : ""}
                  ${props.themeConfig.isHeaderHidden && !props.themeConfig.isFooterHidden ? "hidden-header" : ""}
                  ${props.themeConfig.isHeaderHidden && props.themeConfig.isFooterHidden ? "hidden-footer-and-header" : ""}
                  ${props.themeConfig.isLeftColumnHidden && !props.themeConfig.isRightColumnHidden ? "hidden-left-column" : ""}
                  ${props.themeConfig.isRightColumnHidden && !props.themeConfig.isLeftColumnHidden ? "hidden-right-column" : ""}
                  ${props.themeConfig.isDesktopMode ? "destok-layout" : ""}
                  ${props.themeConfig.isLeftColumnFixed ? "fixed-left-column" : ""}
                  ${props.themeConfig.isHeaderFixed ? "fixed-header" : ""}
                  ${props.themeConfig.isRightColumnHidden && props.themeConfig.isLeftColumnHidden ? "hidden-lateral-columns" : ""}
                  ${props.themeConfig.showMinifier ? "" : "hidden-minifier"}
                  `}>
        <Slot />
      </div>
    </>
  );
}));

