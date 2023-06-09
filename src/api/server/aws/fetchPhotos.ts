import type { Photo } from 'api/types/photos/Photo';
import AWS from 'aws-sdk';

const AWS_CONFIG_VERSION = 'v4';
const BUCKET_NAME = 'film-photos';
const PHOTOS_PER_PAGE = 20; // Number of photos to retrieve per page

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: AWS_CONFIG_VERSION,
});

/*
Retrieve Photos from AWS S3 Storage
*/

export async function fetchPhotos(startAfter?: string): Promise<Photo[]> {
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    signatureVersion: 'v4',
  });

  // Set parameters for listing objects in the bucket
  let awsParams: AWS.S3.ListObjectsV2Request = {
    Bucket: BUCKET_NAME,
    MaxKeys: PHOTOS_PER_PAGE,
  };

  if (startAfter) {
    awsParams = {
      ...awsParams,
      StartAfter: startAfter,
    };
  }

  try {
    // Retrieve the list of objects from the bucket
    const response: AWS.S3.ListObjectsV2Output = await s3.listObjectsV2(awsParams).promise();

    // Extract the photo keys from the response
    const photoKeys: Photo[] = response.Contents
      ? response.Contents.filter((photo) => photo.Key !== undefined && photo.Key !== '').map(
          (photo) => ({
            url: `https://${BUCKET_NAME}.s3.amazonaws.com/${photo.Key || ''}`,
            key: photo.Key || '',
          }),
        )
      : [];

    return photoKeys;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving photos from S3:', error);
    throw error;
  }
}
