const fse = require('fs-extra');
fse
  .outputFile(
    'pages/appendix/review-appendix.mdx',
    '# review appendix \n [Edit this page in github](https://github.com/muhammadabdissalam/hello-nextra/blob/main/pages/appendix/review-appendix.mdx)',
  )
  .then(() => {
    console.log(
      'created review-appendix',
    );
  });
