/*! Built with http://stenciljs.com */
import { h } from '../agc-toaster.core.js';

class AgcToaster {
    render() {
        return (h("div", { ref: c => this.toasterDiv = c, class: "agc-toaster" }));
    }
    showToast(notification) {
        var style = getComputedStyle(this.toasterDiv);
        var duration = parseInt(style.getPropertyValue('--agc-animation-duration').replace('s', '')) * 1000;
        this.toasterDiv.textContent = notification;
        this.toasterDiv.classList.add('show');
        setTimeout(() => {
            this.toasterDiv.classList.remove('show');
        }, duration + 500);
    }
    static get is() { return "agc-toaster"; }
    static get properties() { return {
        "showToast": {
            "method": true
        }
    }; }
    static get style() { return "agc-toaster{--agc-animation-duration:2.5s}agc-toaster .agc-toaster{visibility:hidden;min-width:var(--agc-toaster-min-width,250px);margin:var(--agc-toaster-margin,0 0 0 -125px);background-color:var(--agc-toaster-bg-color,#333);color:var(--agc-toaster-color,#fff);text-align:var(--agc-toaster-text-align,center);border-radius:var(--agc-toaster-border-radius,2px);padding:var(--agc-toaster-padding,16px);z-index:var(--agc-toaster-z-index,1);left:var(--agc-toaster-position-left,50%);bottom:var(--agc-toaster-position-bottom,30px);position:var(--agc-toaster-position,fixed)}agc-toaster .agc-toaster.show{visibility:visible;-webkit-animation:fadein var(--agc-fade-in-duration,.5s),fadeout var(--agc-fade-out-duration,.5s) var(--agc-animation-duration,2.5s);animation:var(--agc-fade-in-duration,.5s),fadeout var(--agc-fade-out-duration,.5s) var(--agc-animation-duration,2.5s)}\@-webkit-keyframes fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}\@keyframes fadein{0%{bottom:0;opacity:0}to{bottom:30px;opacity:1}}\@-webkit-keyframes fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}\@keyframes fadeout{0%{bottom:30px;opacity:1}to{bottom:0;opacity:0}}"; }
}

export { AgcToaster };
