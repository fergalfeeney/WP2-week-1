const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let contacts = [];

app.post('/contacts', (req, res) => {
  const contact = req.body;
  console.log(contact); // to check what was received
  contacts.push(contact);
  res.send('Contact has been added to the database');
  console.log(`Contact name is ${contact.name}. Number of contacts is ${contacts.length}`);
});

app.get('/contacts', (req, res) => {
  res.send(contacts);
});

  app.get('/contacts/:id', (req,res) => { 

 

         let id = req.params.id; 
    
          res.json(contacts[id]); 
    
      }) 

     app.delete('/contact/:id',(req, res) => 

 { 

    let id = req.params.id;  
    console.log(`removing contact ${contacts[id].name}`) 
    contacts.splice(req.params.id, 1); 
    res.send(contact); 

 

  }) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
