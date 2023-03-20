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
        const address = new URL('../assets/contentlist.json', import.meta.url).href;
        fetch(address).then((response) => {
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
            ${this.topic.map(topic => html`
            <div class="item">
                <info-card heading="${topic.heading}" description="${topic.description}" image="${topic.image}" topText="${topic.topText}"></info-card>
            </div>
            `)}
        </div>
        `;
    }

}
customElements.define(Amogus.tag, Amogus);