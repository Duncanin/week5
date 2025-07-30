
import './assets/scss/all.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { Tooltip, Tab, Dropdown, Modal, Collapse, Ripple, initTWE } from "tw-elements";


// 確保 DOM 載入完成後才初始化
document.addEventListener("DOMContentLoaded", () => {
    initTWE({ Tooltip, Tab, Dropdown, Modal, Collapse, Ripple });
});
