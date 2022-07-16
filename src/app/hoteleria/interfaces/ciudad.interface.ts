export interface CiudadResponse {
    data: CiudadResponseData;
    meta: Meta;
}

export interface CiudadResponseData {
    id: number;
    attributes: PurpleAttributes;
}

export interface PurpleAttributes {
    nombre: string;
    alojamientos: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcion: string;
    imagen: Imagen;
    hotels: Hotels;
}

export interface Hotels {
    data: any[];
}

export interface Imagen {
    data: ImagenData;
}

export interface ImagenData {
    id: number;
    attributes: FluffyAttributes;
}

export interface FluffyAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export interface Formats {
    thumbnail: Small;
    small: Small;
}

export interface Small {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

export interface Meta {
}
