import type { ConfiguracionGlobal, InicioData, Locutor, Programa, EmisionAnterior } from "../types/strapi.interface";

const STRAPI_URL = 'https://backend-radio-91v4.onrender.com/api';

// Función para obtener la Configuración Global
export async function obtenerConfiguracion() : Promise<ConfiguracionGlobal | null> {
  try {
    const respuesta = await fetch(`${STRAPI_URL}/configuracion-global?populate=*`);
    const json = await respuesta.json();
    return json.data;
  } catch (error) {
    console.error('Error conectando a Strapi (Configuración):', error);
    return null;
  }
}

// Inicio
export async function obtenerInicio() : Promise<InicioData | null> {
  try {
    const respuesta = await fetch(`${STRAPI_URL}/inicio?populate=*`);
    const json = await respuesta.json();
    return json.data;
  } catch (error) {
    console.error('Error conectando a Strapi (Inicio):', error);
    return null;
  }
}

// Locutores
export async function obtenerLocutores() : Promise<Locutor[]> {
  try {
    const respuesta = await fetch(`${STRAPI_URL}/locutors?populate=*&sort=orden:asc`);
    if (!respuesta.ok) return [];
    const json = await respuesta.json();
    return json.data || [];
  } catch (error) {
    console.error('Error conectando a Strapi (Locutores):', error);
    return [];
  }
}

// Programas
export async function obtenerProgramas() : Promise<Programa[]> {
  try {
    const respuesta = await fetch(`${STRAPI_URL}/programas?populate=*&sort=hora_inicio:asc`);
    if (!respuesta.ok) return [];
    const json = await respuesta.json();
    return json.data || [];
  } catch (error) {
    console.error('Error conectando a Strapi (Programas):', error);
    return [];
  }
}

// Emisiones Anteriores
export async function obtenerEmisiones() : Promise<EmisionAnterior[]> {
  try {
    const respuesta = await fetch(`${STRAPI_URL}/emision-anteriors?populate=*&sort=fecha:desc`);
    if (!respuesta.ok) return [];
    const json = await respuesta.json();
    return json.data || [];
  } catch (error) {
    console.error('Error conectando a Strapi (Emisiones):', error);
    return [];
  }
}