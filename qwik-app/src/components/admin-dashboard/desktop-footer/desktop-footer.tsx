import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './desktop-footer.css?inline';

export const DesktopFooter = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="footer">
        <div class="footer-content">
          <Slot />
        </div>
      </div>
    </>
  );
});

