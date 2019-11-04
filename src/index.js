import './index.html';
import './main.less';
import './icon.png';
import './site.webmanifest';
import './favicon.ico';

import feather from '../node_modules/feather-icons/dist/feather.js';
import menu from './scripts/menu.js';
import hero from './scripts/hero.js';
import animate from './scripts/animate.js';
import scrollTop from './scripts/scrollTop.js';

menu();
hero();
animate();
scrollTop();
feather.replace();
