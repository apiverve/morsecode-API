declare module '@apiverve/morsecode' {
  export interface morsecodeOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface morsecodeResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class morsecodeWrapper {
    constructor(options: morsecodeOptions);

    execute(callback: (error: any, data: morsecodeResponse | null) => void): Promise<morsecodeResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: morsecodeResponse | null) => void): Promise<morsecodeResponse>;
    execute(query?: Record<string, any>): Promise<morsecodeResponse>;
  }
}
