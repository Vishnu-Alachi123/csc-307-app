import express from "express";

const app = express();
const port = 8000;

const users = {
    users_list: [
      {
        id: "xyz789",
        name: "Charlie",
        job: "Janitor"
      },
      {
        id: "abc123",
        name: "Mac",
        job: "Bouncer"
      },
      {
        id: "ppp222",
        name: "Mac",
        job: "Professor"
      },
      {
        id: "yat999",
        name: "Dee",
        job: "Aspring actress"
      },
      {
        id: "zap555",
        name: "Dennis",
        job: "Bartender"
      }
    ]
  };
  
app.use(express.json());

const findUserByName = (name) =>  {
    return users["users_list"].filter(
        (user) => user["name"] === name);
};

const findUserByID = (id) => 
    users["users_list"].find((user) => user["id"] === id);

const findUserByNameJob = (name,job) => {
    return users["users_list"].filter(
        (user) => user["name"] === name && user["job"] === job);
}

app.get("/users", (req,res) => {
    const name = req.query.name;
    const job = req.query.job;
    let result = findUserByNameJob(name,job);
    if (result === undefined) {
        res.status(404).send("Resource not Found");
    } else {
        res.send(result);
    }
})

app.get("/users/:id", (req,res) => {
    const id = req.params["id"];
    let result = findUserByID(id);
    if (result === undefined) {
        res.status(404).send("Resource not Found");
    } else {
        res.send(result);
    }
})


app.get("/users", (req,res) => {
    const name = req.query.name;
    if (name != undefined) {
        let result = findUserByName(name);
        result = {users_list: result};
        res.send(result);
    } else {
        res.send(users);
    }
});

app.get("/users", (req, res) => {
    res.send(users);
  });


const addUser = (user) => {
    users["users_list"].push(user);
    return user;
};
 
const deleteUser = (id) => {
    const index = users["users_list"].findIndex((user) => user.id === id);
    if ( index !== -1){
        users["users_list"].splice(index,1);
        return true;
    }
    return false;
}
app.post("/users",(req,res) =>{
    const UsertoAdd = req.body;
    addUser(UsertoAdd);
    res.send();
});

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const success = deleteUser(userId);
    if(success){
        res.status(200).send(`User with id ${userId} deleted.`)
    }else {
        res.status(404).send("User not found.");
    }
});


app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`
  );
});