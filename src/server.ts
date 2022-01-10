import { app } from "./app";

const PORT = process.env.API_PORT || 3333;
const HOST = process.env.API_HOST || 'localhost';

app.listen(PORT as number, HOST, () =>   {
  console.log('The server is running');
});
