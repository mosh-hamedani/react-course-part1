
let count = 0; 

const Message = () => {
  console.log('Message called', count);
  count++; 
  return <div>Message {count}</div>;
};

export default Message;
