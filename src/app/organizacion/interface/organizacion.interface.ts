// Interfaz que define la estructura de una persona
export interface Personas {
  id?: number; 
  nombre: string; // Nombre de la persona
  email: string; // Correo electrónico de la persona
  area: Areas; // Área a la que pertenece la persona, relacionada con la interfaz Areas
}

// Interfaz que define la estructura de un área
export interface Areas {
  id?: number; 
  nombre: string; // Nombre del área
}
