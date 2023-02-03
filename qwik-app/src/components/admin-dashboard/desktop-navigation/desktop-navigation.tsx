import { component$, useStyles$, Slot } from '@builder.io/qwik';
import styles from './desktop-navigation.css?inline';

export const DesktopNavigation = component$(() => {
  useStyles$(styles);

  return (
    <>
      <div class="table">
        <div class="navigation-row">
          <Slot name="companyLogo" />
        </div>
        <div class="navigation-row navigation-flex">
          <Slot name="menu" />
        </div>
        <div class="navigation-row">
          <Slot name="minifier" />
        </div>
      </div>
    </>
  );
});

