import { Component, Method } from '@stencil/core';


@Component({
    tag: 'agc-toaster',
    styleUrl: 'agc-toaster.scss'
})
export class AgcToaster {

    toasterDiv: HTMLDivElement;

    render() {
        return (
            <div ref={c => this.toasterDiv = c as HTMLDivElement} class="agc-toaster"></div>
        );
    }

    @Method()
    showToast(notification) {
        var style = getComputedStyle(this.toasterDiv);
        var duration = parseInt(style.getPropertyValue('--agc-animation-duration').replace('s', '')) * 1000;
        this.toasterDiv.textContent = notification;
        this.toasterDiv.classList.add('show')
        setTimeout(() => {
            this.toasterDiv.classList.remove('show');
        }, duration + 500)
    }
}
