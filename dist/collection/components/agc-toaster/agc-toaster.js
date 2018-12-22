export class AgcToaster {
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
    static get style() { return "/**style-placeholder:agc-toaster:**/"; }
}
