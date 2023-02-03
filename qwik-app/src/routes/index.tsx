import { component$, useContext } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import type { IThemeConfigData } from '../components/admin-dashboard/theme-config-data';
import { ThemeConfigContext } from '../components/admin-dashboard/desktop-layout/desktop-layout';

export default component$(() => {

  const themeConfig = useContext<IThemeConfigData>(ThemeConfigContext);

  return (
    <>
      <div style="padding: 40px 10px 10px 40px">
        <div style="display: flex; flex-direction: column">
          <div style="padding-bottom: 20px">
            <span>Configurations</span>
          </div>
          <div style="padding-bottom: 10px">
            <input type="checkbox" id="myCheckbox"
              checked={themeConfig.isHeaderHidden}
              onChange$={(event) => { 
                themeConfig.isHeaderHidden = event.target.checked;
              }} />
            <label style="padding-left: 5px">Hide header</label>
          </div>
          <div style="padding-bottom: 10px">
            <input type="checkbox" id="myCheckbox"
              checked={themeConfig.isFooterHidden}
              onChange$={(event) => {
                themeConfig.isFooterHidden = event.target.checked;
              }} />
            <label style="padding-left: 5px">Hide footer</label>
          </div>
          <div style="padding-bottom: 10px">
            <input type="checkbox" id="myCheckbox"
              checked={themeConfig.isRightColumnHidden}
              onChange$={(event) => {
                themeConfig.isRightColumnHidden = event.target.checked;
              }} />
            <label style="padding-left: 5px">Hide right column</label>
          </div>
          <div style="padding-bottom: 10px">
            <input type="checkbox" id="myCheckbox"
              checked={themeConfig.isLeftColumnHidden}
              onChange$={(event) => {
                themeConfig.isLeftColumnHidden = event.target.checked;
              }} />
            <label style="padding-left: 5px">Hide left column</label>
          </div>
          <div style="padding-bottom: 10px">
            <input type="checkbox" id="myCheckbox"
              checked={themeConfig.showMinifier}
              onChange$={(event) => {
                themeConfig.showMinifier = event.target.checked;
              }} />
            <label style="padding-left: 5px">Show minifier</label>
          </div>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to Qwik',
  meta: [
    {
      name: 'description',
      content: 'Qwik site description',
    },
  ],
};
