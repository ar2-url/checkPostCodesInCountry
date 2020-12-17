	$('#btnRun').click(function() {

		$.ajax({
			url: "libs/php/getCountryInfo.php",
			type: 'POST',
			dataType: 'json',
			data: {
		//I ve changed here for latitude and longitude
				latitude: $('#selCountry').val(),
				longitude: $('#selLanguage').val()
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
