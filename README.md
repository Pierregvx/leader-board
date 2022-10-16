# brigdooor stats 
this project enables the user to participate in a friendly competition : each one of them earn some xps when interacting with the contract that enables them to climb into the leaderboard.

The users can compete on 
- Deposit Volume
- Swap Volume
- Redeem Volume
- Volume exchanged on the plattform
- How many chains they bridged from

this app enables the user to access full transparency on the protocol itself and the activity of its users.

Later on it will be cross chain to collect moredatas and can be included in a dapp front end. 
This could also be a way to incentivise the users by giving the top ranked some rewards.

## Tech stack 

### the graph 
The datas are collected from the bridge contract on arbitrum thanks to the graph.
The graph is hosted on the hosted service  [here](https://thegraph.com/hosted-service/subgraph/pierregvx/arbithack)
#### Update the schema or the subgraph :```graph codegen```
#### Deploy the subgraph ``` graph deploy```

### Dune dashboard

Dunes allows us to collect statistics about the bridge and token contract thanks to SQL queries to the blockchain. The dashboard is open source and forkable on the plateform [dashboard](https://dune.com/pierrevx/synapsedashboard)

### Front end 

run ```npm run dev``` to deploy on the localhost.
the app is deployed on [vercel(https://leaderboard-eight.vercel.app/)
