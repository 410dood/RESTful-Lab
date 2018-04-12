const express = require('express');
const app = express();
const comedians = [
    { id: 1, name: 'Chris Rock' },
    { id: 2, name: 'Joe Rogan' },
    { id: 3, name: 'Mitch Hedberg' }
];

app.get('/comedians', (request, response) => {
    response.send(comedians);
});
// app.get('/comedians/:id', (request, response) => {
//     response.send(comdedians.id);

app.get('/comedians/:id', (request, response) => {
    let id = request.params.id;
    let comedian = comedians[id - 1];
    // let id = request.params.id;
    // let video = videos.filter((video) => video.id === id))[0];
    response.send(comedian);
    console.log("response.params");
});
app.listen(3000, () => {
    console.log("Listening");
});

// const express = require('express');
// const app = express();
// const videos = [
//     { id: 1, title: "America is the Greatest Country in the United States", url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C" },
//     { id: 2, title: "Micheal Che Matters", url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C" },
//     { id: 3, title: "Baby Cobra", url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C" }
// ];
// app.get('/videos', (request, response) => {
//     response.send(videos);
// });
// app.get('/videos/:id', (request, response) => {
//     let id = request.params.id;
//     let video = videos[id - 1];
//     // let id = request.params.id;
//     // let video = videos.filter((video) => video.id === id))[0];
//     response.send(video);
//     console.log("response.params");
// });
// app.listen(3000, () => {
//     console.log("response.params");
// });
