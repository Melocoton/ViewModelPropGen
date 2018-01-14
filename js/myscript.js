$(document).ready(function(){
    //$('#textarea1').trigger('autoresize');
    $('.generar').click(function(){
        var tipoPropiedad = $('#tipo').val();
        var nombrePropiedad = $('#nombre').val();
        var nombrePropiedadCap = nombrePropiedad.charAt(0).toUpperCase() + nombrePropiedad.slice(1);

        var resultado = "private " + tipoPropiedad + " " + nombrePropiedad + ";\n\n";
        resultado += "public " + tipoPropiedad + " " + nombrePropiedadCap + "\n";
        resultado += "{\n";
        resultado += "\tget { return "+nombrePropiedad+"; }\n\tset\n";
        resultado += "\t{\n";
        resultado += "\t\t"+nombrePropiedad + " = value;\n";
        resultado += "\t\tOnPropertyChanged(\""+nombrePropiedadCap+"\");\n";
        resultado += "\t}\n}";
        //Materialize.toast(tipoPropiedad+":"+nombrePropiedad+":"+nombrePropiedadCap,4000);
        $('#resultado').val(resultado);
        $('#resultado').trigger('autoresize');
    });
});