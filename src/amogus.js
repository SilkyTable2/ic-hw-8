import { LitElement, html, css } from 'lit';
import "./info-card.js";


export class Amogus extends LitElement {
    static get tag() {
        return 'team-roster';
    }
    
    static get properties() {
        return {
            topic: { type: Array },
            title: { type: String },
        }
    }

    constructor() {
        super();
        this.topic = [
            {
                "heading": "Hit game, Among Us",
                "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F55h82e.jpg&f=1&nofb=1&ipt=598bf0d903eaf811e3775698c8e2e5e88f9261ca3886a327a2ce46d9e49fac4f&ipo=images",
                "description": "sussus amogus"
            },
        
            {
                "heading": "Hit game, Among Us",
                "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F55h82e.jpg&f=1&nofb=1&ipt=598bf0d903eaf811e3775698c8e2e5e88f9261ca3886a327a2ce46d9e49fac4f&ipo=images",
                "description": "sussus amogus"
            },
        
            {
                "heading": "Hit game, Among Us",
                "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F55h82e.jpg&f=1&nofb=1&ipt=598bf0d903eaf811e3775698c8e2e5e88f9261ca3886a327a2ce46d9e49fac4f&ipo=images",
                "description": "sussus amogus"
            }
        ];
        this.title = "New Title";
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
                <info-card heading="${topic.heading}" description="${topic.description}" image="${topic.image}"></info-card>
            </div>
            `)}
        </div>
        `;
    }

}
customElements.define(Amogus.tag, Amogus);