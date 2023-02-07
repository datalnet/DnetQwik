import { component$, useContext } from '@builder.io/qwik';
import type { INavigationMenu } from '../menu/NavigationMenu';
import { ThemeConfigContext } from '../desktop-layout/desktop-layout';
import type { IThemeConfigData } from '../theme-config-data';
import { MenuTreeContext } from '../desktop-left-column/desktop-left-column';
import type { IMenuTreeContext } from '../desktop-left-column/desktop-left-column';

export const MenuTreeLink = component$((props: { menu: INavigationMenu }) => {

  const menuTreeContext = useContext<IMenuTreeContext>(MenuTreeContext);

  const themeConfigData = useContext<IThemeConfigData>(ThemeConfigContext);

  return (
    <>
      <div class={props.menu.HasImage ? "dnet-tree-cmp-link" : "dnet-tree-cmp-link no-image"}>
        {/* <div class="dnet-tree-cmp-link-indicator"></div> */}
        {props.menu.Children.length > 0 ? (
          <a onClick$={
            () => {
              if (!themeConfigData.isMinified) {
                menuTreeContext.isOpen.value = !menuTreeContext.isOpen.value;
              }
            }}
            class={props.menu.IconClass != '' ? "has-image" : ""}>
            {props.menu.IconClass != '' ? (
              <div class="dnet-menu-img" style="backgroundColor: transparent; borderColor: white">
                <span class={props.menu.IconClass} />
                {!themeConfigData.isMinified || (themeConfigData.isMinified && !props.menu.IsNode) ? (
                  <span class="dnet-menu-text">{props.menu.Text}</span>
                ) : <span class="dnet-menu-text">{props.menu.MinifiedText}</span>}
              </div>
            ) : (
              !themeConfigData.isMinified ?
                (
                  <>
                    <div class="dnet-tree-cmp-link-indicator"></div>
                    <span class="dnet-menu-text">{props.menu.Text}</span>
                  </>
                ) : (
                  <>
                    <div class="dnet-tree-cmp-link-indicator"></div>
                    <span class="dnet-menu-text">{props.menu.MinifiedText}</span>
                  </>
                )
            )}

            <b class="collapse-sign">
              {!menuTreeContext.isOpen.value ? (
                <span>
                  <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              ) : null}

              {menuTreeContext.isOpen.value ? (
                <span>
                  <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              ) : null}
            </b>
          </a>
        ) : null}

        {props.menu.Children.length <= 0 ?
          <a href={props.menu.Link} class={props.menu.IconClass ? "has-image" : null}>
            {props.menu.IconClass ? (
              <div class="dnet-menu-img" style={{ backgroundColor: "transparent", borderColor: "white" }}>
                <span class={props.menu.IconClass} />
              </div>
            ) : null}
            {(!themeConfigData.isMinified || (themeConfigData.isMinified && !props.menu.IsNode)) ?
              (
                <>
                  <div class="dnet-tree-cmp-link-indicator"></div>
                  <span class="dnet-menu-text">{props.menu.Text}</span>
                </>
              ) : (
                <>
                  <div class="dnet-tree-cmp-link-indicator"></div>
                  <span class="dnet-menu-text">{props.menu.MinifiedText}</span>
                </>
              )}
          </a>
          : null}
      </div>
    </>
  );
});

