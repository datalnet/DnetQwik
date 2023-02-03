import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './desktop-header.css?inline';

export const DesktopHeader = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="header">
        <div class="header-content">
          <Slot />
        </div>
      </div>
    </>
  );
});

