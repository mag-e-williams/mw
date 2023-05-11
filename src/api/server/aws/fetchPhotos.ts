import AWS from 'aws-sdk';
import type { Photo } from 'api/types/photos/photo';

const AWS_CONFIG_VERSION = 'v4';
const BUCKET_NAME = 'film-photos';

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
  signatureVersion: AWS_CONFIG_VERSION,
});

export async function fetchPhotos(): Promise<Photo[]> {
  // Configure AWS SDK
  const s3 = new AWS.S3();

  // Set parameters for listing objects in the bucket
  const params: AWS.S3.ListObjectsV2Request = {
    Bucket: BUCKET_NAME,
  };

  try {
    // Retrieve the list of objects from the bucket
    const response: AWS.S3.ListObjectsV2Output = await s3.listObjectsV2(params).promise();

    // Extract the photo keys from the response
    const photoKeys: Photo[] = response.Contents
      ? response.Contents.map((photo) => ({
          url: `https://${BUCKET_NAME}.s3.amazonaws.com/${photo.Key || ''}`,
          title: photo.Key,
        }))
      : [];

    return photoKeys;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error retrieving photos from S3:', error);
    throw error;
  }
}
