import { component$, useStyles$ } from '@builder.io/qwik';
import type { INavigationMenu } from '../menu/NavigationMenu';
import { MenuTree } from '../menu/menu-tree';
import styles from './desktop-navigation-menu.css?inline';

export const DesktopNavigationMenu = component$(((props: { menus: INavigationMenu[] }) => {
  useStyles$(styles);

  return (
    <>
      <div class="dnet-desktop-navigation-menu">
        <nav>
          <ul>
            {props.menus.map((menu, index) => (
              <MenuTree menu={menu} key={index}/>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}));

