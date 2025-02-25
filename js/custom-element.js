class CustomFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <footer class="footer">
                <p>Derechos de Roberto Orellana y Daniel Mrtinez</p>
            </footer>
        `;
    }
}
customElements.define('custom-footer', CustomFooter);
