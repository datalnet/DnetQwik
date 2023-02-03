import { component$, useStyles$, useContext } from '@builder.io/qwik';
import styles from './desktop-minify-menu.css?inline';
import { ThemeConfigContext } from '../desktop-layout/desktop-layout';
import type { IThemeConfigData } from '../theme-config-data';


export const DesktopMinifyMenu = component$(() => {
  useStyles$(styles);

  const state = useContext<IThemeConfigData>(ThemeConfigContext);

  return (
    <>
      <div class="desktop-minify-menu" onClick$={
        () => {
          state.isMinified = !state.isMinified;
        }
      }>
        <div class="minifyme">
          <div class="img-container justify-content-center">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={state.minifierChevronColor} class="bi bi-chevron-left dnet-expand-arrow dnet-expand-arrow1" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
});

