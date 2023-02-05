import { component$, useStyles$, Slot, Signal, createContext, useSignal, useContextProvider } from '@builder.io/qwik';
import styles from './desktop-left-column.css?inline';

export interface IMenuTreeContext {
  isOpen: Signal<boolean>;
}

export const MenuTreeContext = createContext<IMenuTreeContext>('leftColumn');

export const DesktopLeftColumn = component$(() => {
  useStyles$(styles);

  const isOpen = useSignal<boolean>(false);

  const menuTreeService: IMenuTreeContext = {
    isOpen: isOpen,
  };

  useContextProvider(MenuTreeContext, menuTreeService);

  return (
    <>
      <div class="left-column">
        <Slot />
      </div>
    </>
  );
});

