import { LitElement, html, css } from 'lit';
import "./info-card.js";


export class Amogus extends LitElement {
    static get tag() {
        return 'amogus-list';
    }
    
    static get properties() {
        return {
            topic: { type: Array },
            title: { type: String },
        }
    }

    constructor() {
        super();
        this.topic = [];
        this.title = "New Title";
        this.updateList();
    }

    updateList() {
        const address = new URL('../api/contentlist.js', import.meta.url).href;// it works from the ../assets/contentlist.json, i swear...
        const data = fetch(address).then((response) => { //code bricks during vercel upload if i dont define const data
            if (response.ok) {
                return response.json()
            }
            return [];
        })
        .then((data) => {
            this.topic = data;
        });
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }
        .wrapper {
            border: 2px solid black;
            display: flex;
        }
        .item {
            display: inline-flex;
        }
    `;
    }

    render() {
        return html`
        <h2>${this.title}</h2>
        <div class='wrapper'>
            ${this.topic.map(topics => html`
            <div class="item">
                <info-card heading="${topics.heading}" description="${topics.description}" image="${topics.image}" topText="${topics.topText}"></info-card>
            </div>
            `)}
        </div>
        `;
    }

}
customElements.define(Amogus.tag, Amogus);