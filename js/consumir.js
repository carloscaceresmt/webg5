const urlApi = "https://gedc07c6509dfcc-db.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client"

function peticionGet() {
    $.ajax({
        url: urlApi,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            console.log(data)
        },
        error: function(xhr, status) {
            console.log("Ha sucedido un problema al Consumir la Api " + xhr.status + " " + status)
        },
        complete: function(xhr, status) {
            console.log("Peticion Realilzada con Exito!!")
        }
    });
}

function peticionPost(codprode, nomprode, precioe, inventarioe) {

    $.ajax({
        url: urlApi,
        type: 'POST',
        dataType: 'json',
        data: {
            codprod: codprode,
            nomprod: nomprode,
            precio: precioe,
            inventario: inventarioe
        },
        error: function(xhr, status) {
            //   console.log("Ha sucedido un problema al Consumir la Api " + xhr.status + " " + status)
            if (xhr.status == 555) {
                console.log("Registro Existe!!")
            } else if (xhr.status == 201) {
                console.log("Guardo Registro con Exito")
            }
        },
        complete: function(xhr, status) {
            console.log("Peticion Realilzada con Exito!!")
        }
    });
}


function peticionPut(codprode, nomprode, precioe, inventarioe) {
    console.log("peticion put")
    let datos = {
        codprod: codprode,
        nomprod: nomprode,
        precio: precioe,
        inventario: inventarioe
    }
    let datasend = JSON.stringify(datos)

    $.ajax({
        method: "PUT",
        url: urlApi,
        data: datasend,
        dataType: 'json',
        contentType: "application/json",

        error: function(xhr, status) {

        },
        complete: function(xhr, status) {
            if (xhr.status == 201) {
                console.log("Editó Registro con Exito")
            }
            console.log("Peticion Realilzada con Exito!!")
        }
    });

}


function peticionDelete(codprode) {
    console.log("peticion put")
    let datos = {
        codprod: codprode
    }
    let datasend = JSON.stringify(datos)

    $.ajax({
        method: "DELETE",
        url: urlApi,
        data: datasend,
        dataType: 'json',
        contentType: "application/json",

        error: function(xhr, status) {
            console.log(xhr)

        },
        complete: function(xhr, status) {
            console.log(xhr)
            if (xhr.status == 204) {
                console.log("eliminó Registro con Exito")
            }
            console.log("Peticion Realilzada con Exito!!")
        }
    });


}