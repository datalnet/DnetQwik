import { component$, useSignal, $, useContext } from '@builder.io/qwik';
import { MenuTreeLink } from '../menu/menu-tree-link';
import { MenuTreeLinkHelper } from '../menu/menu-tree-link-helper';
import type { INavigationMenu } from '../menu/NavigationMenu';
import { MenuTreeContext } from '../desktop-left-column/desktop-left-column';
import type { IMenuTreeContext } from '../desktop-left-column/desktop-left-column';
import { ThemeConfigContext } from '../desktop-layout/desktop-layout';
import type { IThemeConfigData } from '../theme-config-data';

export const MenuTree = component$((props: { menu: INavigationMenu }) => {

  const _top = useSignal<string | number | undefined>(0);

  const _left = useSignal<string | number | undefined>(0);

  const elementRef = useSignal<HTMLElement>();

  const menuTreeContext = useContext<IMenuTreeContext>(MenuTreeContext);
  
  const themeConfigData = useContext<IThemeConfigData>(ThemeConfigContext);

  const onMouseOver = $(() => {
    if (props.menu.IsNode) {
      if (elementRef != null && elementRef.value != undefined) {

        const clientRectValues = elementRef.value.getBoundingClientRect();

        _top.value = `${clientRectValues.top + themeConfigData.menuLinkTopHelperValue}px`;
        _left.value = `${clientRectValues.left + clientRectValues.width}px`;
      }
    }
    else {
      if (elementRef != null && elementRef.value != undefined) {
        _top.value = elementRef.value.offsetTop;
        _left.value = `${elementRef.value.offsetLeft + elementRef.value.offsetWidth}px`;
      }
    }
  });
 
  return (
    <>
      <li onMouseOver$={onMouseOver} ref={elementRef}>
        <MenuTreeLink menu={props.menu} />
        <div class={`positioning-helper ${menuTreeContext.isOpen.value ? "open" : ""} `} style={{ top: _top.value, left: _left.value }}>
          {!menuTreeContext.isOpen.value ? <MenuTreeLinkHelper menu={props.menu} /> : null}
          {props.menu.Children.length > 0 ? (
            <ul class="width-child">
              {props.menu.Children.map((item, index) => (
                <MenuTree menu={item} key={index}/>
              ))}
            </ul>
          ) : null}
        </div>
      </li>
    </>
  );
});

