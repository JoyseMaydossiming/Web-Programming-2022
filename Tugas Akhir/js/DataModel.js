class User{
    constructor(){
        this.id = 0;
        this.name = "";
        this.username = "";
        this.prodi = "";
        this.password = "";
        this.checkpassword = "";
    }

    toJsonObject(){
        this.JSONString = "{" +
            "\"id\":" + this.id + "," +
            "\"name\":\"" + this.name + "\"," +
            "\"username\":\"" + this.username + "\"," +
            "\"prodi\":\"" + this.prodi + "\"," +
            "\"password\":\"" + this.password + "\"" +
          "}";
        
        return JSON.parse(this.JSONString);
    }

    toJsonString(){
        this.JSONString = "{" +
            "\"id\":" + this.id + "," +
            "\"name\":\"" + this.name + "\"," +
            "\"username\":\"" + this.username + "\"," +
            "\"prodi\":\"" + this.prodi + "\"," +
            "\"password\":\"" + this.password + "\"" +
          "}";
          return this.JSONString;
    }
}

class Seminar{
    constructor(){
        this.nim = "";
        this.nama = "";
        this.prodi = "";
        this.tgl = "";
        this.jam = "";
        this.ruang = "";
        this.judul = "";
        this.type = "";
        this.dosen = "";
        this.penguji1 = "";
        this.penguji2 = "";

    }

    
    toJsonObject(){
        this.JSONString = "{" +
            "\"nim\":\"" + this.nim + "\"," +
            "\"nama\":\"" + this.nama + "\"," +
            "\"prodi\":\"" + this.prodi + "\"," +
            "\"tgl\":\"" + this.tgl + "\"," +
            "\"jam\":\"" + this.jam + "\"," +
            "\"ruang\":\"" + this.ruang + "\"," +
            "\"judul\":\"" + this.judul + "\"," +
            "\"type\":\"" + this.type + "\"," +
            "\"dosen\":\"" + this.dosen + "\"," +
            "\"penguji1\":\"" + this.penguji1 + "\"," +
            "\"penguji2\":\"" + this.penguji2 + "\"" +

          "}";
        
        return JSON.parse(this.JSONString);
    }

    toJsonString(){
        this.JSONString = "{" +
            "\"nim\":\"" + this.nim + "\"," +
            "\"nama\":\"" + this.nama + "\"," +
            "\"prodi\":\"" + this.prodi + "\"," +
            "\"tgl\":\"" + this.tgl + "\"," +
            "\"jam\":\"" + this.jam + "\"," +
            "\"ruang\":\"" + this.ruang + "\"," +
            "\"judul\":\"" + this.judul + "\"," +
            "\"type\":\"" + this.type + "\"," +
            "\"dosen\":\"" + this.dosen + "\"," +
            "\"penguji1\":\"" + this.penguji1 + "\"," +
            "\"penguji2\":\"" + this.penguji2 + "\"" +

          "}";
        
          return this.JSONString;
    }
}