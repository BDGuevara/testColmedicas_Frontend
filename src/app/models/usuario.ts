import { Plan } from "./plan";
import { Tipoid } from "./tipoid";

export class Usuario {
  id: number;
  tipoidentificacion: Tipoid;
  numerodocumento: string;
  fechanacimiento: Date;
  primernombre: string;
  segundonombre: string;
  primerapellido: string;
  segundoapellido: string;
  direccionresidencia: string;
  numerocelular: string;
  email: string;
  plan: Plan;
}
