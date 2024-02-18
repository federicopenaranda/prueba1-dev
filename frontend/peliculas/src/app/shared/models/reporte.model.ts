export interface Reporte {
	id_reporte: number;
	codigo_reporte: string;
	nombre_reporte: string;
	descripcion_reporte: string;
	estado_reporte: boolean;
	ruta_reporte: string;
	fk_id_tipo_proceso: number;
}