export interface Surat {
    nomor: number;
    nama: string;
    namaLatin: string;
    jumlahAyat: number;
    tempatTurun: string;
    arti: string;
    deskripsi: string;
    audioFull: AudioFull;
}

export type AudioFull = {
    [key: string]: string;
};

export interface SuratState {
    suratList: Surat[];
    loading: boolean;
    error: string | null;
}

