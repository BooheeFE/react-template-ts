const isDevelopment = process.env.NODE_ENV === 'rc';
const isProduction = process.env.NODE_ENV === 'production';
const ProcessNode = JSON.stringify(process.env.NODE_ENV);
const ProcessApi =
  JSON.stringify(process.env.API_ENV) || JSON.stringify(process.env.NODE_ENV);
const ProcessCode = JSON.stringify(process.env.CODE_ENV);

module.exports = {
  isDevelopment,
  isProduction,
  NODE_ENV: ProcessNode,
  API_ENV: ProcessApi,
  CODE_ENV: ProcessCode
};
