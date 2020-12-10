	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
				countryName: $('#selCountry').val(),
				countryCode: $('#selCode').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCode').html(result['data'][0]['countryCode']);
					$('#txtCountryName').html(result['data'][0]['countryName']);
					$('#txtMinPostalCode').html(result['data'][0]['minPostalCode']);
					$('#txtMaxPostalCode').html(result['data'][0]['maxPostalCode']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		}); 
	

	});