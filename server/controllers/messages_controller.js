let messages = [];
let id = 0;

module.exports = {
  create: (req, res) => {
    const {text, time} = req.body;
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages);
  },
  read: (req, res) => {
    res.status(200).send(messages);
  },
  update: (req, res) => {
    let index = null;
    messages.forEach((message, i) =>{
      if (message.id == req.params.id) index = i;
    });
    messages[index] = {
      id: messages[index].id,
      text: messages[index].text || req.body.text,
      time: messages[index].time 
    };
    res.status(200).send(messages)
  },
  delete: (req, res) => {
    messages.findIndex((elem, i) => {
      if(elem.id == req.params.id){
        messageIndex = i
      }
      messages.splice(messageIndex, 1)
    })
    res.status(200).send(messages)
  }
}