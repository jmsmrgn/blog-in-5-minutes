const { init } = require('contentful-wizard')

init({
  key: process.env.CTF_CDA_ACCESS_TOKEN,
  spaceId: process.env.CTF_SPACE_ID
})
