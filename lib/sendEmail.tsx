import axios from 'axios';

const sendEmail = async (name: string ,email: string, phone: string, help: string, msg: string) => {
  return axios({
    method: 'post',
    url: '/api/send-mail',
    data: JSON.stringify({
        name, email, phone, help, msg,
    }),
    headers: {
        "Content-Type": "application/json",
    },
  });
};

export default sendEmail;