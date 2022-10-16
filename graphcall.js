import fetch from "node-fetch";
function getPosts(){}

  var result = []
  
  fetch("https://api.thegraph.com/subgraphs/name/pierregvx/arbithack", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    query: `
    {
      users(first: 5) {
        id
        deposit
        swap
        redeem
      }
    }
      `,
  }),
})
  .then((res) => res.json())
  .then((result) => {console.log(result.data.users)});