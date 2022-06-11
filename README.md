```js
const tab = [
    {
        id: 123,
        url: "fefefef",
    },
    {
        id: 33,
        url: "fefefefefeffeef",
    },
    {
        id: 12443,
        url: "fefeeff",
    },
];

console.log(tab.map((a) => a.url));

console.log(tab.filter((a) => a.id > 100));

console.log(tab.filter((a) => a.id > 40).map((a) => a.url));

console.log(tab.find((a) => a.id > 30));
```


Code rendering : https://htmlpreview.github.io/?
