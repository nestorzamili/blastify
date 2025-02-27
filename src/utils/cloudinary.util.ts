import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const MAX_FILE_SIZE = 10 * 1024 * 1024;

export const uploadToCloudinary = async (
  buffer: Buffer
): Promise<CloudinaryUploadResult> => {
  if (buffer.byteLength > MAX_FILE_SIZE) {
    throw new Error("File size exceeds 10MB limit.");
  }

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "whatsapp-blast",
        resource_type: "auto",
        use_filename: true,
      },
      (error, result) => {
        if (error) return reject(error);
        if (!result) return reject(new Error("Upload failed"));
        resolve({
          public_id: result.public_id,
          secure_url: result.secure_url,
          format: result.format,
        });
      }
    );

    const readableStream = new Readable({
      read: () => {
        readableStream.push(buffer);
        readableStream.push(null);
      },
    });

    readableStream.pipe(uploadStream);
  });
};

export const getOptimizedUrl = (publicId: string, format?: string) => {
  const imageExtensions = ["jpg", "jpeg", "png", "gif", "webp"];

  if (format && imageExtensions.includes(format.toLowerCase())) {
    return cloudinary.url(publicId, {
      fetch_format: "auto",
      quality: "auto",
    });
  }

  return cloudinary.url(publicId);
};
