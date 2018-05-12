var friendArray = [
    {
    "name":"Jimi Hendrix",
    "photo":"https://i.imgur.com/moRJd9E.jpg",
    "scores":[
       5,
       1
     ]
   },  {
    "name":"Post Malone",
    "photo":"https://i.imgur.com/9tldGwD.jpg",
    "scores": [
       1,
       5
     ]
   },  {
    "name":"Rich Homie Quan",
    "photo":"data:image/jpeg;base64,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",
    "scores":[
       3,
       3
     ]
   }
  
  ];
  
  
  // export the array. 
  module.exports = friendArray;