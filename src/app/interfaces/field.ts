export interface Field {
    id: number;
    text: string;
    type: string;
    required: boolean;
    options?: any[];
    min?: number;
    max?: number;
    _option_id?: any;
    _input?: any;

}
