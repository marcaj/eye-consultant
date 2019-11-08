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
import noJs from './scripts/noJs.js';
import imgLazy from './scripts/imgLazy.js';

noJs();
menu();
hero();
animate();
imgLazy();
scrollTop();
feather.replace();
