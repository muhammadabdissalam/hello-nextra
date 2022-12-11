const fse = require('fs-extra');
fse
  .outputFile(
    'pages/institution/detail-institution.mdx',
    '# Detail Institution \n [Edit this page in github](https://github.com/muhammadabdissalam/hello-nextra/blob/main/pages/institution/detail-institution.mdx)',
  )
  .then(() => {
    console.log('created detail-institution');
  });
