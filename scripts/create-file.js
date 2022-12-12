const fse = require('fs-extra');
fse
  .outputFile(
    'pages/appendix/detail-appendix.mdx',
    '# Detail appendix \n [Edit this page in github](https://github.com/muhammadabdissalam/hello-nextra/blob/main/pages/appendix/detail-appendix.mdx)',
  )
  .then(() => {
    console.log('created detail-appendix');
  });
