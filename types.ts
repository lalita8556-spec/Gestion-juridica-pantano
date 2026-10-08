export type Estado="En trámite"|"Pendiente de audiencia"|"Archivado";
export type Actuacion={id:string;fecha:string;tipo:string;descripcion:string};
export type Expediente={id:string;radicado:string;asunto:string;partes:string;estado:Estado;actuaciones:Actuacion[]};
export type Documento={id:string;nombre:string;radicado:string;categoria:string;fecha:string;estado:"Pendiente de revisión"|"Clasificado"};
export type Audiencia={id:string;radicado:string;fecha:string;asunto:string;modalidad:"Presencial"|"Google Meet"|"Inspección ocular"};
export type Datos={expedientes:Expediente[];documentos:Documento[];audiencias:Audiencia[]};
