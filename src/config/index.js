import axios from 'axios';

const url = 'https://moneyxonline.herokuapp.com/api/currencies';

export default async (METHOD, data) => axios[METHOD](url, data);
