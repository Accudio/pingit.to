const { signAddon } = require('sign-addon');

const dotenv = require("dotenv")
dotenv.config()

signAddon({
  xpiPath: './build.xpi',
  version: '1.0.0',
  apiKey: process.env.FIREFOX_API_KEY,
  apiSecret: process.env.FIREFOX_API_SECRET,
  id: 'firefox@pintit.to',
})
  .then(function (result) {
    if (result.success) {
      console.log('The following signed files were downloaded:');
      console.log(result.downloadedFiles);
      console.log('Your extension ID is:');
      console.log(result.id);
    } else {
      console.error('Your add-on could not be signed!');
      console.error('Error code: ' + result.errorCode);
      console.error('Details: ' + result.errorDetails);
    }
    console.log(result.success ? 'SUCCESS' : 'FAIL');
  })
  .catch(function (error) {
    console.error('Signing error:', error);
  });
