import { component$, useStyles$ } from '@builder.io/qwik';
import styles from './desktop-right-column.css?inline';

export const DesktopRightColumn = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="right-column"></div>
    </>
  );
});

