
import { useState } from "react";
import axios from "axios";


// const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=7365e777963cf7664292cb83647a9d98`;

const useImageURL = (imageFile) => {
  const [imageUrl, setImageUrl] = useState(null);
  const uploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);

      const response = await axios.post(image_hosting_api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const imageUrl = response?.data?.data?.display_url || "";
      setImageUrl(imageUrl);

      return imageUrl;
    } catch (error) {
      console.error("Error uploading image:", error);
      
    }
  };

  return { imageUrl, uploadImage };
};

export default useImageURL;
