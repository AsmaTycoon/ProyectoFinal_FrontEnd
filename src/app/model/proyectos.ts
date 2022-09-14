export class Proyectos {
    id: number;
    nombreProyecto: string;
    descripcionP: string;
    imagenP: string;

    constructor(nombreProyecto: string, descripcionP: string, imagenP: string){
        this.nombreProyecto = nombreProyecto;
        this.descripcionP = descripcionP;
        this.imagenP = imagenP;
    }
}
