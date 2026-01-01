import { createRoot } from 'react-dom/client';

import App from './App';

export default defineContentScript({
  matches: ['*://github.com/*/*'],
  async main(ctx) {
    const ui = createIntegratedUi(ctx, {
      position: 'inline',
      anchor: 'nav[aria-label="GitHub Breadcrumb"]',
      onMount(container) {
        const wrapper = document.createElement('div');
        wrapper.style.display = 'inline-grid';
        wrapper.style.placeContent = 'center';
        wrapper.style.width = '100%';
        wrapper.style.height = '100%';
        container.appendChild(wrapper);

        const root = createRoot(wrapper);
        root.render(<App />);

        return { root, wrapper };
      },
      onRemove(elements) {
        elements?.root.unmount();
        elements?.wrapper.remove();
      },
    });

    ui.mount();
  },
});
