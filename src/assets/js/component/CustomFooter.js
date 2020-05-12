class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.shadowDOM = this.attachShadow({
            mode: "open"
        });
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        footer{
            max-height: 100px;
            padding: 10px;
            background-color: #FF8C00;
            text-align: center;
            margin-bottom: 0px;
        }
        
        footer a{
            text-decoration: none;
            color: #2D3E50;
        }
        
        footer a:hover{
            text-decoration: none;
            color: #DC143C;
        }
        </style>
        <footer>
		    <p>Submission <a href="https://www.dicoding.com/" target="blank">Dicoding</a>. Fundamental Front End. 2020</p>
	    </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);