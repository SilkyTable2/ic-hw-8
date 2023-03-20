
export default async function handler(request, res) {

    const contentlist = [//why JSON.parse: unexpected character line 2, col. 1? There are no trailing commas https://tenor.com/view/scaler-create-impact-dog-coding-programming-gif-25011983
        {
            "heading": "Hit game Among Us",
            "image": "https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c",
            "description": "sussus amogus",
            "topText": "Amogus"
        },
        {
            "heading": "Hit game Among Us",
            "image": "https://external-preview.redd.it/1MuiO5_KW_8rfN3AEGdRxU-p1VEcaQi4bdLb5rBvtjg.png?format=pjpg&auto=webp&s=83247025c60f25bb81bb989c376c58bb9613cd4c",
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