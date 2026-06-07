// src/interfaces/strapi.ts

export interface ConfiguracionGlobal {
  nombre_estacion: string;
  url_stream: string;
  enlace_facebook: string;
  enlace_whatsapp: string;
  logo_principal?:{ url: string }
}

export interface InicioData {
  titulo_hero: string;
  subtitulo_hero: string;
  texto_nosotros: string;
}

export interface Locutor {
  id: number;
  documentId: string;
  nombre: string;
  alias?: string;
  descripcion?: string;
  orden?: number;
  foto?: { url: string };
}

export interface Programa {
  id: number;
  documentId: string;
  nombre_programa: string;
  dia_semana: string;
  hora_inicio: string;
  hora_fin: string;
  portada?: { url: string };
  locutores?: Locutor[];
}

export interface EmisionAnterior {
  id: number;
  documentId: string;
  titulo: string;
  url_video: string;
  fecha: string;
  descripcion?: string;
  miniatura?: { url: string };
}