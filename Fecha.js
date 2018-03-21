var fecha =

 class {

    private int dia;
    private int mes;
    private int año;

    //Constructor por defecto
    public Fecha() {
    }

    int meses = [31,28,31,30,31,30,31,31,30,31,30,31];

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

    public boolean fechaCorrecta() {
        boolean diaCorrecto, mesCorrecto, añoCorrecto;
        añoCorrecto = año > 0;
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
        
        return diaCorrecto && mesCorrecto && añoCorrecto;
    }

    private boolean esBisiesto() {
        return (año % 4 == 0 && año % 100 != 0 || año % 400 == 0);
    }

} 
