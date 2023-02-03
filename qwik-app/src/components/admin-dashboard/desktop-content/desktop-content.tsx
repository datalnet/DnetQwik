import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './desktop-content.css?inline';

export const DesktopContent = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="content">
        <Slot />
      </div>
    </>
  );
});

