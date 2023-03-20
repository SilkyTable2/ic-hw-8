export default async function handler(request, res) {

    const contentlist = [
        {
            "heading": "Hit game, Among Us",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F55h82e.jpg&f=1&nofb=1&ipt=598bf0d903eaf811e3775698c8e2e5e88f9261ca3886a327a2ce46d9e49fac4f&ipo=images",
            "description": "sussus amogus",
            "topText": "Amogus"
        },
        {
            "heading": "Hit game, Among Us",
            "image": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.imgflip.com%2F55h82e.jpg&f=1&nofb=1&ipt=598bf0d903eaf811e3775698c8e2e5e88f9261ca3886a327a2ce46d9e49fac4f&ipo=images",
            "description": "sussus amogus",
            "topText": "Amogus"
        }
    ];
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(contentlist);
  }