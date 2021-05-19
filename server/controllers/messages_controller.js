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
    const index = messages.findIndex(messages => messages.id === req.params.id);
    let message = messages[index];

    messages[index] = {
      id: message.id,
      text: req.body.text || message.text ,
      time: message.time 
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