function calcular(){

	var fe = new fecha();
    var resultado=eval(document.fo.Valores1.value);

}



var fecha =

 class {

    private int dia;
    private int mes;
    private int anio;

    //Constructor por defecto
    public Fecha() {
    }

    int meses = [31,28,31,30,31,30,31,31,30,31,30,31];

    //Constructor con parámetros
    public Fecha(int dia, int mes, int anio) {

        this.dia = dia;
        this.mes = mes;
        this.anio = anio;
    }

    //setters y getters
    public void setDia(int d) {
        dia = d;
    }
    public void setMes(int m) {
        mes = m;
    }
    public void setanio(int a) {
        anio = a;
    }

    public int getDia() {
        return dia;
    }
    public int getMes() {
        return mes;
    }
    public int getanio() {
        return anio;
    }

    public boolean fechaCorrecta() {
        boolean diaCorrecto, mesCorrecto, anioCorrecto;
        anioCorrecto = anio > 0;
        mesCorrecto = mes >= 1 && mes <= 12;
        switch (mes) {
        	case 1: diaCorrecto = dia >= 1 && dia <= 31;
            case 2:
                if (esBisiesto()) {
                    diaCorrecto = dia >= 1 && dia <= 29;
                } else {
                    diaCorrecto = dia >= 1 && dia <= 28;
                }
                break;
            case 3: diaCorrecto = dia >= 1 && dia <= 31; break;
            case 4: diaCorrecto = dia >= 1 && dia <= 30; break;
            case 5: diaCorrecto = dia >= 1 && dia <= 31; break;                       
            case 6: diaCorrecto = dia >= 1 && dia <= 30; break;
            case 7: diaCorrecto = dia >= 1 && dia <= 31; break;
            case 8: diaCorrecto = dia >= 1 && dia <= 31; break;                      
            case 9: diaCorrecto = dia >= 1 && dia <= 30; break;
            case 10: diaCorrecto = dia >= 1 && dia <= 31; break;          
            case 11: diaCorrecto = dia >= 1 && dia <= 30; break;
            case 12: diaCorrecto = dia >= 1 && dia <= 31; break;     
            default: diaCorrecto = dia >= 1 && dia <= 31; break;         
        }

        return diaCorrecto && mesCorrecto && anioCorrecto;
    }

    private boolean esBisiesto() {
        return (anio % 4 == 0 && anio % 100 != 0 || anio % 400 == 0);
    }

    public ImprimirLatino(int dia, int mes, int anio){
    	document.writeln(dia+"/"+mes+"/"+anio);
    }

     public ImprimirGringo(int dia, int mes, int anio){
    	document.writeln(mes+"/"+dia+"/"+anio);
    }   
} 
