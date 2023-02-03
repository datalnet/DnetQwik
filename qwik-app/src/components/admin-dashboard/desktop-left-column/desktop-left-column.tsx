import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './desktop-left-column.css?inline';

export const DesktopLeftColumn = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="left-column">
        <Slot />
      </div>
    </>
  );
});

