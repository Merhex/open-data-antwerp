export interface Overtreding {
    id: number;
    datum_vaststelling_jaar: string;
    datum_vaststelling_maand: string;
    datum_vaststelling: Date;
    opnameplaats_straat: string;
    opnameplaats_rijrichting_gaand: string;
    opnameplaats_zone_snelheid: number;
    aantal_passanten: number;
    aantal_overtredingen_snelheid: number;
    aantal_overtredingen_roodlicht: number;
}
