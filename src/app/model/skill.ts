export class Skill {
    id: number;
    nombreSkill: string;
    porcentaje: number;

    constructor(nombreSkill: string, porcentaje:number){
        this.nombreSkill = nombreSkill;
        this.porcentaje = porcentaje;
    }
}