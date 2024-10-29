// config.js
export const LOCAL = process.env.REACT_APP_LOCAL;
export const S3_BUCKET_URL = 'https://emil-soleymani-portfolio-markdown.s3.amazonaws.com/';
export const LOCAL_URL = './portfolio-markdown/';

export function getCorrectUrl(url) {
  if (LOCAL === "true") {
    // Remove the default S3_BUCKET prefix if LOCAL
    const n = S3_BUCKET_URL.length;
    url = url.slice(n);
    // Add LOCAL_URL to beginning instead
    url = LOCAL_URL + url;
  }
  return url;
}
