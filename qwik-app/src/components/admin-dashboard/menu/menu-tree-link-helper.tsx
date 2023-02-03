import { component$, useSignal } from '@builder.io/qwik';
import type { INavigationMenu } from '../menu/NavigationMenu';

export const MenuTreeLinkHelper = component$((props: { menu: INavigationMenu }) => {

  const isOpen = useSignal<boolean>(false);

  return (
    <>
      <div class={`${props.menu.HasImage ? "dnet-tree-cmp-link" : "dnet-tree-cmp-link no-image"} `}>
        {props.menu.Children.length > 0 ? (
          <a>
            {props.menu.IsNode || props.menu.Children.length > 0 ? (
              <span class="menu-item-parent">{props.menu.Text}</span>
            ) : null}
            <b class="collapse-sign">
              {!isOpen.value ? (
                <span>
                  <svg class="bi bi-chevron-right" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              ) : null}
              {isOpen.value ? (
                <span>
                  <svg class="bi bi-chevron-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                  </svg>
                </span>
              ) : null}
            </b>
          </a>
        ) : null}
        {props.menu.Children.length <= 0 ? (
          <a href={props.menu.Link}>
            {props.menu.IsNode || props.menu.Children.length > 0 ? (
              <span class="menu-item-parent">{props.menu.Text}</span>
            ) : null}
          </a>
        ) : null}
      </div>
    </>
  );
});

