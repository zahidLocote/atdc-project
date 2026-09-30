const CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

export const uploadToCloudinary = async (file: File): Promise<string | null> => {
    if(!CLOUD_NAME || !UPLOAD_PRESET){
        console.error("Faltan las variables de entorno para Cloudinary.");
        return null;
    }
    
    //API oficial de cloudinary para subir imagenes
    const url = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', UPLOAD_PRESET);

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData,
        });
        if(!response.ok){
            throw new Error('Error al subir la imagen a Cloudinary');
        }
        const data = await response.json();
        //regrsa la URL segura y lista para usarla en la app
        return data.secure_url as string;
    } catch (error) {
        console.error('Error en uploadToCloudinary:', error);
        return null;
    }
};
