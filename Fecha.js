var fecha =

 class {

    private int dia;
    private int mes;
    private int año;

    //Constructor por defecto
    public Fecha() {
    }

    int cars = [31,28,31,];

    //Constructor con parámetros
    public Fecha(int dia, int mes, int año) {

        this.dia = dia;
        this.mes = mes;
        this.año = año;
    }

    //setters y getters
    public void setDia(int d) {
        dia = d;
    }
    public void setMes(int m) {
        mes = m;
    }
    public void setAño(int a) {
        año = a;
    }

    public int getDia() {
        return dia;
    }
    public int getMes() {
        return mes;
    }
    public int getAño() {
        return año;
    }

    private boolean esBisiesto() {
        return (año % 4 == 0 && año % 100 != 0 || año % 400 == 0);
    }

} 
