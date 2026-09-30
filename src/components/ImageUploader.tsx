import React, { useEffect, useRef, useState, type ChangeEvent } from "react";
import { uploadToCloudinary } from "../services/cloudinaryService";
import { saveMediaUrl } from "../services/mediaService";

export const ImageUploader: React.FC = () => {
    const [imageURL, setImageURL] = useState<string>('');
    const [previewURL, setPreviewURL] = useState<string>('');
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const objectURLRef = useRef<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        return () => {
            if (objectURLRef.current) {
                URL.revokeObjectURL(objectURLRef.current);
            }
        };
    }, []);

    const clearImageState = () => {
        if (objectURLRef.current) {
            URL.revokeObjectURL(objectURLRef.current);
            objectURLRef.current = null;
        }

        setSelectedFile(null);
        setPreviewURL('');
        setImageURL('');

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    //funcion que se ejecuta al seleccionar archivo
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files || files.length === 0) return;

        const file = files[0];
        const localPreviewURL = URL.createObjectURL(file);

        clearImageState();
        objectURLRef.current = localPreviewURL;
        setSelectedFile(file);
        setPreviewURL(localPreviewURL);
    };

    const handleSave = async () => {
        if (!selectedFile) return;

        setLoading(true);

        try {
            const uploadedURL = await uploadToCloudinary(selectedFile);
            if (!uploadedURL) return;

            if (objectURLRef.current) {
                URL.revokeObjectURL(objectURLRef.current);
                objectURLRef.current = null;
            }

            setPreviewURL(uploadedURL);
            setImageURL(uploadedURL);
            await saveMediaUrl(uploadedURL);
        } finally {
            setLoading(false);
        }
    };

    //renderizado del componente
    return (
        <div className="mx-auto max-w-md p-6 font-sans">
            <h2 className="mb-4 text-xl font-bold text-gray-800 dark:text-gray-100">
                Sube y renderiza tu imagen
            </h2>

            {/* Input para seleccionar archivos*/}
            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                disabled={loading}
                className="block w-full text-sm text-gray-500 file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-white hover:file:bg-blue-700 disabled:opacity-50 dark:text-gray-400"
            />

            {/* Indicador visual de carga */}
            {loading && (
                <p className="mt-3 text-sm font-medium text-blue-600 animate-pulse">
                    Subiendo imagen a Cloudinary...
                </p>
            )}

            {/* Renderizado condicional: Solo se muestra si existe preview local o remota */}
            {previewURL && (
                <div className="mt-6 space-y-3 rounded-lg border border-gray-200 p-4 shadow-sm dark:border-gray-700">
                    {imageURL && (
                        <p className="text-sm font-bold text-emerald-600">
                            &iexcl;Imagen subida con &eacute;xito!
                        </p>
                    )}

                    {/* Vista previa de la imagen */}
                    <div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800">
                        <img
                            src={previewURL}
                            alt="Vista previa"
                            className="max-h-72 w-full object-cover"
                        />
                    </div>

                    {!imageURL && (
                        <div className="flex gap-3">
                            <button
                                type="button"
                                onClick={handleSave}
                                disabled={loading || !selectedFile}
                                className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                Guardar
                            </button>
                            <button
                                type="button"
                                onClick={clearImageState}
                                disabled={loading}
                                className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-800"
                            >
                                Cancelar
                            </button>
                        </div>
                    )}

                    {/* Campo para copiar/ver la URL generada */}
                    {imageURL && (
                        <div className="space-y-1">
                            <label className="text-xs text-gray-500 dark:text-gray-400">
                                URL de la imagen:
                            </label>
                            <input
                                type="text"
                                value={imageURL}
                                readOnly
                                className="w-full rounded-md border border-gray-300 bg-gray-50 p-2 text-xs text-gray-700 focus:outline-none dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    );

}
