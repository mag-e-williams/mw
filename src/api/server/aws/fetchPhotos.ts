import AWS, { AWSError } from 'aws-sdk';
import { ListObjectsOutput } from 'aws-sdk/clients/s3';

const AWS_CONFIG_VERSION = 'v4';
const BUCKET_NAME = 'film-photos';
const AWS_REGION = 'us-east-2';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_KEY_ID,
  region: AWS_REGION,
  signatureVersion: AWS_CONFIG_VERSION,
});

const s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: BUCKET_NAME },
});

export function fetchPhotos(): Promise<Array<string> | undefined> {
  const photoUrls = new Promise<Array<string> | undefined>((resolve, reject) => {
    s3.listObjects((err: AWSError, data: ListObjectsOutput) => {
      if (err) {
        return reject(err);
      }
      const photos = data.Contents?.map((photo) => {
        const photoKey = photo.Key;
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const url = `https://${BUCKET_NAME}.s3.amazonaws.com/${photoKey}`;
        return url;
      });
      return resolve(photos);
    });
  });
  return photoUrls;
}
