import { Storage } from '@google-cloud/storage';
import * as functions from 'firebase-functions';
import * as fs from 'fs';
import { uuid } from 'uuidv4';

const cors = require('cors')({ origin: true });

const storage = new Storage({
  projectId: 'lambe-93400',
  keyFilename: 'lambe-93400.json',
});

export const uploadImage = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    try {
      fs.writeFileSync('/tmp/imageToSave.jpg', request.body.image, 'base64');

      const bucket = storage.bucket('lambe-93400.appspot.com');
      const id = uuid();
      bucket.upload(
        '/tmp/imageToSave.jpg',
        {
          contentType: 'media',
          destination: `/posts/${id}.jpg`,
          metadata: {
            metadata: {
              contentType: 'image/jpge',
              firebaseStorageDownloadTokens: id,
            },
          },
        },
        (err, file: any) => {
          if (err) {
            console.log(err);
            return response.status(500).json({ error: err });
          } else {
            const fileName = encodeURIComponent(file.name);
            const imageUrl =
              'https:/firebasestorage.googleapis.com/v0/b/' +
              bucket.name +
              '/o/' +
              fileName +
              '?alt=media&token=' +
              id;
            return response.status(201).json({ imageUrl });
          }
        },
      );
    } catch (err) {
      console.log(err);
      return response.status(500).json({ error: err });
    }
  });
});
