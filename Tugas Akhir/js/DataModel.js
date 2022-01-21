class User{
    constructor(){
        this.id = 0;
        this.name = "";
        this.username = "";
        this.prodi = "";
        this.password = "";
        this.checkpassword = "";
    }
}

class Seminar{
    constructor(){
        this.id = 0;
        this.nim = "";
        this.nama = "";
        this.prodi = "";
        this.tgl = "";
        this.jam = "";
        this.ruang = "";
        this.judul = "";
        this.typeseminar = "";
        this.dosen = "";
        this.penguji1 = "";
        this.penguji2 = "";
        this.listPeserta = new Array();

    }
}

class Peserta {
    constructor(){
        this.idseminar = 0;
        this.id = 0;
        this.nim = "";
        this.nama = "";
    }
}