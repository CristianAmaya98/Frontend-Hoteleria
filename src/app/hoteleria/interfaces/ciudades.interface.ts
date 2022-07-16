export interface CiudadesResponse {
    data: CiudadResponseDatum[];
    meta: Meta;
}

export interface CiudadResponseDatum {
    id: number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    nombre: string;
    alojamientos: number;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    descripcion: string;
    imagen: Imagen;
}

export interface Imagen {
    data: Data;
}

export interface Data {
    id: number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: Formats;
    hash: string;
    ext: EXT;
    mime: MIME;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export enum EXT {
    JPEG = ".jpeg",
    Jpg = ".jpg",
    Webp = ".webp",
}

export interface Formats {
    thumbnail: Large;
    medium?: Large;
    small: Large;
    large?: Large;
}

export interface Large {
    name: string;
    hash: string;
    ext: EXT;
    mime: MIME;
    path: null;
    width: number;
    height: number;
    size: number;
    url: string;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImageWebp = "image/webp",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}
