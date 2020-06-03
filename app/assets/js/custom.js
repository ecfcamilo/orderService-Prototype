/**
 *
 * You can write your JS code here, DO NOT touch the default style file
 * because it will make it harder for you to update.
 * 
 */

"use strict";

$(document).ready(function(){

    //Validação do Transfer Product:
    $("#type_transfer").change(function() {
        var type_transfer = $("#type_transfer").val();

        if(type_transfer == "transfer_between_tech"){
            $("#wh_destiny").show()
            $("#reason_transfer").hide()
            $(".serial_number_transf").hide()
            $("#sl_prod").show()
            $("#tx_barcode").hide()
        }
        else if(type_transfer == "devolution"){
            $("#reason_transfer").show()
            $("#wh_destiny").hide()
            $(".serial_number_transf").show()
            $("#sl_prod").hide()
            $("#tx_barcode").show()
        }
        else {
            $("#wh_destiny").hide()
            $("#reason_transfer").hide()
            $("#serial_number_transf").hide()
            $("#sl_prod").hide()
            $("#tx_barcode").show()
        }

    }).trigger('change');

    $("#job_status").change(function(){
        var status = $("#job_status").val();

        if (status != "completed" && status != "cancelled") {
            $("#reason_job").show();
        } else {
            $("#reason_job").hide();
        }
    })

    
})
